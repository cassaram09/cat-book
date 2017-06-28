import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App'
import HomePage from './components/home/homePage';  
import CatsPage from './components/cats/catsPage';  
import CatPage from './components/cats/catPage';

export default(
  // configure our routes - set App as our top level component with Home as the index route
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/cats' component={CatsPage} >
      <Route name='cat' path='/cats/:id' component={CatPage}/>
    </Route>
  </Route>
)