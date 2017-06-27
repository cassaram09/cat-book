import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router'; 
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux'; 
import routes from './routes';
import { loadCats } from './actions/catActions'

const store = configureStore();

store.dispatch(loadCats());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
   document.getElementById('root')

);
registerServiceWorker();