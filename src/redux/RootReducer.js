import { combineReducers } from 'redux';
import loginReducer from './login/LoginReducer.js';

export const rootReducer = combineReducers({
    login: loginReducer
})