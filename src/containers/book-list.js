import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import { selectBook } from "../actions";


class BookList extends Component {
    renderList() {
        console.log("BookList props: ", this.props);
        // this.props.selectBook('asdf');
        // console.log('props.selectBook === selectBook', this.props.selectBook == selectBook);
        // console.log(this.props.selectBook);
        // console.log(selectBook);
        return this.props.books.map(book => (
                <li key={book.title} className="list-group-item"
                    onClick={() => this.props.selectBook(book)}
                >{book.title}</li>
            )
        )
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state) {
    // whatever is returned will show up as props in bookList
    return {
        books: state.books
    }
}


// anything returned from this function, will end up as props on
// the BookList container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed
    // to all of our reducers. That's what dispatch does, and
    // somehow that's what bindActionCreators does
    // (probably a filter on the key?)
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);