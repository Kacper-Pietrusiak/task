import * as types from './actionTypes';

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type){
        case types.FETCH_USER_START:
            return{
                ...state,
                loading: true,
            };
        case types.FETCH_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.payload
            };
        case types.FETCH_USER_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default  postReducer;
