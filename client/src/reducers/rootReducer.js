import {combineReducers} from 'redux';
import cats from './catsReducer';
import hobbies from './hobbiesReducer';
import session from './sessionReducer';

// combine our cats and hobbies reducers into one reducers
// this reducer gets passed to our configureStore function
const rootReducer = combineReducers({
  cats, hobbies, session
})

export default rootReducer;