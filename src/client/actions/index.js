export const FETCH_USERS        = 'FETCH_USERS';
export const FETCH_ADMINS       = 'FETCH_ADMINS';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

export const fetchUsers = () => async (dispatch, getState, api) => {
    let res = await api.get('/generate');
    res = {data: (res.data).map(user => user.name)};
    dispatch({
        type:    FETCH_USERS,
        payload: res
    });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');
    dispatch({
        type:    FETCH_CURRENT_USER,
        payload: res
    });
};

export const fetchAdmins = () => async (dispatch, getState, api) => {
    const res = await api.get('/admins');
    dispatch({
        type:    FETCH_ADMINS,
        payload: res
    });
};
