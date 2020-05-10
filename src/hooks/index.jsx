import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Input } from 'antd';
import List from './components/List';
import useResize from '../common/useResize';

function Hooks() {
  const [name, setName] = useState('Marry');
  const [surname, setSurname] = useState('Popins');
  const { width, height } = useResize();
  const inputRef = useRef();

  const onChange = useCallback((e, type) => {
    if (type === 'name') {
      setName(e.target.value);
    } else if (type === 'surname') {
      setSurname(e.target.value);
    }
  }, []);


  useEffect(() => {
    document.title = `${name} ${surname}`;
    return () => {
      console.log('un mount');
    }
  }, [name, surname]);

  return (
    <div className="flex-item" style={{ backgroundColor: 'rgb(241, 132, 39)' }}>
      <header onClick={() => { inputRef.current.focus(); }}>Hooks组件</header>
        <List label={'name'} >
          <Input
            onChange={(e) => onChange(e, 'name')}
            value={name}
            defaultValue={name}
            ref={inputRef}
          />
        </List>
        <List label={'surname'} >
          <Input
            onChange={(e) => onChange(e, 'surname')}
            value={surname}
            defaultValue={name}
          />
        </List>
        <List label={'resize'} >
          <div>{width}, {height}</div>
        </List>
    </div>
  );
}

export default Hooks;