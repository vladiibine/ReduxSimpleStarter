import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookList from '../containers/book-list';


export default class App extends Component {
  render() {
    return (
        <div>
          <BookList/>
        </div>
    );
  }
}

