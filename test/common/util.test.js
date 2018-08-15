import { util } from '../../src';

const {
  isFunction, isArray, arrayIncludes, filterObjectKey,
} = util;

describe('工具方法', () => {
  describe('isFunction', () => {
    it('传undefined', () => {
      expect(isFunction(undefined)).toBe(false);
    });

    it('传对象{}', () => {
      expect(isFunction({})).toBe(false);
    });

    it('传方法() => {}', () => {
      expect(isFunction(() => {})).toBe(true);
    });
  });

  describe('isArray', () => {
    it('传undefined', () => {
      expect(isArray(undefined)).toBe(false);
    });

    it('传对象{}', () => {
      expect(isArray({})).toBe(false);
    });

    it('传数组[]', () => {
      expect(isArray([])).toBe(true);
    });
  });


  describe('arrayIncludes', () => {
    it('数字数组测试存在', () => {
      expect(arrayIncludes([1, 2, 3, 4], 3)).toBe(true);
    });

    it('数字数组测试不存在', () => {
      expect(arrayIncludes([1, 2, 3, 4], 5)).toBe(false);
    });

    it('对象数组测试', () => {
      const array = [{ count: 1 }, { count: 2 }];
      expect(arrayIncludes(array, array[1])).toBe(true);
    });

    it('对象数组测试，数组外元素比较', () => {
      const array = [{ count: 1 }, { count: 2 }];
      expect(arrayIncludes(array, { count: 2 })).toBe(false);
    });
  });


  describe('filterObjectKey', () => {
    const originData = {
      key1: 'key1',
      key2: 'key2',
      key3: 'key3',
      key4: 'key4',
    };
    it('正确过滤', () => {
      expect(filterObjectKey(originData, ['key1', 'key2'])).toEqual({
        key3: 'key3',
        key4: 'key4',
      });
    });

    it('返回null', () => {
      expect(filterObjectKey(originData, ['key1', 'key2', 'key3', 'key4'])).toEqual(null);
    });
  });
});
