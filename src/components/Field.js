import React, { Component } from "react";
import '../App.css';

class Field extends Component {
  constructor() {
    super();
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
