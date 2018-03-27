import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from "../actions";
// import {fetchPost} from '../actions';

class PostsShow extends Component {
    componentDidMount(){
        // VLAD: this.props.match.params.MY_PARAM; MY_PARAM is defined in the routes
        // it's defined like "/route/to/:MY_PARAM"
        this.props.fetchPost(this.props.match.params.id);
    }
    render(){
        return (
            <div>
                Posts show!
            </div>
        )
    }
}

// VLAD: the ownProps argument is nice - it's the props that will be provided to our component
function mapStateToProps({posts}, ownProps){
    return {post: posts[ownProps.match.params.id]}
}

export default connect(null, {fetchPost})(PostsShow);