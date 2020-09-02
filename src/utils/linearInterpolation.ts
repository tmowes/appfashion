export const linearInterpolation = (
  v0: number,
  v1: number,
  t: number,
): number => (1 - t) * v0 + t * v1
