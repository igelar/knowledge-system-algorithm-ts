// 时间复杂度：O(1) < O(㏒n) < O(n½) < O(n) < O(n㏒n) < O(n²) < O(2ⁿ) < O(n!)

// 这个没什么说的，就是遍历比对
/** 初级版start */
export const findTarget = <T>(arr: T[], target: T) =>
  arr.findIndex((a: T) => a === target);
/** 初级版end */

/** 升级版start */
// 判断是否是对象
const isObject = (o: any) => typeof o === "object" && o !== null;
// 判断是否同类型
const isSameType = (a: any, b: any) =>
  Object.prototype.toString.call(a) === Object.prototype.toString.call(b);
// 判断是否值相等
const isEqual = (a: any, b: any): boolean => {
  // 非对象，直接比较值
  if (!isObject(a) || !isObject(b)) {
    return a === b;
  }

  // 均为对象且引用相同直接返回true
  if (a === b) return true;
  // 类型不一致返回false
  if (!isSameType(a, b)) return false;
  // 获取对象所有key
  const akeys = [...Object.keys(a), ...Object.getOwnPropertySymbols(a)];
  const bkeys = [...Object.keys(b), ...Object.getOwnPropertySymbols(b)];
  // 长度不一致，直接返回false
  if (akeys.length !== bkeys.length) return false;
  // 遍历比较每一个属性
  for (let i = 0; i < akeys.length; i++) {
    // key不一致返回false
    if (akeys[i] !== bkeys[i]) return false;
    // 递归比较，不相等返回false
    const isEq = isEqual(a[akeys[i]], b[bkeys[i]]);
    if (!isEq) return false;
  }

  return true;
};
// 升级版：考虑对象
export const advancedFindTarget = <T>(arr: T[], target: T) =>
  arr.findIndex((a: T) => isEqual(a, target));
/** 升级版end */
