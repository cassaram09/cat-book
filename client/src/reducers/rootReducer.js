import {combineReducers} from 'redux';
import cats from './catsReducer';

const rootReducer = combineReducers({
  cats
})

export default rootReducer;