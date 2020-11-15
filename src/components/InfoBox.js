import React, { Component } from "react";
import DropDownComponent from './DropDownComponent.js';
import { models } from '../data/unitsAndTerrain.js';
import '../App.css';

class InfoBox extends Component {
  constructor() {
    super();
    this.state = {
      dataToShow: ''
    }
  }
  componentDidUpdate(){
    if (this.state.dataToShow !== this.props.dataToUse) {
      this.setState({dataToShow: this.props.dataToUse});
    }
  }
  render() {
    let showThis = '';
    switch (this.state.dataToShow) {
      case 'Add unit':
        showThis = <DropDownComponent options = {models}/>;
      break;
      default:
    }
    return(
      <div id = "infoIsHere">
        {showThis}
      </div>
    );
  }
}

export default InfoBox;
