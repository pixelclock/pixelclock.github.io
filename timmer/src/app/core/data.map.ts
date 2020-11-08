const top = (row: number, column: number) => {
  return (column === 11 && row >= 1 && row <= 4);
};
const middle = (row: number, column: number) => {
  return (column === 6 && row >= 1 && row <= 4);
};
const bottom = (row: number, column: number) => {
  return (column === 1 && row >= 1 && row <= 4);
};
const topLeft = (row: number, column: number) => {
  return (row === 1 && column >= 6 && column <= 11);
};
const topRight = (row: number, column: number) => {
  return (row === 4 && column >= 6 && column <= 11);
};
const bottomRight = (row: number, column: number) => {
  return (row === 4 && column >= 1 && column <= 6);
};
const bottomLeft = (row: number, column: number) => {
  return (row === 1 && column >= 1 && column <= 6);
};

export const dataMap = {
  0: (row: number, column: number) => {
    return top(row, column) ||
      bottom(row, column) ||
      topLeft(row, column) ||
      topRight(row, column) ||
      bottomLeft(row, column) ||
      bottomRight(row, column);
  },
  1: (row: number, column: number) => {
    return topRight(row, column) || bottomRight(row, column);
  },
  2: (row: number, column: number) => {
    return top(row, column) ||
      bottom(row, column) ||
      middle(row, column) ||
      topRight(row, column) ||
      bottomLeft(row, column);
  },
  3: (row: number, column: number) => {
    return top(row, column) ||
      bottom(row, column) ||
      middle(row, column) ||
      topRight(row, column) ||
      bottomRight(row, column);
  },
  4: (row: number, column: number) => {
    return middle(row, column) ||
      topLeft(row, column) ||
      topRight(row, column) ||
      bottomRight(row, column);
  },
  5: (row: number, column: number) => {
    return top(row, column) ||
      bottom(row, column) ||
      middle(row, column) ||
      topLeft(row, column) ||
      bottomRight(row, column);
  },
  6: (row: number, column: number) => {
    return top(row, column) ||
      bottom(row, column) ||
      middle(row, column) ||
      topLeft(row, column) ||
      bottomLeft(row, column) ||
      bottomRight(row, column);
  },
  7: (row: number, column: number) => {
    return top(row, column) ||
      topRight(row, column) ||
      bottomRight(row, column);
  },
  8: (row: number, column: number) => {
    return top(row, column) ||
      middle(row, column) ||
      bottom(row, column) ||
      topLeft(row, column) ||
      topRight(row, column) ||
      bottomLeft(row, column) ||
      bottomRight(row, column);
  },
  9: (row: number, column: number) => {
    return top(row, column) ||
      middle(row, column) ||
      bottom(row, column) ||
      topLeft(row, column) ||
      topRight(row, column) ||
      bottomRight(row, column);
  },
};

export const colorMap = [
  '#ef9a9a',
  '#f48fb1',
  '#ce93d8',
  '#e57373',
  '#f06292',
  '#ba68c8',
  '#ef5350',
  '#ec407a',
  '#ab47bc',
  '#b39ddb',
  '#9fa8da',
  '#90caf9',
  '#9575cd',
  '#7986cb',
  '#64b5f6',
  '#7e57c2',
  '#5c6bc0',
  '#42a5f5',
  '#81d4fa',
  '#80deea',
  '#80cbc4',
  '#4fc3f7',
  '#4dd0e1',
  '#4db6ac',
  '#29b6f6',
  '#26c6da',
  '#26a69a',
  '#ffab91',
  '#bcaaa4',
  '#eeeeee',
  '#ff8a65',
  '#a1887f',
  '#e0e0e0',
  '#ff7043',
  '#8d6e63',
  '#bdbdbd',
  '#b0bec5',
  '#90a4ae',
  '#78909c'
];
