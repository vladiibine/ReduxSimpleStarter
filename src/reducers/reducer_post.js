import _ from 'lodash';
import {FETCH_POSTS} from "../actions";

export default function postReducer(state = {}, action){

    /*
    Data will be like this
    [
        {id:1, title:"hi"},
        {id:3, title: "bye"},
    ]

    and we nened it like this:
    {
        1: {id:1, title:"hi"},
        3: {id:3, title:'bye"}
     }

     use lodash.mapKeys.
     */


    switch (action.type){
        case FETCH_POSTS:
            debugger;
            return _.mapKeys(action.payload.data, "id");


        default:
            return state
    }
}