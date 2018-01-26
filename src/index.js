import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAPsTfomroiXqR-ADRnV4l22Qc9NFAaePY';

//create a new component, that produces some html
const App = () => (
    <div>
        <SearchBar/>
    </div>
);

// take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
