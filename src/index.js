import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

function VladLoggingMiddleware(_ref){
    return function nextMiddlewareClosureFunc(nextMiddleware){
        return function actualActionRunner(action){
            // debugger  // actually, _ref has getState and dispatch in it
            // and action has a promist in it first, obviously.
            // JSON.stringify deletes
            console.log(`
            Vlad's logging middleware. What's that _ref thing? ${JSON.stringify(_ref)} . 
            Then, the next middleware: ${nextMiddleware} . 
            Then the received action: ${JSON.stringify(action)} 
            `
            );
            return nextMiddleware(action);
        }
    }
}

const createStoreWithMiddleware = applyMiddleware(VladLoggingMiddleware, ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
