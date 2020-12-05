import React, { Component } from "react";
import { generateThrows } from '../functions.js'
import '../App.css';

class DiceBox extends Component {
  constructor() {
    super();
    this.clickControl = this.clickControl.bind(this);
  }
  clickControl(e) {
    const whites = document.getElementById('whites');
    const blacks = document.getElementById('blacks');
    const greens = document.getElementById('greens');
    const tohit = document.getElementById('toHit').value;
    const diceResults = document.getElementById('diceResults');
    const fields = [whites, blacks, greens];
    const diceOrders = [whites.value, blacks.value, greens.value];
    const generatedThrows = generateThrows(diceOrders);
    diceResults.innerHTML = '';
    let hits = 0;
    let desc = '';
    generatedThrows.forEach((item, i) => {
      hits = 0;
      desc = `${fields[i].id}: `;
      item.forEach((item2, ii) => {
        desc += `${item2} `;
        if (item2 >= tohit) {
          hits++;
        }
      });
      diceResults.innerHTML += `${desc}. hits/wounds: ${hits} <br/>`;
    });

    console.log('generated: ', generateThrows(diceOrders));
    console.log('diceOrders: ', diceOrders);
  }
  render() {
    return(
      <div>
        <input id= "whites" type= "number" className= "diceInputs"/>x white dices.<br/>
        <input id= "blacks" type= "number" className= "diceInputs"/>x black dices.<br/>
        <input id= "greens" type= "number" className= "diceInputs"/>x green dices.<br/>
        to hit/wound: <input id= "toHit" type= "number" className= "diceInputs"/><br/>
        <input id= "throw" type= "button" value= "throw dices" onClick= {this.clickControl}/><br/>
        <div id= "diceResults">
        </div>
        <div id= "vps">
        <p>
        <input type= "number" className= "diceInputs"/>ig CPs.<br/>
        <input type= "number" className= "diceInputs"/>ig VP.<br/>
        <input type= "number" className= "diceInputs"/>TURN.<br/>
        <input type= "number" className= "diceInputs"/>bl CP.<br/>
        <input type= "number" className= "diceInputs"/>bl VP<br/>
        </p>
        <textarea className= "largeTextField"/>
        </div>
      </div>
    );
  }
}

export default DiceBox;
