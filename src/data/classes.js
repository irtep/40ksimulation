import { convertBases } from '../functions.js';

// all models are these
export class Model {
  constructor(name, desc, location, wounds, baseForm, baseSize, faction){
    this.name = name;
    this.desc = desc;
    this.location = location;
    this.wounds = wounds;
    this.baseForm = baseForm;
    // circle bases should come as mm value, squares in array [w,h]
    this.baseSize = convertBases(baseForm, baseSize);
    this.faction = faction;
  };
  get showStats() {
    const stringToSend = `${this.name} <br>${this.desc}`;
    return stringToSend;
  }
  set editWounds(where) {
    console.log('adding or deducting: ', where);
    if (where === 'add') {
      this.wounds =+ 1;
    } else {
      this.wounds -= 1;
    }
  }
}
export class Terrain {
  constructor(name, type, color, location, baseForm, baseSize){
    this.name = name;
    this.color = color;
    this.location = location;
    this.baseForm = baseForm;
    // circle bases should come as mm value, squares in array [w,h]
    this.baseSize = convertBases(baseForm, baseSize);
  };
}
export class Stats {
  constructor(m, ws, bs, s, t, w, a, ld, sv, woundRange){
    this.m = m;
    this.ws = ws;
    this.bs = bs;
    this.s = s;
    this.t = t;
    this.w = w;
    this.a = a;
    this.ld = ld;
    this.sv = sv;
    this.woundRange = woundRange; // when this statLine is operative
  }
}
/*  maybe not really needed
export class Weapon {
  constructor(name, type, range, s, ap, damage, specials) {
    this.name = name;
    this.type = type;
    this.range = range;
    this.s = s;
    this.ap = ap;
    this.damage = damage;
    this.specials = specials;
  }
  get showStats() {
    return `${this.name} <br>type: ${this.statsLine}<br>range: ${this.range}<br>
      stats: ${this.s} -${this.ap} ${this.damage} rules:  ${this.specials}`;
  }
}
*/
