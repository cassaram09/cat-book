import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router'; 
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux'; 
import routes from './routes';


// create our store on load
const store = configureStore();

// load cats and  hobbies on app load

ReactDOM.render(
  // wrap our Application in a provider so it's connected to the redux store
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
   document.getElementById('root')

);
registerServiceWorker();