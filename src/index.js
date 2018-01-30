import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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

        this.state = {
            videos: [],
            selectedVideo: null,
            searchTerm: 'science',
        };
        console.table(this.state);
        console.log('vlad');

        this.videoSearch(this.state.searchTerm);
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
                console.log(videos);
                this.setState({
                    videos,
                    selectedVideo: videos? videos[0]: null
                });
            }
        );
    }

    render() {
        // This lodash thing is really cool - returns debounced version of this function
        // (NOOP if called more often than 300 ms)
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar
                    onSearchTermChange={videoSearch}
                    searchTerm={this.state.searchTerm}
                />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }
}

// take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
