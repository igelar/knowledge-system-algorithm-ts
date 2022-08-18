// 时间复杂度：O(1) < O(㏒n) < O(n½) < O(n) < O(n㏒n) < O(n²) < O(2ⁿ) < O(n!)

// 这个没什么说的，就是遍历比对
export const findTarget = <T>(arr: T[], target: T) =>
  arr.findIndex((a: T) => a === target);
