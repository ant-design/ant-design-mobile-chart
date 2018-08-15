import '@antv/f2/lib/component/tooltip';
import Tooltip from '@antv/f2/lib/plugin/tooltip';
import util from '../../common/util';
const { filterObjectKey } = util;

export default (props) => {
  const { chart, enable } = props;
  chart.registerPlugins(Tooltip);
  if (enable === false) {
    chart.tooltip(enable);
  } else {
    const filterProps = filterObjectKey(props, ['chart', 'enable']);
    chart.tooltip(filterProps);
  }
  return null;
};
