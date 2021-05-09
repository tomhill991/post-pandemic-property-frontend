import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './RootReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


let store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store