import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router';  
import routes from './routes';


ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
   document.getElementById('root')
);
registerServiceWorker();