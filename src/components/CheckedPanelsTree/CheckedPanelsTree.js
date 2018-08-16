import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const CHECKED = 1;
const UNCHECKED = 0;
const PARTIAL_CHECKED = 2;

function converCheckedListToDict(list = []) {
  if (isEmpty(list)) return {};

  const dict = {};
  list.forEach((item) => {
    dict[item.id] = 1;
  });
  return dict;
}

function hasChildren(treeNodes, childPath) {
  return get(treeNodes, childPath, false);
}

function isEveryChildChecked(treeNodes, dict) {
  return treeNodes.children.every((child) => {
    if (!isEmpty(child.children)) {
      return isEveryChildChecked(child, dict);
    }

    const childHasCheckedOrDictHasChildChecked =
      child.checked === 1 || dict[child.id] === 1;
    return childHasCheckedOrDictHasChildChecked;
  });
}

function isSomeChildChecked(treeNodes, dict) {
  return treeNodes.children.some((child) => {
    if (!isEmpty(child.children)) {
      return isSomeChildChecked(child, dict);
    }
    const childHasCheckedOrDictHasChildChecked =
      child.checked === 1
      || dict[child.id] === 1;
    return childHasCheckedOrDictHasChildChecked;
  });
}

function getCheckStatusNodeParent(node) {
  if (node.children.every(child => (child.checked && child.checked === CHECKED))) {
    return 1;
  } else if (node.children.some(child =>
    ((child.checked && child.checked === CHECKED)
      || (child.checked && child.checked === PARTIAL_CHECKED)))) {
    return 2;
  }
  return 0;
}

function getCheckedStatus(treeNodes, dict) {
  // the order is CRITICAL! DO NOT CHANGE!
  if (isEveryChildChecked(treeNodes, dict)) {
    return 1;
  }
  if (isSomeChildChecked(treeNodes, dict)) {
    return 2;
  }
  return 0;
}

function setCheckStatusForAllChildrenInDict(node, checked, dict) {
  const checkedStatus = checked ? 1 : 0;
  const newDict = dict;
  newDict[node.id] = checkedStatus;
  if (!isEmpty(node.children)) {
    node.children.forEach(child => setCheckStatusForAllChildrenInDict(child, checked, newDict));
  }
  return newDict;
}

function cleanupUnCheckedOrPartialCheckedFromDict(dict) {
  const newDict = {};
  const choosenKeys = Object.keys(dict)
    .filter(item => (dict[item] === 1));
  choosenKeys.forEach((key) => { newDict[key] = dict[key]; });
  return newDict;
}
class CheckedPanelsTree {
  constructor(tree, checkedList, childPath = 'children', parentIdPath = 'parent') {
    this.tree = tree;
    this.treeCopy = { ...tree };
    this.treeOriginalCopy = { ...tree };
    this.childPath = childPath;
    this.parentIdPath = parentIdPath;
    this.parentIdsDictionary = this.buildParentIdsDict(tree);

    this.checkedPanelItemsDictionary = {};
    this.checkedPanelItemsDictionary = converCheckedListToDict(checkedList);

    // important: it should execute before the modification looop kick in!
    this.checkedPanelItemsDictionary =
      this.generateCheckedOnlyDict(this.checkedPanelItemsDictionary, this.tree);

    this.tree = this.buildCheckedTree(tree);
    this.flattenNodesTree = {};
    this.buildFlattenNodesTree(this.tree);
  }

  buildFlattenNodesTree(tree) {
    this.flattenNodesTree[tree.id] = tree;
    if (!isEmpty(tree.children)) {
      return tree.children.forEach(child => this.buildFlattenNodesTree(child));
    }
    return this.flattenNodesTree;
  }
  generateCheckedOnlyDict(dict, tree) {
    if (JSON.stringify(tree) === '{}') return dict;
    const newDict = dict;
    const id = get(tree, 'id', null);
    const parentId = get(tree, this.parentIdPath, null);
    const isParentChecked = newDict[parentId];
    const isSelfChecked = newDict[id];
    newDict[id] = (isParentChecked || isSelfChecked) ? 1 : tree.checked;

    if (hasChildren(tree, this.childPath)) {
      const children = get(tree, this.childPath, null);
      children.forEach(child => this.generateCheckedOnlyDict(newDict, child));
    }
    return newDict;
  }

  getCheckedPanelItemsDictionary() {
    return this.checkedPanelItemsDictionary;
  }

