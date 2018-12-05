import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

export const configureStore = () => {
  // what does thunk do? why are we not using the thunk we just made?
  return createStore(rootReducer, applyMiddleware(thunk));
};
