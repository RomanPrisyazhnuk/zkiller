import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createPromise } from 'redux-promise-middleware';

import rootReducer from './rootReducer';

const middlewares: any = [
  thunk,
  createPromise({
    promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
  }),
];
const storeConfiguration = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
};

export default storeConfiguration;
