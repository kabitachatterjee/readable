import { FETCH_POSTS } from '../actions';
import { FETCH_CATEGORIES } from '../actions';
import { combineReducers } from 'redux';

function posts(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return [...action.payload];
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
