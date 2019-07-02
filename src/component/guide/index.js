import util from '../../common/util';
const { isFunction, filterObjectKey } = util;

export default (props) => {
  const { chart, type } = props;
  if (chart && type) {
    const guide = chart.guide();
    if (!isFunction(guide[type])) return null;
    const filterProps = filterObjectKey(props, ['chart', 'type']);
    guide[type](filterProps);
  }
  return null;
};
