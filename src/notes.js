/*
notes and plan here
standard battlefield 44*60 inches
converted in *100, so 100 pixels is 1 inch in battlefield simulation

start page:
menu:
create army -> create army interface
play -> choose armies, select field -> to game

create army interface:

tools:
set points limit
create model
create unit
select unit
save army

play:

infopanel:
victory points, turn, command points

sizes:
ig-soldier 25mm
space marine 32mm
leman russ / chimera 78x120
rhino 76x117
land raider  120x180


templa for component:
import React, { Component } from "react";
import './App.css';

class App extends Component {
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
        terve!
      </div>
    );
  }
}

export default App;

*/
