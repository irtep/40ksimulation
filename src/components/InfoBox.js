import React, { Component } from "react";
import DropDownComponent from './DropDownComponent.js';
import { models } from '../data/unitsAndTerrain.js';
import { modelActions, factions } from '../data/variables.js';
import '../App.css';

class InfoBox extends Component {
  constructor() {
    super();
    this.state = {
      dataToShow: ''
    }
    this.sendToParent = this.sendToParent.bind(this);
  }
  sendToParent(elem) {
    this.props.fromInboxToApp(elem);
    this.setState({dataToShow: ''});
  }
  render() {
    let showThis = '';
    let troopInfo = '';
    switch (this.props.dataToUse) {
      case 'Add unit':
        const listOfFaction = models.filter( mode => mode.faction === this.props.chosenFaction);
        showThis = <DropDownComponent
        options = {listOfFaction}
        dataSend = {this.sendToParent}
        firstOption = 'choose a model'
        />;
      break;
      case 'modelChosen':
        showThis = <DropDownComponent
        options = {modelActions}
        dataSend = {this.sendToParent}
        firstOption = 'choose action'
        />;
      break;
      case '':
        showThis = <DropDownComponent
        options = {factions}
        dataSend = {this.sendToParent}
        firstOption = 'choose a faction'
        />;
      break;
      default: console.log('state not found in infoBox ', this.props);
    }
    if (this.props.toAdditionalInfo !== '') {
      console.log('this.props.ai ', this.props.toAdditionalInfo);
      const foundTroop = models.filter( modd => modd.name === this.props.toAdditionalInfo);
      console.log('fT ', foundTroop[0]);
      troopInfo = foundTroop[0].desc;
    }
    return(
      <div>
        <div id = "infoIsHere">
          {showThis}
        </div>
        <div id = "additionalInfo" className= "new-line">
          {troopInfo}
        </div>
      </div>
    );
  }
}

export default InfoBox;
