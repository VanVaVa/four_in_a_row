export const generateInitialBoard: (
  x: number,
  y: number
) => (number | null)[][] = (x, y) =>
  Array.from({ length: y }, () => Array.from({ length: x }, () => null));
