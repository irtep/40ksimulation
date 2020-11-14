import React, { Component } from "react";
import Field from './components/Field.js';
import Menu from './components/Menu.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      army1: [],
      army2: []
    }
  }
  render() {
    return(
      <div>
        <Menu />
        <Field />
      </div>
    );
  }
}

export default App;
