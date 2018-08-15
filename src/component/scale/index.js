import util from '../../common/util';
const { filterObjectKey } = util;

export default (props) => {
  const { chart, field } = props;
  if (chart && field) {
    const filterProps = filterObjectKey(props, ['field', 'chart']);
    chart.scale(field, filterProps);
  }
  return null;
};
