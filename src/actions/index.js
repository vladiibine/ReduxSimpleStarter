import axios from 'axios';

const API_KEY = 'ec60443bc5f9e8d1af8a9d0834ee8b46';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// q=London,us


export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log(request);

    return {
        type: FETCH_WEATHER,
        // SURPRISE! now it's a promise, but when the reducer gets called,
        // then it's a fulfilled promise... wtf!?!? Maybe redux knows only
        // to call reducers after promisses were fulfilled... cuz what would
        // they do with an unfulfilled promise?
        // !!!!so redux-promise fulfills the promise
        // !!! THROUGH THE MIDDLEWAAARE! GOOD MORNING!
        payload: request,
    }
}