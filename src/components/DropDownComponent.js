import React, { Component } from "react";
import '../App.css';

class DropDownComponent extends Component {
  constructor() {
    super();
    this.collectData = this.collectData.bind(this);
    this.focusedDropdown = this.focusedDropdown.bind(this);
  }
  componentDidMount() {
    /* fill menus */
    this.props.options.forEach( (item) => {
      const o = document.createElement("option");
      o.text = item.name;
      o.value = item.name;
      o.key = item.name;
      document.getElementById("ddMenu").appendChild(o);
    });
  }
  collectData(elem){
    console.log('dd value now: ', elem.target.value);
  }
  focusedDropdown(element) {
    console.log('focused: ', element.target.id);
    /*
    const objectToSend = {name: 'infoToLeftSection', value: element.target.id}
    this.props.sendData(objectToSend);
    */
  }
  render() {
    return(
      <div>
        <select id= "ddMenu" className= "rollMenus" onChange= {this.collectData} onFocus= {this.focusedDropdown}>
          <option value = "Choose a model">Choose a model</option>
        </select><br />
      </div>
    );
  }
}

export default DropDownComponent;
