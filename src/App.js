import React, { Component } from "react";
import Field from './components/Field.js';
import Menu from './components/Menu.js';
import DiceBox from './components/DiceBox.js';
import InfoBox from './components/InfoBox.js';
import { convertModel } from './functions.js';
import { modelActions } from './data/variables.js';
import './App.css';
//const bfield = document.getElementById('battleField');

class App extends Component {
  constructor() {
    super();
    this.state = {
      modelsInGame: [],
      terrains: [],
      modelClicked: '',
      orderSelected: ''
    }
    this.fromMenuToInfoBox = this.fromMenuToInfoBox.bind(this);
    this.fromInboxToApp = this.fromInboxToApp.bind(this);
    this.fromFieldToApp = this.fromFieldToApp.bind(this);
  }
  fromFieldToApp(e) {
    // clicked empty space
      // orders
      if (this.state.modelClicked !== '') {
        // move
        if (this.state.orderSelected === 'move') {
          // identificate the correct model from state
          console.log('move');
          const moving = this.state.modelsInGame.filter( model => model.id === this.state.modelClicked);
          // set coords for that model
          if (moving[0] !== undefined) {
            moving[0].location.x = e.coords.x;
            moving[0].location.y = e.coords.y;
          }
          // reset orderSelected
          this.setState({
            orderSelected: '',
            modelClicked: '',
            fromStateToInfoBox: ''
          });
        }
        // check distance
        if (this.state.orderSelected === 'check distance') {
          this.setState({
            orderSelected: '',
            modelClicked: '',
          });
        }
    } else {
      this.setState({
        modelClicked: e ,
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
    if (this.state.modelClicked !== '') {
      // pivot right
      if (this.state.orderSelected === 'pivot right') {
        // identificate the correct model from state
        const activated = this.state.modelsInGame.filter( model => model.id === this.state.modelClicked);
        if (activated[0] !== undefined) {
          if (activated[0].baseForm === 'square') {
            activated[0].baseSize[2] += 45;
          }
          this.setState({
            orderSelected: '',
            modelClicked: '',
            fromStateToInfoBox: ''
          });
        }
      }
      // pivot left
      if (this.state.orderSelected === 'pivot left') {
        // identificate the correct model from state
        const activated = this.state.modelsInGame.filter( model => model.id === this.state.modelClicked);
        if (activated[0] !== undefined) {
          if (activated[0].baseForm === 'square') {
            activated[0].baseSize[2] -= 45;
          }
          this.setState({
            orderSelected: '',
            modelClicked: '',
            fromStateToInfoBox: ''
          });
        }
      }
      // wounds -
      if (this.state.orderSelected === '-1 wound') {
        // identificate the correct model from state
        const activated = this.state.modelsInGame.filter( model => model.id === this.state.modelClicked);
        if (activated[0] !== undefined) {
          activated[0].statLine[0].w = activated[0].statLine[0].w - 1;
          this.setState({
            orderSelected: '',
            modelClicked: '',
            fromStateToInfoBox: ''
          });
        }
      }
      // wounds +
      if (this.state.orderSelected === '+1 wound') {
        // identificate the correct model from state
        const activated = this.state.modelsInGame.filter( model => model.id === this.state.modelClicked);
        if (activated[0] !== undefined) {
          activated[0].statLine[0].w += 1;
          this.setState({
            orderSelected: '',
            modelClicked: '',
            fromStateToInfoBox: ''
          });
        }
      }
    }
    // call draw... doenst seems to work here so disabled
    //draw(bfield, this.state.modelsInGame, this.state.terrains, {x: 0, y: 0});
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
            modelClicked = {this.state.modelClicked}
            orderSelected = {this.state.orderSelected}
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
