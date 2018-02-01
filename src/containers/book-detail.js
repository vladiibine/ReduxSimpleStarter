import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book){
            return <div>Select a book to get started</div>
        }
        return (
            <div>
                <h3>Details for</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}
// this takes the entire application state. Probably gets called only when the
// key that it returned changes somehow. How can it change? Only a reducer can
// can change state, because it determines from an action, and a state, what
// the next state is
// Wow moment... the global state structure is defined in reducers/index.js
// And then this determines which of the keys in the global state object
// will be on the props of our BookDetail. The thing is that if the props
// change, then it means that the component/container will have to be rerendered
// We therefore need this function only to be able to tell react not to render
// this shitty component all the time, but just when a key changes
// New keys can be added here, and then they'll be in the props, and
// then react-redux will watch for those keys too I guess...
function mapStateToProps(state){
    return {book: state.activeBook}
}

export default connect(mapStateToProps)(BookDetail);