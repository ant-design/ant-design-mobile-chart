# ant-design-mobile-chart

## 说明

`ant-design-mobile-chart` 是为移动端开发的 react 图表组件库，图形语法底层基于[F2](https://antv.alipay.com/zh-cn/f2/3.x/index.html) 实现图形语法。 组件库具有轻量、灵活、易用的特点

## 安装

```bash
$ npm install ant-design-mobile-chart --save
```

## 使用

```jsx
import React, { Component } from 'react';
import { Chart, Line, Scale, Guide } from 'ant-design-mobile-chart';

const data = [
  {
    "reportDateTimestamp": 1529856000000,
    "codeType": "INDEX_CODE",
    "rate": 0
  },
  {
    "reportDateTimestamp": 1529942400000,
    "codeType": "INDEX_CODE",
    "rate": 0.0082
  },
  {
    "reportDateTimestamp": 1530028800000,
    "codeType": "INDEX_CODE",
    "rate": 0.0284
  },
  {
    "reportDateTimestamp": 1530115200000,
    "codeType": "INDEX_CODE",
    "rate": -0.0385
  },
  {
    "reportDateTimestamp": 1530201600000,
    "codeType": "INDEX_CODE",
    "rate": -0.0139
  },
  {
    "reportDateTimestamp": 1530460800000,
    "codeType": "INDEX_CODE",
    "rate": -0.0428
  },
  {
    "reportDateTimestamp": 1530547200000,
    "codeType": "INDEX_CODE",
    "rate": 0.0425
  },
  {
    "reportDateTimestamp": 1529856000000,
    "codeType": "PRODUCT_ID",
    "rate": 0
  },
  {
    "reportDateTimestamp": 1529942400000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0075
  },
  {
    "reportDateTimestamp": 1530028800000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0264
  },
  {
    "reportDateTimestamp": 1530115200000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0355
  },
  {
    "reportDateTimestamp": 1530201600000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0113
  },
  {
    "reportDateTimestamp": 1530460800000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0383
  },
  {
    "reportDateTimestamp": 1530547200000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0377
  }
]

class LineDemo extends Component {
  render() {
    return (
      <div>
        <Chart source={data} width="400" height="200" pixelRatio={window.devicePixelRatio}>
          <Line position="reportDateTimestamp*rate" color="codeType"/>
          <Scale field="reportDateTimestamp" range={[0, 1]} tickCount={3} type="timeCat" mask="MM-DD" />
          <Scale field="rate" tickCount={5} formatter={(rate) => `${(rate*100).toFixed(2)}%`} />
          <Guide type="tag" position={[1530028800000, 0.0284]} content="买入" />
        </Chart>
      </div>
    );
  }
}

export default LineDemo;

```

![chart](https://gw.alipayobjects.com/zos/rmsportal/vzSGCkmkOIHlVBZbqoQA.png)
