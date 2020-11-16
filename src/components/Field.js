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
    const inField = document.getElementById('battleField');
    const outField = document.getElementById('offTheField');
    let r = document.getElementById('battleField').getBoundingClientRect();
    let r2 = document.getElementById('offTheField').getBoundingClientRect();
    let x = e.clientX - r.left;
    let y = e.clientY - r.top;
    let x2 = e.clientX - r2.left;
    let y2 = e.clientY - r2.top;
    //console.log('hovering: ', x, y, x2, y2);
    const battleFieldDetails = {x: x, y: y};
    const offTheFieldDetails = {x: x2, y: y2};
    const hoveringDetails = {onField: battleFieldDetails,
                            offField: offTheFieldDetails};
    if (this.props.modelsInGame.length !== 0) {
      draw(inField, outField, this.props.modelsInGame, this.props.terrains, hoveringDetails);
    }
  }
  render() {
    return(
      <div>
        <canvas id= {this.props.name} onMouseMove= {(e) => this.hovering(e)}></canvas>
      </div>
    );
  }
}

export default Field;
