// actions to be dispatched by store to cats reducer

import * as types from './actionTypes';  
import catApi from '../api/catApi';


export function loadCats(){
  return function(dispatch){
    return catApi.getAllCats().then( cats => {
      console.log("CATS RECEIVED", cats)
      dispatch(loadCatsSuccess(cats))
    }).catch(error =>{
      throw(error);
    })
  }
};

export function loadCatsSuccess(cats) {  
  return {type: types.LOAD_CATS_SUCCESS, cats};
}

export function updateCat(cat) {  
  return function (dispatch) {
    return catApi.updateCat(cat).then(response => {
      dispatch(updateCatSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateCatSuccess(cat) {  
  return {type: types.UPDATE_CAT_SUCCESS, cat};
}

export function createCat(cat) {  
  return function (dispatch) {
    return catApi.createCat(cat).then(response => {
      dispatch(createCatSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createCatSuccess(cat) {  
  return {type: types.CREATE_CAT_SUCCESS, cat};
}

export function deleteCatSuccess(cat) {  
  return {type: types.DELETE_CAT_SUCCESS, cat}
}

export function deleteCat(cat) {  
  return function(dispatch) {
    return catApi.deleteCat(cat).then( () => {
      console.log(`Deleted ${cat.id}`)
      dispatch(deleteCatSuccess(cat));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}