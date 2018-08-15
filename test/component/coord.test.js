import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Coord } from '../../src';

Enzyme.configure({ adapter: new Adapter() });
const { shallow } = Enzyme;

const mockChart = {
  type: null,
  config: null,
  coord(type, config) {
    this.type = type;
    this.config = config;
  },
  clear() {
    this.type = null;
    this.config = null;
  },
};

describe('Coord测试', () => {
  afterEach((() => {
    mockChart.clear();
  }));

  test('不设置props', () => {
    const wrapper = shallow(<Coord chart={mockChart} />);
    expect(mockChart.type).toBeNull();
    expect(mockChart.config).toBeNull();
    expect(wrapper.html()).toBeNull();
  });

  test('只设置了type', () => {
    const wrapper = shallow(<Coord chart={mockChart} type="rect" />);
    expect(mockChart.type).toBe('rect');
    expect(mockChart.config).toBeUndefined();
    expect(wrapper.html()).toBeNull();
  });

  test('设置了props属性', () => {
    const wrapper = shallow(<Coord chart={mockChart} type="rect" label="label" />);
    expect(mockChart.type).toBe('rect');
    expect(mockChart.config).toEqual({ label: 'label' });
    expect(wrapper.html()).toBeNull();
  });
});
