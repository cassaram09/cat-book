// actions to be dispatched by store to hobbies reducer


import * as types from './actionTypes';  
import hobbyApi from '../api/hobbyApi';


export function loadHobbies(){
  return function(dispatch){
    return hobbyApi.getHobbies().then( hobbies => {
      console.log("Hobbies RECEIVED", hobbies)
      dispatch(loadHobbiesSuccess(hobbies))
    }).catch(error =>{
      throw(error);
    })
  }
};

export function loadHobbiesSuccess(hobbies) {  
  return {type: types.LOAD_HOBBIES_SUCCESS, hobbies};
}