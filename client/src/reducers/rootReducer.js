import {combineReducers} from 'redux';
import cats from './catsReducer';
import hobbies from './hobbiesReducer';

// combine our cats and hobbies reducers into one reducers
// this reducer gets passed to our configureStore function
const rootReducer = combineReducers({
  cats, hobbies
})

export default rootReducer;