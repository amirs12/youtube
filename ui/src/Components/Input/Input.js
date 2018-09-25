import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {text: "hi"};
    }

    render() {
        //this.setState({text: "bye"}); -> adds or replaces the keys/values of state
      return (
        <input placeholder={`type something ${this.state.text}`} className="App-input"></input>
      );
    }
};

export default Input;