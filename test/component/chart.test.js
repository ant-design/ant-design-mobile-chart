import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Chart, Line } from '../../src';

Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

const data = [{ name: '苹果', count: 5 }, { name: '香蕉', count: 3 }];
describe('Chart组件', () => {
  it('canvas设置block样式', () => {
    const wrapper = mount(<Chart source={data}><Line position="name*count" /></Chart>);
    expect(wrapper.find('canvas').props()).toEqual({ style: { display: 'block' } });
  });

  it('生命周期回调', () => {
    let onRenderedFlag = false;
    let onPreRenderFlag = false;
    mount((
      <Chart
        source={data}
        onRendered={() => { onRenderedFlag = true; }}
        onPreRender={() => { onPreRenderFlag = true; }}
      >
        <Line position="name*count" />
      </Chart>
    ));
    expect(onRenderedFlag).toBe(true);
    expect(onPreRenderFlag).toBe(true);
  });

  it('Chart参数', () => {
    mount((
      <Chart
        source={data}
        width="1088"
        height="588"
        padding={[0, 20]}
        appendPadding={[20, 20]}
        pixelRatio={3}
        animate={false}
        scales={{ name: { range: [0.1, 0.55] } }}
        onRendered={(chart) => {
          expect(chart.get('width')).toBe('1088');
          expect(chart.get('height')).toBe('588');
          expect(chart.get('pixelRatio')).toBe(3);
          expect(chart.get('scales').name.range).toEqual([0.1, 0.55]);
          expect(chart.get('padding')).toEqual([0, 20]);
          expect(chart.get('appendPadding')).toEqual([20, 20]);
          expect(chart.get('animate')).toBe(false);
        }}
      >
        <Line position="name*count" />
        { null }
      </Chart>
    ));
  });

  it('changeData动画', () => {
    const component = mount((
      <Chart
        source={data}
        onRender={(chart) => {
          expect(chart.get('isUpdate')).toBe(undefined);
        }}
      >
        <Line position="name*count" />
      </Chart>
    ));
    const data2 = [{ name: '苹果', count: 5 }, { name: '香蕉', count: 10 }];
    component.setProps({
      source: data2,
      onRender: (chart) => {
        expect(chart.get('isUpdate')).toBe(true);
      },
    });
  });

  it('防御source为空', () => {
    let chartObj = null;
    mount((
      <Chart
        onRendered={() => {
          chartObj = {};
        }}
      >
        <Line position="name*count" />
      </Chart>
    ));
    expect(chartObj).toBeNull();
  });
});
