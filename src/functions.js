import { models } from './data/unitsAndTerrain';
// this will convert sizes from millimetres, to battlefield size
function mmToInchesToBf(mmValue) {
  //inch == mm / 25,4
  // battlefield size is inches * 100
  return mmValue / 25.4 * 100;
}
// this will get base sizes right
export function convertBases(form, sizes) {
  if (form === 'circle') {
    return mmToInchesToBf(sizes);
  }
  if (form === 'square') {
    const w = mmToInchesToBf(sizes[0]);
    const h = mmToInchesToBf(sizes[1]);
    return [w, h];
  }
}
// calls random dice, for example 6 is 1d6
export function callDice(max){
    const result =  1 + Math.floor(Math.random() * max);
    return result;
}
// converts name of model to ingame model
export function convertModel(modelsName, modelsActivated) {
  // hulls.filter( hull => hull.name === ship.hull)
  const convertedModel = models.filter( mod => mod.name === modelsName);
  console.log('converted model: ', convertedModel);
  // give x and y
  const newX = 100 + (modelsActivated * 100);
  convertedModel[0].x = newX;
  convertedModel[0].y = 100;
  return convertedModel[0];
}
// this draw models and terrains to fields
export function draw(canvas, canvas2, troops, buildings) {
  console.log('ONDRAW onField: ', canvas, 'offField: ', canvas2, 'troops: ', troops, 'buildings: ', buildings);
  let ctx = canvas.getContext("2d");
  troops.forEach((item, i) => {
    console.log('drawing: ', item);
    // select correct canvas
    // if cirle paint
    // else paint by angle
    // paint hull of the ship:
    ctx.beginPath();
    ctx.fillStyle = 'black';
    /*
    ctx.save(); // save coords system
    ctx.translate(ship.leftTopCorner.x, ship.leftTopCorner.y);
    //ctx.translate(ship.x, ship.y);
    ctx.rotate(ship.heading * Math.PI / 180);
    ctx.rect(0, 0, ship.w, ship.h);
    ctx.fill();
    ctx.closePath();
    // info texts
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillText (ship.name, 0, -30);
    ctx.fill();
    ctx.fillStyle = 'yellow';
    ctx.fillText ('hp: '+ ship.hitPoints, 0, -20);
    ctx.fill();
    ctx.restore();
    */
  });
  /*
  Model {name: "guardsman", statLine: Array(1), weapons: Array(2), rules: "", location: {…}, …}
  baseForm: "circle"
  baseSize: 98.4251968503937
  location: {inField: false, x: null, y: null}
  name: "guardsman"
  rules: ""
  statLine: Array(1)
  0: Stats {m: 6, ws: 4, bs: 4, s: 3, t: 3, …}
  length: 1
  __proto__: Array(0)
  weapons: (2) ["lasgun", "frag grenades"]
  x: 100
  y: 100
  showStats: (...)
  __proto__:
  constructor: class Model
  showStats: (...)
  get showStats: ƒ showStats()
  __proto__: Object
  functions.js:40 drawing:
  Model {name: "Lemann Russ BT", statLine: Array(3), weapons: Array(2), rules: "", location: {…}, …}
  baseForm: "square"
  baseSize: (2) [307.0866141732284, 472.44094488188983]
  location: {inField: false, x: null, y: null}
  name: "Lemann Russ BT"
  rules: ""
  statLine: (3) [Stats, Stats, Stats]
  weapons: (2) ["battle cannon", "heavy bolter"]
  x: 200
  y: 100
  showStats: (...)
  __proto__: Object
  */
}
