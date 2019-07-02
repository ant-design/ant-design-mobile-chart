import React, { Component } from 'react';
import F2 from '../../f2';
import util from '../../common/util';
// 全局注册精细动画

/**
 * Chart组件
 *                         (chart初始化)          (forceUpdate)         (执行子组件)            (设置数据、动画、度量渲染图表)
 * 首次渲染: render -->    componentDidMount   -->    render   -->    renderChildren    -->      componentDidUpdate
 *
 *                          (执行子组件)             (设置数据、动画、度量渲染图表)
 * 动态渲染: render -->    renderChildren     -->       componentDidUpdate
 */

class Chart extends Component {
  componentDidMount() {
    const {
      pixelRatio, padding, width, height,
      appendPadding,
    } = this.props;

    const chart = new F2.Chart({
      el: this.refs.canvas,
      width,
      height,
      padding,
      pixelRatio,
      appendPadding,
    });
    this.chart = chart;
    this.chartRendered = false;
    // 手动触发
    this.forceUpdate();
  }
  // 子组件更新完成
  componentDidUpdate() {
    const {
      onPreRender, onRendered, source, scales, animate,
    } = this.props;
    const { isFunction } = util;
    // 防御没有值的情况
    if (!source) {
      return;
    }
    // 设置数据、动画、度量
    this.chart.animate(animate);
    this.chart.source(source, scales);

    // f2准备渲染之前
    if (isFunction(onPreRender)) {
      onPreRender(this.chart);
    }

    if (this.chartRendered) {
      this.chart.changeData(source);
    } else {
      this.chart.render();
      this.chartRendered = true;
    }

    // f2渲染之后，触发一个回调，传递chart给外部
    if (isFunction(onRendered)) {
      onRendered(this.chart);
    }
  }
  // 更新子组件，实际上是执行f2图形化语法。
  renderChildren() {
    const { chart } = this;
    if (this.chartRendered) {
      chart.clear();
    }
    return React.Children.map(this.props.children, (child) => {
      // 添加空判断，child有可能是null
      return child && React.cloneElement(child, {
        chart, // 子组件传入chartprops
      });
    });
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" style={{ display: 'block' }} />
        {
          this.chart && this.renderChildren()
        }
      </div>
    );
  }
}

export default Chart;
