import { combineReducers } from 'redux';
import BookReducer from './BookReducer';
import BookListReducer from './BookListReducer';

export default combineReducers({
  BookReducer: BookReducer,
  Books: BookListReducer
});
