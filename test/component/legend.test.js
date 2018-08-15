import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Legend } from '../../src';

Enzyme.configure({ adapter: new Adapter() });
const { shallow } = Enzyme;

const mockChart = {
  config: null,
  plugin: null,
  legend(config) {
    this.config = config;
  },
  registerPlugins(plugin) {
    this.plugin = plugin;
  },
  clear() {
    this.plugin = null;
    this.config = null;
  },
};

describe('Legend测试', () => {
  afterEach((() => {
    mockChart.clear();
  }));
  test('不设置props', () => {
    const wrapper = shallow(<Legend chart={mockChart} />);
    expect(mockChart.plugin).not.toBeNull();
    expect(mockChart.config).toBeNull();
    expect(wrapper.html()).toBeNull();
  });

  test('设置了props属性', () => {
    const wrapper = shallow(<Legend chart={mockChart} offsetX="offsetX" offsetY="offsetY" />);
    expect(mockChart.plugin).not.toBeNull();
    expect(mockChart.config).toEqual({ offsetX: 'offsetX', offsetY: 'offsetY' });
    expect(wrapper.html()).toBeNull();
  });


  test('设置了enable false', () => {
    const wrapper = shallow((
      <Legend
        chart={mockChart}
        field="name"
        label="label2"
        tickLine="tickLine"
        enable={false}
      />
    ));
    expect(mockChart.plugin).not.toBeNull();
    expect(mockChart.config).toEqual(false);
    expect(wrapper.html()).toBeNull();
  });
});
