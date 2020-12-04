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
    console.log('mounted. options: ', this.props.options);
    this.props.options.forEach( (item) => {
      const o = document.createElement("option");
      o.text = item.name;
      o.value = item.name;
      o.key = item.name;
      document.getElementById("ddMenu").appendChild(o);
    });
  }
  componentDidUpdate() {
    console.log('first option: ', this.props.firstOption);
    const select = document.getElementById("ddMenu");
    const length = select.options.length;
    for (let i = length-1; i >= 0; i--) {
      select.options[i] = null;
    }
    /* fill menus */
    const startOption = document.createElement('option');
    console.log('options received: ', this.props.options);
    startOption.text = this.props.firstOption;
    select.appendChild(startOption);
    this.props.options.forEach( (item) => {
      const o = document.createElement("option");
      o.text = item.name;
      o.value = item.name;
      o.key = item.name;
      select.appendChild(o);
    });
  }
  collectData(elem){
    //console.log('dd value now: ', elem.target.value);
    this.props.dataSend(elem.target.value);
  }
  focusedDropdown(element) {
    //console.log('focused: ', element.target.id);
    /*
    const objectToSend = {name: 'infoToLeftSection', value: element.target.id}
    this.props.sendData(objectToSend);
    */
  }
  render() {
    return(
      <div>
        <select id= "ddMenu" className= "rollMenus" onChange= {this.collectData} onFocus= {this.focusedDropdown}>
          <option value = "Choose a model">{this.props.firstOption}</option>
        </select><br />
      </div>
    );
  }
}

export default DropDownComponent;
