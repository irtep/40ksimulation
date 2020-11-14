import React, { Component } from "react";
import '../App.css';

class DiceBox extends Component {
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
        dice box
      </div>
    );
  }
}

export default DiceBox;
