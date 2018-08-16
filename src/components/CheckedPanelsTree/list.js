export const noItems = {
  emptyRootNCheckedList: {
    checkedList: [],
    data: {
    },
    result: {
    },
  },
  emptyRootNHasCheckedList: {
    checkedList: [{
      id: 1,
    }],
    data: {
    },
    result: {
    },
  },
};

export const oneItem = {
  checkedRoot: {
    checkedList: [{
      id: 1,
    }],
    data: {
      id: 1,
      name: 'Top',
      children: null,
    },
    result: {
      id: 1,
      name: 'Top',
      checked: 1,
      children: null,
    },
  },
  uncheckedRoot: {
    checkedList: [],
    data: {
      id: 1,
      name: 'Top',
      children: null,
    },
    result: {
      id: 1,
      name: 'Top',
      checked: 0,
      children: null,
    },
  },
};

export const oneBranch = {
  checkedRoot: {
    checkedList: [
      { id: 1 },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      checked: 1,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          checked: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              checked: 1,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  checked: 1,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  checkedPartially: {
    checkedList: [
      { id: 3 },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      checked: 1,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          checked: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              checked: 1,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  checked: 1,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  unCheckedItem1: {
    checkedList: [
      { id: 3 },
    ],
    onCheck: [
      {
        id: 4,
        checked: false,
      },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      checked: 0,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          checked: 0,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              checked: 0,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  checked: 0,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  unCheckedRoot1: {
    checkedList: [
      { id: 1 },
    ],
    onCheck: [
      {
        id: 1,
        checked: false,
      },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      checked: 0,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          checked: 0,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              checked: 0,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  checked: 0,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

export const twoBranches = {
  checkedRoot: {
    checkedList: [
      { id: 1 },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  parent: 6,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      checked: 1,
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          checked: 1,
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              checked: 1,
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  checked: 1,
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          checked: 1,
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              checked: 1,
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  checked: 1,
                  parent: 6,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  checkedPartially1: {
    checkedList: [
      { id: 3 },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  parent: 6,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      checked: 2,
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          checked: 1,
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              checked: 1,
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  checked: 1,
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          checked: 0,
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              checked: 0,
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  checked: 0,
                  parent: 6,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  checkedPartially2: {
    checkedList: [
      { id: 3 },
      { id: 7 },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  parent: 6,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      checked: 1,
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          checked: 1,
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              checked: 1,
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  checked: 1,
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          checked: 1,
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              checked: 1,
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  checked: 1,
                  parent: 6,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  addCheckedItem1: {
    checkedList: [
      { id: 5 },
    ],
    onCheck: [
      {
        id: 3,
        checked: true,
      },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  parent: 6,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      checked: 1,
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          checked: 1,
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              checked: 1,
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  checked: 1,
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          checked: 1,
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              checked: 1,
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  checked: 1,
                  parent: 6,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  unCheckedItem1: {
    checkedList: [
      { id: 5 },
    ],
    onCheck: [
      {
        id: 6,
        checked: false,
      },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  parent: 6,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      checked: 0,
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          checked: 0,
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              checked: 0,
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  checked: 0,
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          checked: 0,
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              checked: 0,
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  checked: 0,
                  parent: 6,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

export const deepBranches = {
  checkedRoot: {
    checkedList: [
      { id: 1 },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  parent: 6,
                  children: null,
                },
              ],
            },
            {
              id: 9,
              name: 'Child #9',
              parent: 5,
              children: [
                {
                  id: 10,
                  name: 'Child #10',
                  parent: 9,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 8,
          name: 'Child #8',
          parent: 1,
          children: null,
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      checked: 1,
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          checked: 1,
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              checked: 1,
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  checked: 1,
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          checked: 1,
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              checked: 1,
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  checked: 1,
                  parent: 6,
                  children: null,
                },
              ],
            },
            {
              id: 9,
              name: 'Child #9',
              checked: 1,
              parent: 5,
              children: [
                {
                  id: 10,
                  name: 'Child #10',
                  checked: 1,
                  parent: 9,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 8,
          name: 'Child #8',
          checked: 1,
          parent: 1,
          children: null,
        },
      ],
    },
  },
  checkedPartially2: {
    checkedList: [
      { id: 7 },
      { id: 8 },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  parent: 6,
                  children: null,
                },
              ],
            },
            {
              id: 9,
              name: 'Child #9',
              parent: 5,
              children: [
                {
                  id: 10,
                  name: 'Child #10',
                  parent: 9,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 8,
          name: 'Child #8',
          parent: 1,
          children: null,
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      checked: 2,
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          checked: 0,
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              checked: 0,
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  checked: 0,
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          checked: 2,
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              checked: 1,
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  checked: 1,
                  parent: 6,
                  children: null,
                },
              ],
            },
            {
              id: 9,
              name: 'Child #9',
              checked: 0,
              parent: 5,
              children: [
                {
                  id: 10,
                  name: 'Child #10',
                  checked: 0,
                  parent: 9,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 8,
          name: 'Child #8',
          checked: 1,
          parent: 1,
          children: null,
        },
      ],
    },
  },
  checkThenUncheck1: {
    checkedList: [
      { id: 5 },
      { id: 9 },
    ],
    onCheck: [
      {
        id: 3,
        checked: true,
      },
      {
        id: 8,
        checked: false,
      },
    ],
    data: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          parent: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              parent: 5,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  parent: 6,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 8,
          name: 'Child #8',
          parent: 1,
          children: [
            {
              id: 9,
              name: 'Child #9',
              parent: 8,
              children: null,
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'Tree Root',
      parent: null,
      checked: 2,
      children: [
        {
          id: 2,
          name: 'Child #2',
          parent: 1,
          checked: 1,
          children: [
            {
              id: 3,
              name: 'Child #3',
              parent: 2,
              checked: 1,
              children: [
                {
                  id: 4,
                  name: 'Child #4',
                  parent: 3,
                  checked: 1,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'Child #5',
          parent: 1,
          checked: 1,
          children: [
            {
              id: 6,
              name: 'Child #6',
              parent: 5,
              checked: 1,
              children: [
                {
                  id: 7,
                  name: 'Child #7',
                  parent: 6,
                  checked: 1,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: 8,
          name: 'Child #8',
          parent: 1,
          checked: 0,
          children: [
            {
              id: 9,
              name: 'Child #9',
              parent: 8,
              checked: 0,
              children: null,
            },
          ],
        },
      ],
    },
  },
  interact1: {
    checkedList: [
      { id: 4 },
      { id: 5 },
      { id: 10 },
      { id: 12 },
      { id: 13 },
    ],
    onCheck: [
      {
        id: 9,
        checked: true,
      },
      {
        id: 7,
        checked: false,
      },
      {
        id: 9,
        checked: false,
      },
    ],
    data: {
      id: 1,
      name: 'All',
      parent: null,
      children: [
        {
          id: 2,
          name: 'B',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'C',
              parent: 2,
              children: null,
            },
            {
              id: 4,
              name: 'D',
              parent: 2,
              children: null,
            },
            {
              id: 5,
              name: 'E',
              parent: 2,
              children: null,
            },
          ],
        },
        {
          id: 6,
          name: 'F',
          parent: 1,
          children: [
            {
              id: 7,
              name: 'G',
              parent: 6,
              children: [
                {
                  id: 12,
                  name: 'L',
                  parent: 6,
                  children: null,
                },
                {
                  id: 13,
                  name: 'M',
                  parent: 6,
                  children: null,
                },
              ],
            },
            {
              id: 8,
              name: 'H',
              parent: 6,
              children: [
                {
                  id: 10,
                  name: 'J',
                  parent: 8,
                  children: null,
                },
                {
                  id: 11,
                  name: 'K',
                  parent: 8,
                  children: null,
                },
              ],
            },
            {
              id: 9,
              name: 'III',
              parent: 6,
              children: null,
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'All',
      checked: 2,
      parent: null,
      children: [
        {
          id: 2,
          name: 'B',
          checked: 2,
          parent: 1,
          children: [
            {
              id: 3,
              name: 'C',
              checked: 0,
              parent: 2,
              children: null,
            },
            {
              id: 4,
              name: 'D',
              checked: 1,
              parent: 2,
              children: null,
            },
            {
              id: 5,
              name: 'E',
              checked: 1,
              parent: 2,
              children: null,
            },
          ],
        },
        {
          id: 6,
          name: 'F',
          checked: 2,
          parent: 1,
          children: [
            {
              id: 7,
              name: 'G',
              checked: 0,
              parent: 6,
              children: [
                {
                  id: 12,
                  name: 'L',
                  checked: 0,
                  parent: 6,
                  children: null,
                },
                {
                  id: 13,
                  name: 'M',
                  checked: 0,
                  parent: 6,
                  children: null,
                },
              ],
            },
            {
              id: 8,
              name: 'H',
              checked: 2,
              parent: 6,
              children: [
                {
                  id: 10,
                  name: 'J',
                  checked: 1,
                  parent: 8,
                  children: null,
                },
                {
                  id: 11,
                  name: 'K',
                  checked: 0,
                  parent: 8,
                  children: null,
                },
              ],
            },
            {
              id: 9,
              name: 'III',
              checked: 0,
              parent: 6,
              children: null,
            },
          ],
        },
      ],
    },
  },
  deepCheck: {
    checkedList: [
      { id: 4 },
      { id: 5 },
      { id: 10 },
      { id: 12 },
      { id: 13 },
    ],
    onCheck: [
      {
        id: 2,
        checked: true,
      },
    ],
    data: {
      id: 1,
      name: 'All',
      parent: null,
      children: [
        {
          id: 2,
          name: 'B',
          parent: 1,
          children: [
            {
              id: 3,
              name: 'C',
              parent: 2,
              children: null,
            },
            {
              id: 4,
              name: 'D',
              parent: 2,
              children: null,
            },
            {
              id: 5,
              name: 'E',
              parent: 2,
              children: null,
            },
          ],
        },
        {
          id: 6,
          name: 'F',
          parent: 1,
          children: [
            {
              id: 7,
              name: 'G',
              parent: 6,
              children: [
                {
                  id: 12,
                  name: 'L',
                  parent: 6,
                  children: null,
                },
                {
                  id: 13,
                  name: 'M',
                  parent: 6,
                  children: null,
                },
              ],
            },
            {
              id: 8,
              name: 'H',
              parent: 6,
              children: [
                {
                  id: 10,
                  name: 'J',
                  parent: 8,
                  children: null,
                },
                {
                  id: 11,
                  name: 'K',
                  parent: 8,
                  children: null,
                },
              ],
            },
            {
              id: 9,
              name: 'III',
              parent: 6,
              children: null,
            },
          ],
        },
      ],
    },
    result: {
      id: 1,
      name: 'All',
      checked: 2,
      parent: null,
      children: [
        {
          id: 2,
          name: 'B',
          checked: 1,
          parent: 1,
          children: [
            {
              id: 3,
              name: 'C',
              checked: 1,
              parent: 2,
              children: null,
            },
            {
              id: 4,
              name: 'D',
              checked: 1,
              parent: 2,
              children: null,
            },
            {
              id: 5,
              name: 'E',
              checked: 1,
              parent: 2,
              children: null,
            },
          ],
        },
        {
          id: 6,
          name: 'F',
          checked: 2,
          parent: 1,
          children: [
            {
              id: 7,
              name: 'G',
              checked: 1,
              parent: 6,
              children: [
                {
                  id: 12,
                  name: 'L',
                  checked: 1,
                  parent: 6,
                  children: null,
                },
                {
                  id: 13,
                  name: 'M',
                  checked: 1,
                  parent: 6,
                  children: null,
                },
              ],
            },
            {
              id: 8,
              name: 'H',
              checked: 2,
              parent: 6,
              children: [
                {
                  id: 10,
                  name: 'J',
                  checked: 1,
                  parent: 8,
                  children: null,
                },
                {
                  id: 11,
                  name: 'K',
                  checked: 0,
                  parent: 8,
                  children: null,
                },
              ],
            },
            {
              id: 9,
              name: 'III',
              checked: 0,
              parent: 6,
              children: null,
            },
          ],
        },
      ],
    },
  },
};
