import React, { Component } from 'react';
import { Chart, Line, Scale, Guide } from '@ali/f2-react';

const data = [
  {
    name: '苹果',
    count: 5,
  },
  {
    name: '香蕉',
    count: 3,
  },
  {
    name: '牛奶',
    count: 10,
  },
  {
    name: '橘子',
    count: 13,
  },
  {
    name: '西瓜',
    count: 8,
  },
];

class LineDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    }
  }
  onClick() {
    return () => {
      data[3].count = 2;

      this.setState({
        data,
      })
    }
  }
  render() {
    return (
      <div onClick={this.onClick()}>
        <Chart source={this.state.data}>
          <Line position="name*count" />
          <Scale field="name" range={[0, 1]} />
          <Guide type="tag" position={['牛奶', 10]} content="这是牛奶" />
          { null }
        </Chart>
      </div>
    );
  }
}

export default LineDemo;
