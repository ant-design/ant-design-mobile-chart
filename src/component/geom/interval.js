import util from '../../common/util';
const { isFunction, isArray, filterObjectKey } = util;

export default (props) => {
  const { chart, config } = props;
  const geom = chart.interval(config);
  const filterProps = filterObjectKey(props, ['chart']);

  for (const key in filterProps) {
    const fn = geom[key];
    const value = props[key];
    if (isFunction(fn)) {
      if (isArray(value)) {
        fn.apply(geom, value);
      } else {
        geom[key](value);
      }
    }
  }
  return null;
};
