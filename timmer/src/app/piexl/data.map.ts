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
