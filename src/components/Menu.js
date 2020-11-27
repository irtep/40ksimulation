import React, { Component } from "react";
import '../App.css';
import ButtonComponent from './ButtonComponent.js';/*
import { models } from '../data/unitsAndTerrain.js';*/

class Menu extends Component {
  constructor() {
    super();
    this.receiveDataFromChild = this.receiveDataFromChild.bind(this);
  }
  receiveDataFromChild(val) {
    // receiving clicks from button(s)
    this.setState({fromChild: val});
    // send clicked buttons name to parent
    this.props.fromButtonToInfoBox(val);
  }
  render() {
    return(
      <div>
        <ButtonComponent
          name = 'Add unit'
          dataReceiver = {this.receiveDataFromChild}
        />
      </div>
    );
  }
}

export default Menu;
