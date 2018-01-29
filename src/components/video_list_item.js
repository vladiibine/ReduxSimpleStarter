import React from 'react';

const VideoListItem = ({onVideoSelect, video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li
            onClick={() => onVideoSelect(video)}
            className="list-group-item">
            <div>
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <h5>
                            {video.snippet.title}
                        </h5>
                        {video.snippet.channelTitle}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
