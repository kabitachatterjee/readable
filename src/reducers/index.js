import { FETCH_POSTS } from '../actions';
import { FETCH_CATEGORIES, FETCH_COMMENTS} from '../actions';
import { ADD_POST,ADD_COMMENT } from '../actions';
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

function comments(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
        return {
            ...state,
              [action.payload.postId]: action.payload.payload
          };
    case ADD_COMMENT:
      return {
        ...state,
        [action.payload.parentId]: [
          ...state[action.payload.parentId],
          action.payload
        ]
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories,
  comments
});
