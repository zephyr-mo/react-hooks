import React from 'react';
import context from '../../context';


let component = 0;
let pureComponent = 0;
class ClassCount extends React.Component {
  static contextType = context;
  render() {
    const { emitConsole } = this.context;
    component = component + 1;
    return (
      <div onClick={emitConsole}>每次渲染都会导致count+1: {component}</div>
    );
  }
}

class PureCount extends React.PureComponent {
  static contextType = context;
  render() {
    const { emitConsole } = this.context;
    pureComponent = pureComponent + 1;
    return (
      <div onClick={emitConsole}>每次渲染都会导致count+1: {pureComponent}</div>
    );
  }
}

export default function classComponent(props) {
  return (
    <React.Fragment>
      <ClassCount />
      --with pureComponent--
      <PureCount />
    </React.Fragment>
  );
}