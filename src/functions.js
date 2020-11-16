import { models } from './data/unitsAndTerrain';
// this will convert sizes from millimetres, to battlefield size
function mmToInchesToBf(mmValue) {
  //inch == mm / 25,4
  // battlefield size is inches
  // not sure if this is right or even close..
  return mmValue / 25.4;
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
  convertedModel[0].location.x = newX;
  convertedModel[0].location.y = 100;
  return convertedModel[0];
}
// this draw models and terrains to fields
export function draw(canvas, canvas2, troops, buildings, hovers) {
  canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height);  // clear all
  canvas2.getContext("2d").clearRect(0,0,canvas.width,canvas.height);  // clear all
  //console.log('hovers: ', hovers);
  let ctx = null;
  troops.forEach((item, i) => {
    //console.log('drawing: ', item);
    // select correct canvas
    item.location.inField ? ctx = canvas.getContext("2d") : ctx = canvas2.getContext("2d")
    ctx.beginPath();
    ctx.fillStyle = 'black';
    // if cirle paint
    if (item.baseForm === 'circle') {
      ctx.arc(item.location.x, item.location.y, item.baseSize, 0, 2 * Math.PI);
      ctx.fill();
    } else if (item.baseForm === 'square') {
      ctx.save(); // save coords system
      ctx.translate(item.location.x + item.baseSize[0]/2, item.location.y + item.baseSize[1]/2);
      ctx.rotate(item.baseSize[2] * Math.PI/180);
      ctx.rect(0, 0, item.baseSize[0], item.baseSize[1]);
      ctx.fill();
      ctx.restore(); // restore saved coords
    }
    ctx.closePath();
    // info texts
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillText (item.name, item.location.x, item.location.y-30);
    ctx.fill();
  });
  // paint hovers
  let mouseLocation = null;
  if (hovers.onField.y < canvas.height) {
    ctx = canvas.getContext("2d");
    mouseLocation = hovers.onField;
  } else {
    ctx = canvas2.getContext("2d")
    mouseLocation = hovers.offField;
  }
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(mouseLocation.x-20, mouseLocation.y - 20);
  ctx.lineTo(mouseLocation.x+40, mouseLocation.y +40);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(mouseLocation.x+40, mouseLocation.y - 20);
  ctx.lineTo(mouseLocation.x-40, mouseLocation.y +40);
  ctx.stroke();
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
