import React, { Component } from "react";
import Field from './components/Field.js';
import Menu from './components/Menu.js';
import DiceBox from './components/DiceBox.js';
import OffField from './components/OffField.js';
import InfoBox from './components/InfoBox.js';
import { convertModel } from './functions.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modelsInGame: [],
      terrains: []
    }
    this.fromMenuToInfoBox = this.fromMenuToInfoBox.bind(this);
    this.fromInboxToApp = this.fromInboxToApp.bind(this);
  }

  fromMenuToInfoBox(elem) {
    // transfer data from Menu to InfoBox
    this.setState({fromStateToInfoBox: elem});
  }
  fromInboxToApp(elem) {
    const modelsInGame = this.state.modelsInGame;
    const converted = convertModel(elem, modelsInGame.length);
    modelsInGame.push(converted);
    this.setState({modelsInGame});
  }
  componentDidUpdate(){
    console.log('state now: ', this.state);
  //  if (this.state.modelsInGame.length !== 0 && this.state.hovers !== undefined) {
  //    draw(inField, outField, this.state.modelsInGame, this.state.terrains, hoveringDetails);
//    }
  };
  render() {
    return(
      <div id= "container">
        <div id= "upperHeader">
          <Menu
            fromButtonToInfoBox = {this.fromMenuToInfoBox}
          />
        </div>
        <div id= "centerField">
          <Field
            name = 'battleField'
            modelsInGame = {this.state.modelsInGame}
            terrains = {this.state.terrains}
            />
        </div>
        <div id= "OffField">
          <OffField
          onMouseMove= {(e) => this.hovering(e)}
            />
        </div>
        <div id= "information">
          <InfoBox
            dataToUse = {this.state.fromStateToInfoBox}
            fromInboxToApp = {this.fromInboxToApp}
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
