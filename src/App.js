import React from 'react';
import { Button } from 'antd';
import ClassPage from './class';
import HooksPage from './hooks';
import './App.scss';

class App extends React.Component {
  state = {
    classVisible: true,
    hooksVisible: true,
  }

  onClick = (type) => {
    this.setState({
      [type]: !this.state[type]
    })
  }

  render() {
    const {
      classVisible, hooksVisible
    } = this.state;

    return (
      <div className="App web-font pd-20">
        <div className="flex">
          { classVisible && <ClassPage /> }
          { hooksVisible && <HooksPage /> }
        </div>
        <div className="flex">
          <Button
            type="ghost"
            style={{ borderRadius: 10 }}
            className="mr-10"
            onClick={ () =>
              this.onClick('classVisible')
            }
          >
            {classVisible ? '卸载class' : '装载class'}
          </Button>
          <Button
            type="ghost"
            style={{ borderRadius: 10 }}
            className="mr-10"
            onClick={ () =>
              this.onClick('hooksVisible')
            }
          >
            {hooksVisible ? '卸载hooks' : '装载hooks'}
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
