export const LoginStart = (userCredentials) => {
    return {
        type: 'LOGIN_START'
    }
};

export const LoginSuccess = (dbResponce) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: dbResponce.payload
    }
};

export const LoginFailure = (dbResponce) => {
    return {
        type: 'LOGIN_FAILURE',
        payload: dbResponce.message
    }
};

