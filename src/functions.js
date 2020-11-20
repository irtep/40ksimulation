import { models, terrain } from './data/unitsAndTerrain';
// this will convert sizes from millimetres, to battlefield size
function mmToInchesToBf(mmValue) {
  //inch == mm / 25,4
  // battlefield size is inches
  // not sure if this is right or even close..
  return mmValue / 25.4 * 3;
}
// this will get base sizes right
export function convertBases(form, sizes) {
  if (form === 'circle') {
    return mmToInchesToBf(sizes);
  }
  if (form === 'square') {
    const w = mmToInchesToBf(sizes[0]);
    const h = mmToInchesToBf(sizes[1]);
    return [w, h, 0];
  }
}
// calls random dice, for example 6 is 1d6
export function callDice(max) {
    const result =  1 + Math.floor(Math.random() * max);
    return result;
}
export function generateThrows(orders) {
  const results = [ [], [], [] ]
  orders.forEach((item, i) => {
    if (item !== '') {
      for (let ii = 0; ii < item; ii++) {
        results[i].push(callDice(6));
      }
    } else {
      console.log('nothing at');
    }
  });
  return results;
}
// converts name of model to ingame model
export function convertModel(modelsName, modelsActivated) {
  // hulls.filter( hull => hull.name === ship.hull)
  const convertedModel = models.filter( mod => mod.name === modelsName);
  // make a copy of model
  const newModel = JSON.parse(JSON.stringify(convertedModel[0]));
  // give x and y
  const newX = 30 + (modelsActivated * 30);
  newModel.location.x = newX;
  newModel.location.y = 500;
  if (modelsActivated > 40) {newModel.location.y = 560;}
  if (modelsActivated > 80) {newModel.location.y = 600;}
  newModel.id = newModel.name+newModel.location.x+newModel.location.y;
  return newModel;
}
export function distanceCheck(subj, obj) {
  const dx = subj.x - obj.x;
  const dy = subj.y - obj.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance;
};
// this draw models and terrains to fields
export function draw(canvas, troops, buildings, hovers, modelClicked, orderSelected) {
  canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height);
  const ctx = canvas.getContext('2d');
  // paint troops
  troops.forEach((item, i) => {
    //console.log('drawing: ', item);
    ctx.beginPath();
    ctx.fillStyle = 'black';
    // if cirle paint
    if (item.baseForm === 'circle') {
      ctx.arc(item.location.x, item.location.y, item.baseSize, 0, 2 * Math.PI);
      ctx.fill();
    } else if (item.baseForm === 'square') {
      ctx.save(); // save coords system
      ctx.translate(item.location.x, item.location.y);
      ctx.rotate(item.baseSize[2] * Math.PI/180);
      ctx.rect(0-item.baseSize[0]/2, 0-item.baseSize[1]/2, item.baseSize[0], item.baseSize[1]);
      ctx.fill();
      ctx.restore(); // restore saved coords
    }
    ctx.closePath();
    // info texts
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillText (item.name, item.location.x, item.location.y-30);
    ctx.fillText ('wounds '+ item.statLine[0].w, item.location.x, item.location.y-20);
    ctx.fill();
    ctx.closePath();
  });
  // paint distance
  if (modelClicked !== '' && (orderSelected === 'move' || orderSelected === 'check distance')) {
    const activated = troops.filter( model => model.id === modelClicked);
    const distance = distanceCheck(hovers, activated[0].location);
    const convertedDistance = parseInt(distance);
    ctx.beginPath();
    ctx.arc(hovers.x, hovers.y, 3, 0, 2 * Math.PI);
    ctx.fillText ('distance here: '+ convertedDistance / 10 + ' inches', hovers.x+10, hovers.y-30);
    ctx.fill();
    ctx.closePath();
  }
  // field borders
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.rect(0, 0, 700, 440);
  ctx.stroke();
  ctx.closePath();
  // deployment lines
  ctx.beginPath();
  ctx.strokeStyle = 'yellow';
  ctx.rect(0, 146, 700, 146);
  ctx.stroke();
  ctx.closePath();
  // paint terrain
  terrain.forEach((item, i) => {
    ctx.beginPath();
    ctx.fillStyle = 'gray';
    ctx.rect(item.x, item.y, item.w, item.h);
    ctx.fill();
    ctx.closePath();
  });

}
// collision detect arc vs arc
export function arcVsArc(sub, obj, subSize, objSize) {
  const dx = sub.x - obj.x;
  const dy = sub.y - obj.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < subSize + objSize) {
    return true;
  } else {
    return false;
  }
};
