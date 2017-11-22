import * as Api from '../utils/api';
import { receive } from '../utils/helper';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const fetchPosts = () => dispatch =>
  Api.getPosts().then(payload => dispatch(receive(FETCH_POSTS, payload)));


  export const fetchCategories = () => dispatch =>
  Api.getCategories().then(payload =>
    dispatch(receive(FETCH_CATEGORIES, payload)));
