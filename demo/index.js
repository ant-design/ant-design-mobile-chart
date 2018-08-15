import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LineDemo from './Line';
import PieDemo from './Pie';

class Demo extends Component {
  render() {
    return (<div>
      <LineDemo />
      <PieDemo />
    </div>);
  }
}

ReactDOM.render(<Demo />, document.getElementById('mountNode'));
