import React from 'react';
import { Button } from 'antd';
import ClassPage from './class';
import './App.css';

function App() {
  return (
    <div className="App web-font">
      react page
      <ClassPage />
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
