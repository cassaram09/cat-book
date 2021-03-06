import { createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'

// configure our store to use our combined reducer and apply the Thunk Middleware
export default function configureStore(){
  return createStore(rootReducer, applyMiddleware(thunk))
};