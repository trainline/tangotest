import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from '../epics';
import rootReducer from './reducers'

export default function configureStore(initialState = {}) {
  const epicMiddleware = createEpicMiddleware();
  const middlewareEnhancer = applyMiddleware(epicMiddleware);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);
  const store = createStore(rootReducer, initialState, composedEnhancers);
  epicMiddleware.run(rootEpic);
  return store;
};
