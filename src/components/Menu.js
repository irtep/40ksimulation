import React, { Component } from "react";
import '../App.css';
import ButtonComponent from './ButtonComponent.js';
import { armies } from '../data/variables.js';

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
  render() { console.log('armies: ', armies)
    return(
      <div id= "buttonRow">
        <ButtonComponent
          name = 'Add unit'
          dataReceiver = {this.receiveDataFromChild}
        />
        {/* add army buttons */}
        {armies.map(army => {
          return (
            <ButtonComponent
            name={army.name}
            key = {army.name}
            dataReceiver = {this.receiveDataFromChild}
            />
          )
          }
        )}
      </div>
    );
  }
}

export default Menu;
