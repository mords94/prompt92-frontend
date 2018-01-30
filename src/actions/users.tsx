import api from '../api';
import { AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { 
    GET_USERS_FULFILLED,
    GET_USERS_PENDING,
    GET_USERS_REJECTED,
    POST_USERS_FULFILLED,
    POST_USERS_PENDING,
    POST_USERS_REJECTED
 } from '../store/usersReducer';
import { errorMessage } from 'src/actions';

export const getUsers = (page: number = 1) => (dispatch: any) => {
    dispatch({type: GET_USERS_PENDING});
    return api.get('/api/users?page=' + page)
    .then((response: AxiosResponse<any>) => {
        dispatch({type: GET_USERS_FULFILLED, payload: response.data});
    }).catch((response: AxiosError) => {
        dispatch({type: GET_USERS_REJECTED, payload: response});
        errorMessage(response);
    });
};

export interface UserPayload {
    name: String;
    date_of_birth: String;
    emails?: String[];
}

export const saveUser = (payload: UserPayload) => (dispatch: any) => {
    dispatch({type: POST_USERS_PENDING});
    return api.post('/api/users', payload)
    .then((response: AxiosResponse<any>) => {
        dispatch({type: POST_USERS_FULFILLED});
        toast.success('Successfully saved');
    }).catch((response: AxiosError) => {
        dispatch({type: POST_USERS_REJECTED, payload: response});
        errorMessage(response);
    });
};