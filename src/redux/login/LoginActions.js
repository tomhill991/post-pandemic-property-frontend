import { LOGGED_IN, LOGGED_OUT } from './LoginTypes.js'

export const login = () => {
    return {
        type: LOGGED_IN
    }
}

export const logout = () => {
    return {
        type: LOGGED_OUT
    }
}