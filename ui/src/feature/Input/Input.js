import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        //this.setState({text: "hi"});
      return (
        <input placeholder={`type something ${this.state.text}`} className="App-input"></input>
      );
    }
};

export default Input;