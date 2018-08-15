import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Axis } from '../../src';

Enzyme.configure({ adapter: new Adapter() });
const { shallow } = Enzyme;

const mockChart = {
  field: null,
  config: null,
  axis(field, config) {
    this.field = field;
    this.config = config;
  },
  clear() {
    this.field = null;
    this.config = null;
  },
};

describe('Axis测试', () => {
  afterEach((() => {
    mockChart.clear();
  }));
  test('不设置props', () => {
    const wrapper = shallow(<Axis chart={mockChart} />);
    expect(mockChart.field).toBeNull();
    expect(mockChart.config).toBeNull();
    expect(wrapper.html()).toBeNull();
  });

  test('只设置了filed', () => {
    const wrapper = shallow(<Axis chart={mockChart} field="name" />);
    expect(mockChart.field).toBe('name');
    expect(mockChart.config).toEqual(null);
    expect(wrapper.html()).toBeNull();
  });


  test('设置了props属性', () => {
    const wrapper = shallow(<Axis chart={mockChart} field="name" label="label" />);
    expect(mockChart.field).toBe('name');
    expect(mockChart.config).toEqual({ label: 'label' });
    expect(wrapper.html()).toBeNull();
  });

  test('设置了enable false', () => {
    const wrapper = shallow((
      <Axis
        chart={mockChart}
        field="name"
        label="label2"
        tickLine="tickLine"
        enable={false}
      />
    ));
    expect(mockChart.field).toBe('name');
    expect(mockChart.config).toEqual(false);
    expect(wrapper.html()).toBeNull();
  });
});
