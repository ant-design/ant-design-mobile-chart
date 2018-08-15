import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Scale } from '../../src';

Enzyme.configure({ adapter: new Adapter() });
const { shallow } = Enzyme;

const mockChart = {
  field: null,
  config: null,
  scale(field, config) {
    this.field = field;
    this.config = config;
  },
  clear() {
    this.field = null;
    this.config = null;
  },
};

describe('Scale测试', () => {
  afterEach((() => {
    mockChart.clear();
  }));
  test('不设置props', () => {
    const wrapper = shallow(<Scale chart={mockChart} />);
    expect(mockChart.field).toBeNull();
    expect(mockChart.config).toBeNull();
    expect(wrapper.html()).toBeNull();
  });

  test('只设置了filed', () => {
    const wrapper = shallow(<Scale chart={mockChart} field="name" />);
    expect(mockChart.field).toBe('name');
    expect(mockChart.config).toBeNull();
    expect(wrapper.html()).toBeNull();
  });

  test('设置了props属性', () => {
    const wrapper = shallow(<Scale chart={mockChart} field="name" label="label" />);
    expect(mockChart.field).toBe('name');
    expect(mockChart.config).toEqual({ label: 'label' });
    expect(wrapper.html()).toBeNull();
  });
});
