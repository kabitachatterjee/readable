import { FETCH_POSTS } from '../actions';
import { FETCH_CATEGORIES } from '../actions';
import { ADD_POST } from '../actions';
import { GET_POST,DELETE_POST,UPDATE_POST } from '../actions';
import { combineReducers } from 'redux';

function posts(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return [...action.payload];
      case ADD_POST:
        return [...state, action.payload];
      case GET_POST:
          return [...state, action.payload];
      case DELETE_POST:
          return state.filter(post => post.id !== action.value.id);
      case UPDATE_POST:
          return state.map(
            post => (action.payload.id === post.id ? action.payload : post)
            );
    default:
      return state;
  }
}
function categories(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return [...action.payload];
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories
});
