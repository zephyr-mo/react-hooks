import React from 'react';
import { Input } from 'antd';
import List from './components/List';
export default class ClassPage extends React.Component {
  state = {
    name: '邓',
    surname: '泽丰',
    width: window.innerWidth
  }

  componentDidMount() {
    // 渲染完毕
    const { name, surname } = this.state;
    document.title = `${name} ${surname}`;
    window.addEventListener('resize', this.resize);
  }

  componentDidUpdate() {
    const { name, surname } = this.state;
    document.title = `${name} ${surname}`;
  }

  componentWillUnmount() {
    console.log('类组件卸载，移除监听事件，防止内存泄漏');
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({
      width: window.innerWidth
    });
  }

  onChange = (e, label) => {
    this.setState({
      [label]: e.target.value
    })
  }

  render() {
    const {
      name, surname, width
    } = this.state;

    return (
      <div className="flex-item">
        <header onClick={() => { this.inputRef.focus() }}>类组件</header>
        <List label={'name'} >
          <Input
            ref={ref => this.inputRef = ref }
            onChange={(e) => this.onChange(e, 'name')}
            value={name}
            defaultValue={name}
          />
        </List>
        <List label={'surname'} >
          <Input
            onChange={(e) => this.onChange(e, 'surname')}
            value={surname}
            defaultValue={name}
          />
        </List>
        <List label={'resize'} >
          <div>{width}</div>
        </List>
      </div>
    );
  };
}
