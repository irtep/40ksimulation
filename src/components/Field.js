import React, { Component } from "react";
import '../App.css';

class Field extends Component {
  constructor() {
    super();
    this.state = {
      army1: [],
      army2: []
    }
  }
  render() {
    return(
      <div>
        <canvas id= "battleField"></canvas>
      </div>
    );
  }
}

export default Field;
