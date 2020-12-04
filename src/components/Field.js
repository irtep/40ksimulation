import React, { Component } from "react";
import { draw, arcVsArc } from '../functions.js';
import '../App.css';

class Field extends Component {
  constructor() {
    super();
    this.state = {
      clicked: ''
    }
    this.hovering = this.hovering.bind(this);
    this.clickControl = this.clickControl.bind(this);
  }
  hovering(e) {
    /*
    modelClicked = {this.state.modelClicked}
    orderSelected = {this.state.orderSelected}
    */
    // get mouse locations offsets to get where mouse is hovering.
    const thisField = document.getElementById(this.props.name);
    let r = thisField.getBoundingClientRect();
    let x = e.clientX - r.left;
    let y = e.clientY - r.top;
    const hoveringDetails = {canvas: this.props.name, x: x, y: y};
    if (this.props.modelsInGame.length !== 0) {
      draw(thisField, this.props.modelsInGame, this.props.terrains, hoveringDetails,
      this.props.modelClicked, this.props.orderSelected);
    }
    // send info where hovering:
    let collisionDetected = false;
    if (this.props.modelsInGame.length > 0) {
      const searchLocation = this.props.modelsInGame.map( modelo => {
        // make collision check if this is being hovered atm.
        let baseSize = null;
        if (modelo.baseForm === 'circle') {
          baseSize = modelo.baseSize;
        } else {
          baseSize = modelo.baseSize[1];
        }
        const collision = arcVsArc(modelo.location, hoveringDetails, baseSize, 5);
        if (collision) {
          collisionDetected = true;
          this.props.hoverInfo(modelo.name);
        }
      });
      if (collisionDetected === false) {
        // send info that click didnt hit any model
        this.props.hoverInfo('not hovering anywhere');
      }
    }
  }
  clickControl(e) {
    // get mouse locations offsets to get where mouse is hovering.
    const thisField = document.getElementById(this.props.name);
    let r = thisField.getBoundingClientRect();
    let x = e.clientX - r.left;
    let y = e.clientY - r.top;
    const hoveringDetails = {canvas: this.props.name, x: x, y: y};
    let collisionDetected = false;
    const searchLocation = this.props.modelsInGame.map( modelo => {
      // make collision check if this is being hovered atm.
      let baseSize = null;
      if (modelo.baseForm === 'circle') {
        baseSize = modelo.baseSize;
      } else {
        baseSize = modelo.baseSize[1];
      }
      const collision = arcVsArc(modelo.location, hoveringDetails, baseSize, 5);
      if (collision) {
        collisionDetected = true;
        if (this.props.orderSelected === '') {
          // send clicked soldiers name to parent
          this.props.dataReceiver(modelo.id);
        } else {
          // send only empty click if order is selected
          this.props.dataReceiver({where: 'empty click', coords: hoveringDetails});
        }
      }
    });
    if (collisionDetected === false) {
      // send info that click didnt hit any model
      this.props.dataReceiver({where: 'empty click', coords: hoveringDetails});
    }
    // could draw after click too
  }
  render() {
    return(
      <div>
        <canvas id= {this.props.name}
        width = {this.props.w}
        height = {this.props.h}
        onMouseMove= {(e) => this.hovering(e)}
        onClick= {(e) => this.clickControl(e)}>
        </canvas>
      </div>
    );
  }
}

export default Field;
