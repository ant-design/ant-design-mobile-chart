import util from '../../common/util';
const { filterObjectKey } = util;

export default (props) => {
  const { chart, enable } = props;
  if (enable === false) {
    chart.tooltip(enable);
  } else {
    const filterProps = filterObjectKey(props, ['chart', 'enable']);
    chart.tooltip(filterProps);
  }
  return null;
};