  dictUpdate(checked, parentNode, thisNode) {
    const updatedCheckStatus = checked ? 1 : 0;
    // process children
    this.checkedPanelItemsDictionary =
      setCheckStatusForAllChildrenInDict(
        thisNode,
        updatedCheckStatus,
        this.checkedPanelItemsDictionary
      );

    // process parents
    if (parentNode.checked === CHECKED || parentNode.checked === UNCHECKED) {
      if (get(parentNode.children, 'length', 0) === 1) {
        this.checkedPanelItemsDictionary[parentNode.id] = !parentNode.checked ? 1 : 0;
      } else if (parentNode.children.length > 1) {
        this.checkedPanelItemsDictionary[parentNode.id] = getCheckStatusNodeParent(parentNode);
      }
    } else if (parentNode.checked === PARTIAL_CHECKED) {
      this.checkedPanelItemsDictionary[parentNode.id] = getCheckStatusNodeParent(parentNode);
    }
    
    this.checkedPanelItemsDictionary =
      cleanupUnCheckedOrPartialCheckedFromDict(this.checkedPanelItemsDictionary);
  }
  onCheck(checked, id) {
    this.checkedPanelItemsDictionary =
      this.generateCheckedOnlyDict(this.checkedPanelItemsDictionary, this.treeCopy);
    const checkedStatus = checked ? 1 : 0;
    this.checkedPanelItemsDictionary[id] = checkedStatus;

    const thisNode = get(this.flattenNodesTree, id, null);
    const parentId = thisNode ? get(thisNode, this.parentIdPath, null) : null;
    const parentNode = get(this.flattenNodesTree, parentId, null);

    if (!parentNode) {
      // note: if its uncheck/check of root level,
      // wipe this.checkedPanelItemsDictionary clean first
      this.checkedPanelItemsDictionary = {};
      this.checkedPanelItemsDictionary[id] = checkedStatus;
    } else {
      this.dictUpdate(checked, parentNode, thisNode);
    }
    this.tree = this.buildCheckedTree(this.treeCopy);
  }

  addMissingChildChecks(tree, dict) {
    const newDict = { ...dict };
    if (JSON.stringify(tree) === '{}') return {};
    if (hasChildren(tree, this.childPath)) {
      const children = get(tree, this.childPath, null);
      children.forEach(child => this.addMissingChildChecks(child, dict));
    }
    const id = get(tree, 'id', null);
    const parentId = get(tree, this.parentIdPath, null);
    newDict[id] = parentId;
    return newDict;
  }

  setIndeterminatedCheck(rows, childPath, parentIdPath) {
    return rows.map((row) => {
      const child = get(row, childPath, []);
      const childIsNotEmpty = !isEmpty(child);
      const parentId = get(row, parentIdPath, null);
      const parentChecked = this.checkedPanelItemsDictionary[parentId];

      if (childIsNotEmpty && !parentChecked) {
        return {
          ...row,
          checked: getCheckedStatus(row, this.checkedPanelItemsDictionary),
          [childPath]: this.setIndeterminatedCheck(
            child,
            childPath,
            parentIdPath
          ),
        };
      }

      const newRow = {
        ...row,
        checked: row.checked ? 1 : 0,
      };
      return newRow;
    });
  }

  buildParentIdsDict(tree, dict) {
    if (JSON.stringify(tree) === '{}') return {};
    if (hasChildren(tree, this.childPath)) {
      const children = get(tree, this.childPath, null);
      children.forEach(child => this.buildParentIdsDict(child, dict));
    }
    const newDict = { ...dict };
    const id = get(tree, 'id', null);
    const parentId = get(tree, this.parentIdPath, null);
    newDict[id] = parentId;
    return newDict;
  }

  getCheckedList() {
    return converDictToArray(this.checkedPanelItemsDictionary);
  }

  get() {
    return this.tree;
  }

  buildCheckedTree(tree) {
    if (JSON.stringify(tree) === '{}') return {};
    const id = get(tree, 'id', null);
    const checkedStatus = this.checkedPanelItemsDictionary[id];
    if (hasChildren(tree, this.childPath)) {
      const children = get(tree, this.childPath, null);
      const item = {
        ...tree,
        checked: checkedStatus || getCheckedStatus(tree, this.checkedPanelItemsDictionary),
        children: children.map(childNode => this.buildCheckedTree(childNode)),
      };
      return item;
    }
    const item = {
      ...tree,
      checked: typeof checkedStatus === 'undefined' ? 0 : checkedStatus,
    };
    return item;
  }
}

export default CheckedPanelsTree;
