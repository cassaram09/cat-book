import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';

export function loginSuccess(){
  return {type: types.LOGIN_SUCCESS};
}

export function logInUser(credentials){
  return function(dispatch) {
    return sessionApi.login(credentials).then(response =>{
      console.log('JWT', response)
      sessionStorage.setItem('jwt', response.jwt)
      dispatch(loginSuccess())
    }).catch(error => {
      throw(error);
    })
  }
}

export function logOutUser(){
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT_SUCCESS}
}