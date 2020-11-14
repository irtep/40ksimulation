import { convertBases } from '../functions.js';

// all models are these
export class Model {
  constructor(name, statLine, weapons, rules, location, baseForm, baseSize){
    this.name = name;
    this.statLine = statLine; // give these in array to support multiProfiles
    this.weapons = weapons;
    this.rules = rules;
    this.location = location;
    this.baseForm = baseForm;
    // circle bases should come as mm value, squares in array [w,h]
    this.baseSize = convertBases(baseForm, baseSize);
  };
  get showStats() {
    return ´${this.name} <br>stats: ${this.statsLine}<br>points: ${this.pointCost}<br>
      weapons ${this.weapons}<br>rules:  ${this.rules}´;
  }
}
export class Terrain {
  constructor(name, type, color, location, baseForm, baseSize){
    this.name = name;
    this.statLine = statLine; // give these in array to support multiProfiles
    this.color = color;
    this.location = location;
    this.baseForm = baseForm;
    // circle bases should come as mm value, squares in array [w,h]
    this.baseSize = convertBases(baseForm, baseSize);
  };
}
class Stats {
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
export class Weapon {
  constructor(name, type, range, s, ap, damage, specials) {
    this.name = name;
    this.type = type,
    this.range = range;
    this.s = s;
    this.ap = ap;
    this.damage = damage;
    this.specials = specials;
  }
  get showStats() {
    return ´${this.name} <br>type: ${this.statsLine}<br>range: ${this.range}<br>
      stats: ${this.s} -${this.ap} ${this.damage} rules:  ${this.specials}´;
  }
}
