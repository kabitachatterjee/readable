import * as Api from '../utils/api';
import { receive } from '../utils/helper';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';


export const fetchPosts = () => dispatch =>
  Api.getPosts().then(payload => dispatch(receive(FETCH_POSTS, payload)));


  export const fetchCategories = () => dispatch =>
  Api.getCategories().then(payload => dispatch(receive(FETCH_CATEGORIES, payload)));

  export const addPost = post => dispatch =>
  Api.addPost(post).then(payload => {
    dispatch({
      type: ADD_POST,
      payload
    });
  });

  export const getPost = id => dispatch =>
  Api.getPost(id).then(payload => dispatch(receive(GET_POST, payload)));

  export const deletePost = post => dispatch =>
  Api.deletePost(post.id).then(res => {
    if (res.status === 200) {
      dispatch({
        type: DELETE_POST,
        value: post
      });
    }
  });

  export const updatePost = post => dispatch =>
  Api.updatePost(post).then(payload => dispatch(receive(UPDATE_POST, payload)));
