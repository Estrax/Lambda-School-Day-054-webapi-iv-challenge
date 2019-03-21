import {
    ERROR,
    USERS_FETCH_REQUEST,
    USERS_FETCH_SUCCESS,
    USERS_FETCH_FAILURE,
    USER_FETCH_REQUEST,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAILURE,
    USER_ADD_REQUEST,
    USER_ADD_SUCCESS,
    USER_ADD_FAILURE,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAILURE,
    USER_FETCH_POSTS_REQUEST,
    USER_FETCH_POSTS_SUCCESS,
    USER_FETCH_POSTS_FAILURE
} from '../constants/actionTypes';

const initialState = {
    users: [],
    user: null,
    userPosts: [],
    isFetching: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case USERS_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case USERS_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: action.payload
            }
        
        case USERS_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        case USER_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case USER_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload
            }
        
        case USER_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        case USER_ADD_REQUEST:
            return {
                ...state
            }
        
        case USER_ADD_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        
        case USER_ADD_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case USER_UPDATE_REQUEST:
            return {
                ...state
            }
        
        case USER_UPDATE_SUCCESS:
            return {
                ...state
            }
        
        case USER_UPDATE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        case USER_DELETE_REQUEST:
            return {
                ...state
            }
        
        case USER_DELETE_SUCCESS:
            return {
                ...state,
                user: null
            }
        
        case USER_DELETE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        case USER_FETCH_POSTS_REQUEST:
            return {
                ...state
            }
        
        case USER_FETCH_POSTS_SUCCESS:
            return {
                ...state,
                userPosts: action.payload
            }
        
        case USER_FETCH_POSTS_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case ERROR:
            return {
                ...state,
                err: action.payload
            }

        default:
            return state;
    }
}
