import {FETCH_WEATHER} from "../actions";

export default function(state = [], action){
    console.log("Action received", action);

    // debugger

    switch (action.type){
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);  # Does the same thing, but dumber
            // Also, here we get errors if we return "bad" state. Let's only modify state when the new data is good.
            return action.payload.data? [action.payload.data, ...state] : state;

        default:
            return state;
    }
}