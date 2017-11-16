import * as Api from '../utils/Api';

export constant FETCH_POSTS as 'FETCH_POSTS';

export const fetchPosts = () => dispatch =>
  Api.getPosts().then(payload => dispatch(receive(FETCH_POSTS, payload)));
