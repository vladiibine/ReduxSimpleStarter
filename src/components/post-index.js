import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchPosts} from '../actions';
import {Link} from "react-router-dom";

class PostIndex extends React.Component {
    constructor(props){
        super(props);

        console.log(props.posts);
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        } )
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }

    componentDidMount(){  //probably componentWillMount is slightly better
        this.props.fetchPosts();

    }
}

function mapStateToProps(state){
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);