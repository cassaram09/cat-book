import {combineReducers} from 'redux';
import cats from './catsReducer';
import hobbies from './hobbiesReducer';


const rootReducer = combineReducers({
  cats, hobbies
})

export default rootReducer;