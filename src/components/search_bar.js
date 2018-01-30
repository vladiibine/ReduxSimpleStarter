import React, { Component } from 'react';
import _ from 'lodash';


class SearchBar extends Component {
    /**
     * props has keys searchTerm and onSearchTermChange
    */
    constructor(props){
        super(props);
        this.state = {searchTerm: props.searchTerm};
    }

    render() {
        return (
            <div className="search-bar">
                {/* Wow, so this works with arrow functions, but methods require extra work*/}
                {/*<input onChange={event => this.setState({a: event.target.value})}/>*/}
                {/*Wow, this requires binding!!!*/}
                <input
                    value={this.state.searchTerm}
                    onChange={this.onInputChanged.bind(this)}
                />
            </div>
        );
    }

    onInputChanged(event){
        this.setState({searchTerm: event.target.value});
        this.props.onSearchTermChange(event.target.value);

    }

    onKeyPress(event){
        if(event.key === 'Enter'){
            console.log('user hit enter');
            debugger
            console.log(this.state.onEnter);
            this.state.onEnter(this.state.a);
        }
    }
}


export default SearchBar;