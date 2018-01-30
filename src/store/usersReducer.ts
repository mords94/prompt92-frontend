export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_PENDING = 'GET_USERS_FETCHING';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

export const POST_USERS_FULFILLED = 'POST_USERS_FULFILLED';
export const POST_USERS_PENDING = 'POST_USERS_FETCHING';
export const POST_USERS_REJECTED = 'POST_USERS_REJECTED';

export const USERS_RESET = 'USERS_RESET';

export const userInitialState = {
    fetching: false,
    fetched: false,
    submit: false,
    saved: false,
    users: [],
    pagination: {},
    error: {},
};

export interface UserActionInterface {
    type: string;
    payload: {
        data: Object[];
        meta: Object;
    };
}

export const userReducer = (state = userInitialState, action: any) => {
    switch (action.type) {
        case GET_USERS_FULFILLED: {
            return {
                ...state,
                fetched: true,
                fetching: false,
                users: action.payload.data,
                pagination: action.payload.meta,
            };
        }
        case GET_USERS_PENDING: return {
            ...state,
            fetching: true,
            fetched: false,
        };
        case POST_USERS_PENDING: return {
            ...state,
            submit: true,
            saved: false,
        };
        case POST_USERS_FULFILLED: return {
            ...state,
            submit: false,
            saved: true,
        };
        case POST_USERS_REJECTED:
        case GET_USERS_REJECTED: return {
            ...userInitialState,
        };
        case USERS_RESET:
            return userInitialState;
        default:
            return state;
    }
};
