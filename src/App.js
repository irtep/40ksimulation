import React, { Component } from "react";
import Field from './components/Field.js';
import Menu from './components/Menu.js';
import DiceBox from './components/DiceBox.js';
import InfoBox from './components/InfoBox.js';
import { convertModel } from './functions.js';
import { modelActions } from './data/variables.js';
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
    this.fromFieldToApp = this.fromFieldToApp.bind(this);
  }
  fromFieldToApp(e) {
    // clicked empty space
    if (typeof e === 'object') {
      console.log('empty click detected, coords:' , e.coords);
      if (this.state.orderSelected === 'move') {
        console.log('move active, empty space clicked, state', this.state);
        console.log('should now mode selected model to ', e.coords, ' then empty model selected');
      }
    } else {
      this.setState({modelClicked: e ,
        fromStateToInfoBox: 'modelChosen'
      }
    );

    }
  }
  fromMenuToInfoBox(elem) {
    // transfer data from Menu to InfoBox
    this.setState({fromStateToInfoBox: elem});
  }
  fromInboxToApp(elem) {
    // check if this is new model or order
    const orders = modelActions.filter( order => order.name === elem);
    // create new model
    if (orders.length === 0) {
      const modelsInGame = this.state.modelsInGame;
      const converted = convertModel(elem, modelsInGame.length);
      modelsInGame.push(converted);
      this.setState({modelsInGame});
    } else {
      this.setState({orderSelected: elem});
    }
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
            w = '700'
            h = '700'
            modelsInGame = {this.state.modelsInGame}
            terrains = {this.state.terrains}
            dataReceiver = {this.fromFieldToApp}
            />
        </div>
        <div id= "information">
          <InfoBox
            dataToUse = {this.state.fromStateToInfoBox}
            fromInboxToApp = {this.fromInboxToApp}
          />
        </div>
        <div id= "dices">
          <DiceBox />
        </div>
      </div>
    );
  }
}

export default App;
