import React, { useMemo, useContext } from 'react';
import context from '../../context';

let count = 0;

export default function useMemoComponent(props) {
  const { emitConsole } = useContext(context);

  count = useMemo(() => {
    count = count + 1;
    return count;
  }, []);

  return (
    <div>
      <div onClick={emitConsole}>每次渲染都会导致count+1: {count}</div>
    </div>
  );
};