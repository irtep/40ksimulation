import React, { Component } from "react";
import '../App.css';

class ButtonComponent extends Component {
  constructor() {
    super();
    this.clickControl = this.clickControl.bind(this);
  }
  clickControl(e) {
    // send clicked buttons name to parent
    this.props.dataReceiver(e.target.value);
  }
  render() {
    return(
      <div>
        <input type= "button" value= {this.props.name} onClick= {this.clickControl}/>
      </div>
    );
  }
}

export default ButtonComponent;
