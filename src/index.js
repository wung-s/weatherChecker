import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import WidgetContainer from './containers/WidgetContainer';
import HomeContainer from './containers/HomeContainer';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path='forecast/:location' component={WidgetContainer} />
    </Route>
  </Router>
),// <App />,
 document.getElementById('root')
);
