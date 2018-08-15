import React, { Component } from 'react';
import { Chart, Legend, Coord, Interval, Guide, Tooltip, Axis, F2 } from '@ali/f2-react';
const { Group, Shape } = F2.G;

const data = [
  {
      "name": "余额", 
      "color": "64C4EF", 
      "value": "10000.00", 
      "proportion": 0.07, 
      "spm": "c12899.d23652", 
      "a": "1"
  }, 
  {
      "name": "余额宝", 
      "color": "F5865C", 
      "value": "20000.00", 
      "proportion": 0.13, 
      "spm": "c12899.d23653", 
      "a": "1"
  }, 
  {
      "name": "定期", 
      "color": "3DA4EE", 
      "value": "30000.00", 
      "proportion": 0.20, 
      "spm": "c12899.d23656", 
      "a": "1"
  }, 
  {
      "name": "基金", 
      "color": "6088EC", 
      "value": "40000.00", 
      "proportion": 0.27, 
      "spm": "c12899.d23655", 
      "a": "1"
  }, 
  {
      "name": "黄金", 
      "color": "F8CC49", 
      "value": "50000.00", 
      "proportion": 0.33, 
      "spm": "c12899.d23654", 
      "a": "1"
  }
];
const OFFSET = 20; // 偏移量

class PieDemo extends Component {
  _getEndPoint(center, angle, r) {
    return {
      x: center.x + (r * Math.cos(angle)),
      y: center.y + (r * Math.sin(angle)),
    };
  }

  _addPieLabel(chart) {
    const coord = chart.get('coord');
    const geom = chart.get('geoms')[0];
    const shapes = geom.get('shapes');
    const { center } = coord; // 极坐标圆心坐标
    const r = coord.circleRadius; // 极坐标半径
    const canvas = chart.get('canvas'); // 获取 canvas 对象
    const labelGroup = canvas.addGroup(); // 用于存储文本以及文本连接线

    shapes.forEach((shape) => {
      const shapeAttrs = shape.attr();
      const origin = shape.get('origin');
      const { startAngle, endAngle } = shapeAttrs;
      const middleAngle = (startAngle + endAngle) / 2;
      const routerPoint = this._getEndPoint(center, middleAngle, r + OFFSET);
      const textName = new Shape.Text({
        attrs: {
          x: routerPoint.x,
          y: routerPoint.y,
          fontSize: 12,
          fill: origin.color,
          text: origin._origin.name,
          textBaseline: 'middle',
          lineHeight: 12,
        },
        origin: origin._origin, // 存储原始数据
      });
      labelGroup.add(textName);
    });
    canvas.draw();
  }

  onRendered = (chart) => {
    this._addPieLabel(chart);
  }

  render() {
    const html = '<div id="guide" style="text-align: center; width: 200px"><span id="guide-content" style="font-size: 14px; color: #333333; font-weight: 500">150000.00</span><br /></div>';
    const marker = {
      symbol: 'square',
      radius: 4,
    };
    const legendMapData = {};
    data.forEach(item => {
      legendMapData[item.name] = item.value;
    });
    const animate = {
      appear: {
        animation: 'groupScaleInXY',
        easing: 'elasticOut',
        delay: 300,
        duration: 300,
      },
    };
    const itemFormatter = val => { return val + '  ' + legendMapData[val]; };
    return <div>
      <Chart source={ data } onRendered={this.onRendered} width={375} height={250}>
        <Coord type="polar" transposed={true} innerRadius={0.8} radius={0.8} />
        <Axis enable={false} />
        <Interval position="a*proportion" color="name" adjust="stack" animate={animate}/>
        <Guide type="html" position={[ '50%', '50%' ]} html={html} />
        <Legend position="bottom" marker={marker} itemFormatter={itemFormatter} align="center" />
        <Tooltip showItemMarker={false} />
      </Chart>
    </div>;
  }
}

export default PieDemo;
