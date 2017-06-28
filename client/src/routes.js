import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App'
import HomePage from './components/home/homePage';  
import CatsPage from './components/cats/catsPage';  
import CatPage from './components/cats/catPage';
import NewCatPage from './components/cats/newCatPage';
import LoginPage from './components/login/loginPage';



export default(
  // configure our routes - set App as our top level component with Home as the index route
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/login' component={LoginPage} />
    <Route path='/cats' component={CatsPage} onEnter={requireAuth} >
      <Route name='newCat' path='/cats/new' component={NewCatPage}/>
      <Route name='cat' path='/cats/:id' component={CatPage}/>
    </Route>
  </Route>
)

// checks if a user is loggedin (if JWT is in session storage); if not, redirect them to the login page 
function requireAuth(nextState, replace){
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: {nextPathName: nextState.location.pathName}
    })
  }
}