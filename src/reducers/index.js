import { combineReducers } from 'redux';
// hah! alias!
import {reducer as formReducer} from 'redux-form';


import PostReducer from './reducer_post';

const rootReducer = combineReducers({
    posts: PostReducer,
    form: formReducer,
});

export default rootReducer;
