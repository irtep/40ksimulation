import React, { Component } from "react";
import '../App.css';

class OffField extends Component {
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
        <canvas id= "offTheField"></canvas>
      </div>
    );
  }
}

export default OffField;