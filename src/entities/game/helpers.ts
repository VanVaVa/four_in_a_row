export const generateInitialBoard: (
  x: number,
  y: number
) => (number | null)[][] = (x, y) =>
  Array.from({ length: x }, () => Array.from({ length: y }, () => null));
