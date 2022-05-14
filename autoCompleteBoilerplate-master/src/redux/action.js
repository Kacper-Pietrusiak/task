import * as types from './actionTypes';
import axios from 'axios';


const fetchUserStart = () => ({
    type: types.FETCH_USER_START,
})

const fetchUserSuccess = (users) => ({
    type: types.FETCH_USER_SUCCESS,
    payload: users,
})

const fetchUserFail = (error) => ({
    type: types.FETCH_USER_FAIL,
    payload: error,
})


export function fetchUsers() {
    return function(dispatch){
        dispatch(fetchUserStart());
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data
                dispatch(fetchUserSuccess(users));
            })
            .catch((err) => {
                dispatch(fetchUserFail(err.message));
            });
    };
}