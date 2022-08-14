export const findTarget = <T>(arr: T[], target: T) =>
  arr.findIndex((a: T) => a === target);
