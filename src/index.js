import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {BrowserRouter, Route, DefaultRoute} from 'react-router-dom';
import ResolvePromise from 'redux-promise';

import reducers from './reducers';
import PostIndex from "./components/post-index";


const createStoreWithMiddleware = applyMiddleware(ResolvePromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Route path="/" component={PostIndex}/>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
