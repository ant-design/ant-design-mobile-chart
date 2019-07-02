import util from '../../common/util';
const { filterObjectKey } = util;

export default (props) => {
  const { chart, type } = props;
  const filterProps = filterObjectKey(props, ['chart', 'type']);
  if (chart && type) {
    if (filterProps) {
      chart.coord(type, filterProps);
    } else {
      chart.coord(type);
    }
  }
  return null;
};
