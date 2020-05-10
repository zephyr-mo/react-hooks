import React, { memo } from 'react';
import context from '../../context';

const { Consumer } = context;
let count = 0;
let memoCount = 0;
const Count = () => {
  count = count + 1;
  return (
    <Consumer>
      {
        ({ emitConsole }) => (
          <div onClick={emitConsole}>每次渲染都会导致count+1: {count}</div>
        )
      }
    </Consumer>
  );
}

const isEqual = (prev, next) => {
  if (prev === next) {
    return false;
    // 不渲染
  }

  return true;
  // 渲染
}

const MemoCount = memo(function MemoCount() {
  memoCount = memoCount + 1;
  return (
    <Consumer>
      {
        ({ emitConsole }) => (
          <div onClick={emitConsole}>每次渲染都会导致count+1: {memoCount}</div>
        )
      }
    </Consumer>
  );
}, isEqual);

export default function functionComponent(props) {
  return (
    <div>
      <Count />
      --with memo--
      <MemoCount />
    </div>
  );
}