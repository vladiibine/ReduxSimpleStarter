import React from 'react';
import VideolListItem from './video_list_item';

const VideoList = (props) => {
    const videoList = props.videos.map( (video) => {
        return (
            <VideolListItem onVideoSelect={props.onVideoSelect} video={video} key={video.etag} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
            {/*{props.videos.map((video => <li>{video.snippet.title}</li>))}*/}
            {videoList}

        </ul>
    )
};

export default VideoList;