import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'normalize.css';
import './index.scss';
import App from './App';
import MemoComponent from './memo/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/memo" component={MemoComponent}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
