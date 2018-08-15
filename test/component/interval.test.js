import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Interval } from '../../src';

Enzyme.configure({ adapter: new Adapter() });
const { shallow } = Enzyme;

const mockChart = {
  fileds: null,
  color1: null,
  color2: null,
  position(fileds) {
    this.fileds = fileds;
  },
  color(color1, color2) {
    this.color1 = color1;
    this.color2 = color2;
  },
  clear() {
    this.fileds = null;
    this.color1 = null;
    this.color2 = null;
  },
};

const chartWrapper = {
  geomConfig: null,
  interval(geomConfig) {
    this.geomConfig = geomConfig;
    return mockChart;
  },
  clear() {
    this.geomConfig = null;
  },
};

describe('Interval组件', () => {
  afterEach((() => {
    mockChart.clear();
    chartWrapper.clear();
  }));
  test('不设置props', () => {
    const wrapper = shallow(<Interval chart={chartWrapper} />);
    expect(chartWrapper.geomConfig).toBeUndefined();
    expect(mockChart.fileds).toBeNull();
    expect(mockChart.color1).toBeNull();
    expect(mockChart.color2).toBeNull();
    expect(wrapper.html()).toBeNull();
  });


  test('设置了props属性和geomConfig', () => {
    const wrapper = shallow(<Interval chart={chartWrapper} config="config" position="name*count" color={[1, 2]} />);
    expect(chartWrapper.geomConfig).toBe('config');
    expect(mockChart.fileds).toBe('name*count');
    expect(mockChart.color1).toBe(1);
    expect(mockChart.color2).toBe(2);
    expect(wrapper.html()).toBeNull();
  });
});
