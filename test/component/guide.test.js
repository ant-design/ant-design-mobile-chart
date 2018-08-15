import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Guide } from '../../src';

Enzyme.configure({ adapter: new Adapter() });
const { shallow } = Enzyme;

const mockChart = {
  config: null,
  tag(config) {
    this.config = config;
  },
  clear() {
    this.config = null;
  },
};

const guideWrapper = {
  plugin: null,
  registerPlugins(plugin) {
    this.plugin = plugin;
  },
  guide() {
    return mockChart;
  },
  clear() {
    this.plugin = null;
  },
};


describe('Guide测试', () => {
  afterEach((() => {
    mockChart.clear();
    guideWrapper.clear();
  }));
  test('不设置props', () => {
    const wrapper = shallow(<Guide chart={guideWrapper} />);
    expect(guideWrapper.plugin).toBeNull();
    expect(mockChart.config).toBeNull();
    expect(wrapper.html()).toBeNull();
  });

  test('设置了tag', () => {
    const wrapper = shallow(<Guide chart={guideWrapper} type="tag" offsetX="offsetX" offsetY="offsetY" />);
    expect(guideWrapper.plugin).not.toBeNull();
    expect(mockChart.config).toEqual({ offsetX: 'offsetX', offsetY: 'offsetY' });
    expect(wrapper.html()).toBeNull();
  });

  test('设置了不存在的组件', () => {
    const wrapper = shallow(<Guide chart={guideWrapper} type="tag1" offsetX="offsetX" offsetY="offsetY" />);
    expect(guideWrapper.plugin).not.toBeNull();
    expect(mockChart.config).toBeNull();
    expect(wrapper.html()).toBeNull();
  });
});
