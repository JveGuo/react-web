import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

// redux 注入操作
const middleware = [thunk];

export default function configStore () {
  const store = createStore(reducer, applyMiddleware(...middleware));
  return store;
}
