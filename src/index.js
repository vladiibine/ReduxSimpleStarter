import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAPsTfomroiXqR-ADRnV4l22Qc9NFAaePY';


//create a new component, that produces some html
// const App = () => (
//     <div>
//         <SearchBar/>
//     </div>
// );
class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {console.log(videos); this.setState({videos})});
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
