import React, { Component } from "react";
import Field from './components/Field.js';
import Menu from './components/Menu.js';
import DiceBox from './components/DiceBox.js';
import OffField from './components/OffField.js';
import InfoBox from './components/InfoBox.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      army1: [],
      army2: []
    }
    this.fromMenuToInfoBox = this.fromMenuToInfoBox.bind(this);
  }
  fromMenuToInfoBox(elem) {
    // transfer data from Menu to InfoBox
    console.log(elem);
    this.setState({fromStateToInfoBox: elem});
  }
  render() {
    return(
      <div id= "container">
        <div id= "upperHeader">
          <Menu
            fromButtonToInfoBox = {this.fromMenuToInfoBox}
          />
        </div>
        <div id= "centerField">
          <Field />
        </div>
        <div id= "OffField">
          <OffField />
        </div>
        <div id= "information">
          <InfoBox
            dataToUse = {this.state.fromStateToInfoBox}
          />
        </div>
        <div id= "FooterDown">
          <DiceBox />
        </div>
      </div>
    );
  }
}

export default App;
