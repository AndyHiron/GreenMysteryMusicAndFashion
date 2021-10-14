import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { api } from 'services/api';
import * as appReducers from 'ducks';

let middleware = applyMiddleware(thunk.withExtraArgument(api));
const reducers = combineReducers({ ...appReducers });

if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
  middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default createStore(reducers, middleware);
