import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=Thanks_for_creating_the_course_its_rly_fun';


export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request,
    }
}

export function createPost(values, callback){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    // dunno why the result of axios.post remains the result of the HTTP call, and the .then part()
        .then(()=>callback());

    const req2 = Promise.resolve(123).then(()=>{
        return axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(()=>{callback(); return 123445})
    })

    return {
        type: CREATE_POST,
        // this needs to be called 'payload' because redux-promise wants that
        // this is totally unexpected behavior actually...
        // does redux-promise just take the first resolved result or something?
        payload: req2,
    }
}

export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
    return {
        type: FETCH_POST,
        payload: request
    }
}