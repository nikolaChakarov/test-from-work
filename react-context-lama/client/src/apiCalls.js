export const loginUser = async (userCredentials, dispatch) => {

    dispatch({
        type: 'LOGIN_START'
    });

    try {
        const res = await (await fetch(`http://localhost:8001/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        })).json();

        if (res.status === 'fail') {
            throw new Error(res.message);
        }

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.payload
        })

    } catch (err) {
        dispatch({
            type: 'LOGIN_FAILURE',
            payload: err.message
        })
    }

}