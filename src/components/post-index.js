import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchPosts} from '../actions';

class PostIndex extends React.Component {
    constructor(props){
        super(props);

        this.createPosts = this.createPosts.bind(this);
        console.log(props.posts);
    }

    createPosts(){
        return <div>Asdf</div>;
        return _.entries(this.props.posts).map((entry)=>{
            return (<div>{entry[0]}: {entry[1].title}</div>)
        })
    }

    renderPosts(){
        debugger
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