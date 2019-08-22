import {
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
import axios from 'axios';
import { API_URL } from '../constants/config';
import { history } from '../';

export function fetchUsers(){
    return async dispatch => {
        try {
            dispatch(requestFetch())
            const users = await axios.get(API_URL+`/users/`);
            if(users.status === 200){
                return dispatch(receiveFetch(users.data));
            }else{
                dispatch(errorFetch(users.data.error));
                return Promise.reject(users.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestFetch(){
        return {
            type: USERS_FETCH_REQUEST,
        }
    }

    function receiveFetch(users){
        return {
            type: USERS_FETCH_SUCCESS,
            payload: users
        }
    }

    function errorFetch(err){
        return {
            type: USERS_FETCH_FAILURE,
            payload: err
        }
    }
}

export function fetchUser(id){
    return async dispatch => {
        try {
            dispatch(requestFetch(id));
            const user = await axios.get(API_URL+`/users/${id}`);
            if(user.status === 200){
                return dispatch(receiveFetch(user.data));
            }else{
                dispatch(errorFetch(user.data.error));
                return Promise.reject(user.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestFetch(id){
        return {
            type: USER_FETCH_REQUEST,
            payload: id
        }
    }

    function receiveFetch(user){
        return {
            type: USER_FETCH_SUCCESS,
            payload: user
        }
    }

    function errorFetch(err){
        return {
            type: USER_FETCH_FAILURE,
            payload: err
        }
    }
}

export function addUser(user){
    return async dispatch => {
        try {
            dispatch(requestAdd(user));
            const newUser = await axios.post(API_URL+`/users/`, user);
            if(newUser.status === 201){
                dispatch(receiveAdd(newUser.data));
                return history.push(`/users/${newUser.data.id}`);
            }else{
                dispatch(errorAdd(newUser.data.error));
                return Promise.reject(newUser.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestAdd(user){
        return {
            type: USER_ADD_REQUEST,
            payload: user
        }
    }

    function receiveAdd(user){
        return {
            type: USER_ADD_SUCCESS,
            payload: user
        }
    }

    function errorAdd(err){
        return {
            type: USER_ADD_FAILURE,
            payload: err
        }
    }
}


export function updateUser(user){
    return async dispatch => {
        try {
            dispatch(requestUpdate(user));
            const updatedUser = await axios.put(API_URL+`/users/${user.id}`, {name: user.name});
            if(updatedUser.status === 200){
                dispatch(receiveUpdate(updatedUser.data));
                return history.push(`/users/${user.id}`);
            }else{
                dispatch(errorUpdate(updatedUser.data.error));
                return Promise.reject(updatedUser.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestUpdate(user){
        return {
            type: USER_UPDATE_REQUEST,
            payload: user
        }
    }

    function receiveUpdate(user){
        return {
            type: USER_UPDATE_SUCCESS,
            payload: user
        }
    }

    function errorUpdate(err){
        return {
            type: USER_UPDATE_FAILURE,
            payload: err
        }
    }
}

export function deleteUser(id){
    return async dispatch => {
        try {
            dispatch(requestDelete(id));
            const deletedUser = await axios.delete(API_URL+`/users/${id}`);
            if(deletedUser.status === 200){
                dispatch(receiveDelete(id));;
                return history.push('/users/');
            }else{
                dispatch(errorDelete(deletedUser.data.error));
                return Promise.reject(deletedUser.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestDelete(id){
        return {
            type: USER_DELETE_REQUEST,
            payload: id
        }
    }

    function receiveDelete(id){
        return {
            type: USER_DELETE_SUCCESS,
            payload: id
        }
    }

    function errorDelete(err){
        return {
            type: USER_DELETE_FAILURE,
            payload: err
        }
    }
}


export function fetchUserPosts(id){
    return async dispatch => {
        try {
            dispatch(requestFetchPosts(id));
            const posts = await axios.get(API_URL+`/users/${id}/posts`);
            if(posts.status === 200){
                return dispatch(receiveFetchPosts(posts.data));
            }else{
                dispatch(errorFetchPosts(posts.data.error));
                return Promise.reject(posts.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestFetchPosts(id){
        return {
            type: USER_FETCH_POSTS_REQUEST,
            payload: id
        }
    }

    function receiveFetchPosts(posts){
        return {
            type: USER_FETCH_POSTS_SUCCESS,
            payload: posts
        }
    }

    function errorFetchPosts(err){
        return {
            type: USER_FETCH_POSTS_FAILURE,
            payload: err
        }
    }
}
