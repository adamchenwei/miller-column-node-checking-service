import CheckedPanelsTree from "./CheckedPanelsTree";
import * as listMock from "./list";


describe('CheckedPanelsTree', () => {
  describe('No Items', () => {
    it('should return empty object', () => {
      const {
        data,
        checkedList,
        result,
      } = listMock.noItems.emptyRootNCheckedList;
      const tree = new CheckedPanelsTree(data, checkedList);
      expect(tree.get()).toEqual(result);
    });

    it('should return empty object even has checkedList passed in', () => {
      const {
        data,
        checkedList,
        result,
      } = listMock.noItems.emptyRootNHasCheckedList;
      const tree = new CheckedPanelsTree(data, checkedList);
      expect(tree.get()).toEqual(result);
    });
  });

  describe('One Item', () => {
    it('should mark check correctly for root item checked', () => {
      const {
        data,
        checkedList,
        result,
      } = listMock.oneItem.checkedRoot;
      const tree = new CheckedPanelsTree(data, checkedList);
      expect(tree.get()).toEqual(result);
    });

    it('should mark unchecked correctly for root item', () => {
      const {
        data,
        checkedList,
        result,
      } = listMock.oneItem.uncheckedRoot;
      const tree = new CheckedPanelsTree(data, checkedList);
      expect(tree.get()).toEqual(result);
    });
  });

  describe('One Branch Tree', () => {
    it('should mark check correctly for root item checked', () => {
      const {
        data,
        checkedList,
        result,
      } = listMock.oneBranch.checkedRoot;
      const tree = new CheckedPanelsTree(data, checkedList);
      expect(tree.get()).toEqual(result);
    });

    it('should mark check correctly for partially checked', () => {
      const {
        data,
        checkedList,
        result,
      } = listMock.oneBranch.checkedPartially;
      const tree = new CheckedPanelsTree(data, checkedList);
      expect(tree.get()).toEqual(result);
    });

    it('should mark check correctly when uncheck root after its root checked', () => {
      const {
        data,
        checkedList,
        result,
        onCheck,
      } = listMock.oneBranch.unCheckedRoot1;
      const tree = new CheckedPanelsTree(data, checkedList);
      tree.onCheck(onCheck[0].checked, onCheck[0].id);
      expect(tree.get()).toEqual(result);
    });

    it('should mark uncheck correctly when unchecked a child while parent is checked', () => {
      const {
        data,
        checkedList,
        result,
        onCheck,
      } = listMock.oneBranch.unCheckedItem1;
      const tree = new CheckedPanelsTree(data, checkedList);
      tree.onCheck(onCheck[0].checked, onCheck[0].id);
      expect(tree.get()).toEqual(result);
    });

    // it('should mark check correctly for none are checked', () => {
    // });
  });

  describe('Two Branch Tree', () => {
    it('should mark check correctly for root item checked', () => {
      const {
        data,
        checkedList,
        result,
      } = listMock.twoBranches.checkedRoot;
      const tree = new CheckedPanelsTree(data, checkedList);
      expect(tree.get()).toEqual(result);
    });

    it('should mark check correctly for 1 partially checked item', () => {
      const {
        data,
        checkedList,
        result,
      } = listMock.twoBranches.checkedPartially1;
      const tree = new CheckedPanelsTree(data, checkedList);
      expect(tree.get()).toEqual(result);
    });

    it('should mark check correctly for 2 partially checked item', () => {
      const {
        data,
        checkedList,
        result,
      } = listMock.twoBranches.checkedPartially2;
      const tree = new CheckedPanelsTree(data, checkedList);
      expect(tree.get()).toEqual(result);
    });

    it('should mark uncheck correctly when unchecked a child while parent is checked', () => {
      const {
        data,
        checkedList,
        result,
        onCheck,
      } = listMock.twoBranches.unCheckedItem1;
      const tree = new CheckedPanelsTree(data, checkedList);
      tree.onCheck(onCheck[0].checked, onCheck[0].id);
      expect(tree.get()).toEqual(result);
    });

    it('should mark check correctly when check a child while parent is unchecked', () => {
      const {
        data,
        checkedList,
        result,
        onCheck,
      } = listMock.twoBranches.addCheckedItem1;
      const tree = new CheckedPanelsTree(data, checkedList);
      tree.onCheck(onCheck[0].checked, onCheck[0].id);
      expect(tree.get()).toEqual(result);
    });
  });

  describe('Deep Tree', () => {
    it('should mark check correctly for root item checked', () => {
      const {
        data,
        checkedList,
        result,
      } = listMock.deepBranches.checkedRoot;
      const tree = new CheckedPanelsTree(data, checkedList);
      expect(tree.get()).toEqual(result);
    });

    it('should mark check correctly for partially checked', () => {
      const {
        data,
        checkedList,
        result,
      } = listMock.deepBranches.checkedPartially2;
      const tree = new CheckedPanelsTree(data, checkedList);
      expect(tree.get()).toEqual(result);
    });

    it('should mark check correctly after check and uncheck an item from a partial checked tree', () => {
      const {
        data,
        checkedList,
        result,
        onCheck,
      } = listMock.deepBranches.checkThenUncheck1;
      const tree = new CheckedPanelsTree(data, checkedList);
      tree.onCheck(onCheck[0].checked, onCheck[0].id);
      tree.onCheck(onCheck[1].checked, onCheck[1].id);
      expect(tree.get()).toEqual(result);
    });

    it('should mark check correctly after interacted 3 times', () => {
      const {
        data,
        checkedList,
        result,
        onCheck,
      } = listMock.deepBranches.interact1;
      const tree = new CheckedPanelsTree(data, checkedList);
      tree.onCheck(onCheck[0].checked, onCheck[0].id);
      tree.onCheck(onCheck[1].checked, onCheck[1].id);
      tree.onCheck(onCheck[2].checked, onCheck[2].id);
      expect(tree.get()).toEqual(result);
    });

    it('should mark check correctly after deep check', () => {
      const {
        data,
        checkedList,
        result,
        onCheck,
      } = listMock.deepBranches.deepCheck;
      const tree = new CheckedPanelsTree(data, checkedList);
      tree.onCheck(onCheck[0].checked, onCheck[0].id);
      expect(tree.get()).toEqual(result);
    });

    /**
      * BUGGY scenarios need further refinements
      * DASH-
      * 1. in should mark check correctly after deep check add one more step
      *    -> check root item. observe all child are unchecked but root is checked.
      *    However, if check is default at root, it will display correctly.
      *    Possible place to investigate is buildCheckedTree, or maybe a order
      *    problem as well as flatNodes check status is been utilized.
      *   2. partial checked, try add a new item, remove another one, and add again.
     */
  });
});