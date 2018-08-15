/**
 * 判断是否方法
 * @param {Array} obj
 * @return {Boolean} bool
 */
function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}

/**
 * 判断是否数组对象
 * @param {Array} obj
 * @return {Boolean} bool
 */
function isArray(obj) {
  return Array.isArray(obj);
}

/**
 * 暂时先放这里
 * 不考虑用core-js等类库，原因：
 * 1. 这种类库会增加Array.prototype.includes，引用后如果哪天去掉了，但是如果被外部直接使用时就会有坑
 * @param {Array} arr 数组对象
 * @param {Object} item 数组元素
 * @return {Boolean} bool 是否存在
 */
function arrayIncludes(arr, item) {
  const len = arr.length;
  let i = 0;
  while (i < len) {
    if (arr[i] === item) {
      return true;
    }
    i++;
  }
  return false;
}

/**
 * 过滤对象不需要的字段
 * @param {Array} filterKeys 需要过滤的key
 * @param {Object} originObject 原始对象
 * @return {Object} buildObject 返回的新对象
 */
function filterObjectKey(originObject, filterKeys) {
  const buildObject = {};
  const keys = Object.keys(originObject).filter(key => filterKeys.indexOf(key) === -1);
  if (!keys.length) {
    return null;
  }
  keys.forEach((key) => {
    buildObject[key] = originObject[key];
  });
  return buildObject;
}

export default {
  isFunction,
  isArray,
  arrayIncludes,
  filterObjectKey,
};
