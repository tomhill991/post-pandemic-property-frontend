import { LOGGED_IN, LOGGED_OUT } from './LoginTypes.js';

let initialState = {
    loggedIn: false,
    user: ''
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGED_IN:
            return {
                ...state,
                loggedIn: true
            }
        
        case LOGGED_OUT: 
            return {
                ...state,
                loggedIn: false
            }

        default:
            return state
    }
}

export default loginReducer