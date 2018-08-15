import util from '../../common/util';
const { filterObjectKey } = util;

export default (props) => {
  const { chart, field, enable } = props;
  if (chart && field) {
    if (enable === false) {
      chart.axis(field, false);
    } else {
      const filterProps = filterObjectKey(props, ['field', 'chart', 'enable']);
      chart.axis(field, filterProps);
    }
  }
  return null;
};
