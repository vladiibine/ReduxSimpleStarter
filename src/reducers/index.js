import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
