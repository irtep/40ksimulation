import React, { Component } from "react";
import DropDownComponent from './DropDownComponent.js';
import { models } from '../data/unitsAndTerrain.js';
import { modelActions } from '../data/variables.js';
import '../App.css';

class InfoBox extends Component {
  constructor() {
    super();
    this.state = {
      dataToShow: ''
    }
    this.sendToParent = this.sendToParent.bind(this);
  }
  componentDidUpdate(){
    if (this.state.dataToShow !== this.props.dataToUse) {
      this.setState({dataToShow: this.props.dataToUse});
    }
  }
  sendToParent(elem) {
    this.props.fromInboxToApp(elem);
    this.setState({dataToShow: ''});
  }
  render() {
    let showThis = '';
    switch (this.state.dataToShow) {
      case 'Add unit':
        showThis = <DropDownComponent
        options = {models}
        newModelChosen = {this.sendToParent}
        firstOption = 'choose a model'
        />;
      break;
      case 'modelChosen':
      showThis = <DropDownComponent
      options = {modelActions}
      newModelChosen = {this.sendToParent}
      firstOption = 'choose action'
      />;
      break;
      case '':
        showThis = '';
      break;
      default: console.log('state not found in infoBox');
    }
    return(
      <div id = "infoIsHere">
        {showThis}
      </div>
    );
  }
}

export default InfoBox;
