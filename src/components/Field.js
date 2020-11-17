import React, { Component } from "react";
import { draw } from '../functions.js';
import '../App.css';

class Field extends Component {
  constructor() {
    super();
    this.hovering = this.hovering.bind(this);
  }
  hovering(e) {
    // get mouse locations offsets to get where mouse is hovering.
    const thisField = document.getElementById(this.props.name);
    let r = document.getElementById(this.props.name).getBoundingClientRect();
    let x = e.clientX - r.left;
    let y = e.clientY - r.top;
    const hoveringDetails = {canvas: this.props.name, x: x, y: y};
    if (this.props.modelsInGame.length !== 0) {
      draw(thisField, this.props.modelsInGame, this.props.terrains, hoveringDetails);
    }
  }
  render() {
    return(
      <div>
        <canvas id= {this.props.name}
        width = {this.props.w}
        height = {this.props.h}
        onMouseMove= {(e) => this.hovering(e)}>
        </canvas>
      </div>
    );
  }
}

export default Field;
