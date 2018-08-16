import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line
import CheckedPanelsTree from './CheckedPanelsTree';
import * as listMock from './list';

/**
 * Real Data Have
 * - A Store (Dictionary) Be Able to Extract List of Detail according to id
 * - A Store (Dictionary) Be Able to Extract List of rows
 *
 * Character of the list
 * - Each child will only have MAXIMUM ONE UNIQUE parent node
 *
 * Update?
 * - Server will take in a list of records id that get selected
 *
 * Display of additional data on the far right panel
 */

const getTreeDomDisplay = (data, checkedList) => {
  const tree = new CheckedPanelsTree(data, checkedList);
  return (
    <DisplayCenter style={{ maxHeight: '800px' }}>
      <p>tree: </p>
      <pre>{JSON.stringify(tree.get(), null, '  ')}</pre>
      <br /><br /><br />
    </DisplayCenter>
  );
};

storiesOf(`Component/${OrganismName}/CheckedPanelsTree/Stand Alone`, module)
  .add('one item: not checked', () => {
    const {
      data,
      checkedList,
    } = listMock.oneItem.uncheckedRoot;
    return getTreeDomDisplay(data, checkedList);
  })
  .add('one branch: all checked', () => {
    const {
      data,
      checkedList,
    } = listMock.oneBranch.checkedRoot;
    return getTreeDomDisplay(data, checkedList);
  })
  .add('one branch: partial checked', () => {
    const {
      data,
      checkedList,
    } = listMock.oneBranch.checkedPartially;
    return getTreeDomDisplay(data, checkedList);
  })
  .add('one branches: unchecked a child while its parent is checked', () => {
    const {
      data,
      checkedList,
      onCheck,
    } = listMock.oneBranch.unCheckedItem1;
    const tree = new CheckedPanelsTree(data, checkedList);
    tree.onCheck(onCheck[0].checked, onCheck[0].id);
    return (
      <div style={{ maxHeight: '800px' }}>
        <p>tree: </p>
        <pre>{JSON.stringify(tree.get(), null, '  ')}</pre>
        <br /><br /><br />
      </div>
    );
  })
  .add('two branches: all checked', () => {
    const {
      data,
      checkedList,
    } = listMock.twoBranches.checkedRoot;
    return getTreeDomDisplay(data, checkedList);
  })
  .add('two branches: add check', () => {
    const {
      data,
      checkedList,
      onCheck,
    } = listMock.twoBranches.addCheckedItem1;
    const tree = new CheckedPanelsTree(data, checkedList);
    tree.onCheck(onCheck[0].checked, onCheck[0].id);
    return (
      <div style={{ maxHeight: '800px' }}>
        <p>tree: </p>
        <pre>{JSON.stringify(tree.get(), null, '  ')}</pre>
        <br /><br /><br />
      </div>
    );
  })
  .add('two branches: uncheck', () => {
    const {
      data,
      checkedList,
      onCheck,
    } = listMock.twoBranches.unCheckedItem1;
    const tree = new CheckedPanelsTree(data, checkedList);
    tree.onCheck(onCheck[0].checked, onCheck[0].id);
    return (
      <div style={{ maxHeight: '800px' }}>
        <p>tree: </p>
        <pre>{JSON.stringify(tree.get(), null, '  ')}</pre>
        <br /><br /><br />
      </div>
    );
  })
  .add('deep branches: check then uncheck', () => {
    const {
      data,
      checkedList,
      onCheck,
    } = listMock.deepBranches.checkThenUncheck1;
    const tree = new CheckedPanelsTree(data, checkedList);
    tree.onCheck(onCheck[0].checked, onCheck[0].id);
    tree.onCheck(onCheck[1].checked, onCheck[1].id);
    return (
      <div style={{ maxHeight: '800px' }}>
        <p>tree: </p>
        <pre>{JSON.stringify(tree.get(), null, '  ')}</pre>
        <br /><br /><br />
      </div>
    );
  })
  .add('deep branches: multiple interactions', () => {
    const {
      data,
      checkedList,
      onCheck,
    } = listMock.deepBranches.interact1;
    const tree = new CheckedPanelsTree(data, checkedList);
    tree.onCheck(onCheck[0].checked, onCheck[0].id);
    tree.onCheck(onCheck[1].checked, onCheck[1].id);
    tree.onCheck(onCheck[2].checked, onCheck[2].id);
    return (
      <div style={{ maxHeight: '800px' }}>
        <p>tree: </p>
        <pre>{JSON.stringify(tree.get(), null, '  ')}</pre>
        <br /><br /><br />
      </div>
    );
  })
  .add('deep branches: deep check', () => {
    const {
      data,
      checkedList,
      onCheck,
    } = listMock.deepBranches.deepCheck;
    const tree = new CheckedPanelsTree(data, checkedList);
    tree.onCheck(onCheck[0].checked, onCheck[0].id);
    return (
      <div style={{ maxHeight: '800px' }}>
        <p>tree: </p>
        <pre>{JSON.stringify(tree.get(), null, '  ')}</pre>
        <br /><br /><br />
      </div>
    );
  });
