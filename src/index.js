import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// the Switch renders only the FIRST matched Route... ok...
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ResolvePromise from 'redux-promise';

import reducers from './reducers';
import PostIndex from "./components/post-index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";


const createStoreWithMiddleware = applyMiddleware(ResolvePromise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                {/* This solution works... Dunno if it's the best, but surely works */}
                {/*<Route exact={true} path="/" component={PostIndex}/>*/}
                <Switch>
                    <Route path="/posts/new" component={PostsNew}/>
                    <Route path="/posts/:id" component={PostsShow}/>
                    <Route path="/" component={PostIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
