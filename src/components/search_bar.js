import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {'a': 0, onEnter: props.onEnter};


    }
    render() {
        return (
            <div>
                asdf
                {/* Wow, so this works with arrow functions, but methods require extra work*/}
                {/*<input onChange={event => this.setState({a: event.target.value})}/>*/}
                {/*Wow, this requires binding!!!*/}
                <input
                    value={this.state.a}
                    onChange={this.onInputChanged.bind(this)}
                    onKeyPress={this.onKeyPress.bind(this)}
                />
                <br/>
                The input changed # {this.state.a} times
            </div>
        );
    }

    onInputChanged(event){
        this.setState({'a': event.target.value})
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