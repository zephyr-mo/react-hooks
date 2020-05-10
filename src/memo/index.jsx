import React, { Component } from 'react';
import List from './components/List';
import { Button } from 'antd';
import ClassCount from './class';
import FuncCount from './func/index';
import HooksCount from './hooks/index';
import context from '../context';

const { Provider } = context;

// 父组件更新 -》 导致子组件被迫更新
class MemoApp extends Component {
  state = {
    currentState: 1
  }

  emitInterval = () => {
    setInterval(() => this.setState({ currentState: this.state.currentState + 1 }), 500);
  }

  emitConsole = () => {
    this.setState({
      currentState: this.state.currentState + 10
    })
  }

  render() {
    const { currentState } = this.state;

    return (
      <Provider value={{ emitConsole: this.emitConsole }}>
        <div className="App web-font pd-20">
          <div className="flex">
            <div className="flex-item" style={{ backgroundColor: '#dd6b65' }}>
              <List label="Component">
                <ClassCount />
              </List>
              <List label="memo">
                <FuncCount/>
              </List>
              <List label="useMemo">
                <HooksCount/>
              </List>
              <List label="当前state的数值">
                {currentState}
              </List>
              <List label="触发事件的button">
                <Button onClick={this.emitInterval}>启动定时器</Button>
              </List>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default MemoApp;