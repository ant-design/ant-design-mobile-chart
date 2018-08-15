import Legend from '@antv/f2/lib/plugin/legend';
import util from '../../common/util';
const { filterObjectKey } = util;

export default (props) => {
  const { chart, enable } = props;
  chart.registerPlugins(Legend);
  if (enable === false) {
    chart.legend(enable);
  } else {
    const filterProps = filterObjectKey(props, ['chart', 'enable']);
    chart.legend(filterProps);
  }
  return null;
};
