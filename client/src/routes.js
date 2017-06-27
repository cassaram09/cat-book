import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App'
import HomePage from './components/home/homePage';  
import CatsPage from './components/cats/catsPage';  
import CatPage from './components/cats/catPage';

export default(
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/cats' component={CatsPage} >
      <Route path='/cats/:id' component={CatPage}/>
    </Route>
  </Route>
)