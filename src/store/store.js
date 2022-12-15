import { createStore } from 'redux';
import { rootRedusers } from './rootStore';
export const store = createStore(
  rootRedusers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
