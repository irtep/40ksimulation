import { Model, Stats } from './classes.js';
//
// constructor(name, statLine, weapons, rules, location, baseForm, baseSize)
// constructor(name, desc, location, wounds, baseForm, baseSize)
export const models = [
  // imperial guard units
   new Model('guardsmen',
    `6'', 4+, 4+, 3/3, w1, a1, ld 6, 5+<br>
    sgt: +1ld +1a<br>
    lasguns,grenades,
    sgt: pistol,sword`,
    {inField: false, x: null, y: null},
    10,
    'circle',
    35
    ),
    new Model('missile guardsmen',
     `6'', 4+, 4+, 3/3, w1, a1, ld 6, 5+<br>
     sgt: +1ld +1a<br>
     lasguns,grenades,
     sgt: pistol,sword`,
     {inField: false, x: null, y: null},
     10,
     'circle',
     35
     ),
    new Model('pltn commander',
     `6'', 3+, 3+, 3/3, w3, a3, ld 7, 5+<br>
     5++ invu, orders<br>
     pistol,sword`,
     {inField: false, x: null, y: null},
     3,
     'circle',
     25
     ),
    new Model('armoured sentinel',
     `8'', 4+, 4+, 5/6, w6, a1, ld 7, 3+<br>
     heavy flamer/multilaser`,
     {inField: false, x: null, y: null},
     6,
     'circle',
     60
     ),
    new Model('contemptor dreadnought',
     `8'', 3+, 3+, 7/7, w9, a4, ld 8, 3+<br>
     khreres: 24 h6 7 -1 1<br>
     fist: m 2x -3 3<br>
     5++ invu<br>
     each damage: reduce 1, min 1<br>
     explo 6, 3'', 1, hatefull`,
     {inField: false, x: null, y: null},
     9,
     'circle',
     60
     ),
    new Model('leviathan dreadnought',
     `8+: 8'', 3+, 3+, 7/7, w14, a4, ld 8, 2+<br>
      4-7: 6'', 4+, 4+, 7/7, x, a4, ld 8, 2+<br>
      1-3: 4'', 5+, 5+, 7/7, x, a4, ld 8, 2+<br>
     2x cannon: 36 h8 7 -1 2<br>
     2x heavy flamer: 12'' d6 5 -1 1 autohit<br>
     5++ invu<br>
     each damage: reduce 1, min 1<br>
     explo 6, 6'', d3`,
     {inField: false, x: null, y: null},
     14,
     'circle',
     60
     ),
    new Model('helbrute',
     `8'', 3+, 3+, 6/7, w8, a4, ld 8, 3+<br>
     fist: m 2x -3 3<br>
     crazy, if is hit, 6 hits back closest<br>
     explo 6, 3'', d3, hatefull`,
     {inField: false, x: null, y: null},
     8,
     'circle',
     60
     ),
    new Model('dreadclaw drop pod',
     `12'', 4+, -, 6/6, w9, a4, ld 8, 3+<br>
     blades: m 2x -4 3<br>
     jets: if over passes 1=nothing, 2-5= d3 mortals, 6= d6 mortals<br>
     explo 6, 6'', 1`,
     {inField: false, x: null, y: null},
     9,
     'circle',
     60
     ),
    new Model('berserkers',
     `6'', 3+, 3+, 5/4, w1, a2, ld 7, 3+<br>
     champ: +1 attack, +1 ld.
     melees twice<br>
     death to false emperor,
     hatefull`,
     {inField: false, x: null, y: null},
     10,
     'circle',
     35
     ),
    new Model('sorcerer',
     `6'', 3+, 3+, 4/4, w4, a3, ld 9, 3+<br>
     2 spells, 1 deny.
     force stave: +3 -1 d3<br>
     death to false emperor
     hatefull`,
     {inField: false, x: null, y: null},
     4,
     'circle',
     32
     ),
    new Model('warpsmith',
     `6'', 3+, 3+, 4/4, w4, a3, ld 9, 3+<br>
     flamer, melta.
     can heal 1 of vehicle, range 1'' or 1 mortal to 18'' on 2+<br>
     death to false emperor
     hatefull`,
     {inField: false, x: null, y: null},
     4,
     'circle',
     32
     ),
    new Model('noise marines',
     `6'', 3+, 3+, 4/4, w1, a2, ld 7, 3+<br>
     champ: +1 attack, +1 ld.
     if model dies, shoots<br>
     sonic blaster: 24'' assault 3 401, no covers<br>
     death to false emperor,
     hatefull`,
     {inField: false, x: null, y: null},
     10,
     'circle',
     35
     ),
    new Model('chaos space marines',
     `6'', 3+, 3+, 4/4, w1, a1, ld 7, 3+<br>
     champ: +1 attack, +1 ld.<br>
     death to false emperor,
     hatefull`,
     {inField: false, x: null, y: null},
     10,
     'circle',
     35
     ),
  new Model('Leman Russ',
   `7+: 10'', 6+, 4+, 7/8, 12, 3, 7, 3+<br>
    4-6: 7'', 6+, 5+, 7/8, x, d3, 7, 3+<br>
    1-3: 4'', 6+, 6+, 7/8, x, 1, 7, 3+<br>
   2x turret to same target if moved 1/2 max<br>
   bc: 72'' d6 8 -2 d3 blast<br>
   demo: 24'' d6 10 -3 d6, blast<br>
   explo 6, 6'', d3,
   smokes`,
   {inField: false, x: null, y: null},
   12,
   'square',
   [78,120,0]
   ),
new Model('Lightning',
 `7+: 10'', 6+, 3+, 7/7, 14, 3, 7, 3+<br>
  4-6: 7'', 6+, 4+, 7/7, x, d3, 7, 3+<br>
  1-3: 4'', 6+, 5+, 7/7, x, 1, 7, 3+<br>
 aircraft, hard to hit, supersonic<br>
 2x lasc, 1 long autoc, 4x hellstrikes<br>
 long autoc: 72'' h2 7 -1 d3<br>
 hellstrikes: 72'' h1 8 -2 d6, two dices, better<br>
 explo 6, 6'', d3`,
 {inField: false, x: null, y: null},
 14,
 'square',
 [78,120,0]
 ),
new Model('predator',
 `6+: 12'', 6+, 3+, 6/7, 11, 3, 8, 3+<br>
  3-5: 6'', 6+, 4+, 6/7, x, d3, 8, 3+<br>
  1-2: 3'', 6+, 5+, 6/7, x, 1, 8, 3+<br>
 explo 6, 6'', d3, hatefull`,
 {inField: false, x: null, y: null},
 11,
 'square',
 [78,120,0]
 ),
    new Model('vindicator',
     `6+: 10'', 6+, 3+, 6/8, 11, 3, 8, 3+<br>
      3-5: 5'', 6+, 4+, 6/8, x, d3, 8, 3+<br>
      1-2: 3'', 6+, 5+, 6/8, x, 1, 8, 3+<br>
      explo 6, 6'' d3
      smokes, hatefull`,
     {inField: false, x: null, y: null},
     11,
     'square',
     [78,120,0]
     ),
    new Model('terrax',
     `8+: 8'', 4+, 3+, 7/8, 14, 3, 8, 3+<br>
      4-7: 5'', 4+, 4+, 7/8, x, d3, 8, 3+<br>
      1-3: 3'', 4+, 5+, 7/8, x, 1, 8, 3+<br>
      drill: x2, -4 d3+3, vs. vehicle: d3+6<br>
      meltas: 12'' h5 8 -4 d6 if 1/2 +2damage<br>
      explo 66d3, hatefull`,
     {inField: false, x: null, y: null},
     14,
     'square',
     [78,120,0]
     ),
  new Model('baneblade',
   `14+: 10'', 6+, 4+, 9/8, 26, 9, 7, 3+<br>
    7-13: 7'', 6+, 5+, 9/8, x, 6, 7, 3+<br>
    1-6: 4'', 6+, 6+, 9/8, x, 3, 7, 3+<br>
   bbc: 72'' 3d6 9 -3 3 blast<br>
   demo: 24'' d6 10 -3 d6, blast<br><br>
   smokes, explo 6+,2d6,d6`,
   {inField: false, x: null, y: null},
   26,
   'square',
   [100,160,0]
   ),
  new Model('chimera',
   `6+: 12'', 6+, 4+, 6/7, 10, 3, 7, 3+<br>
    3-5: 8'', 6+, 5+, 6/7, x, d3, 7, 3+<br>
    1-3: 4'', 6+, 6+, 6/7, x, 1, 7, 3+<br>
    lasguns: r3 301, only if transporting<br>
    multilasgun h3 601<br>
    explo 66d3, hatefull`,
   {inField: false, x: null, y: null},
   10,
   'square',
   [78,120,0]
   ),
  new Model('tank commander',
   `7+: 10'', 6+, 3+, 7/8, 12, 3, 7, 3+<br>
    4-6: 7'', 6+, 4+, 7/8, x, d3, 7, 3+<br>
    1-3: 4'', 6+, 5+, 7/8, x, 1, 7, 3+<br>
   2x turret to same target if moved 1/2 max<br>
   bc: 72'' d6 8 -2 d3 blast<br>
   demo: 24'' d6 10 -3 d6, blast<br>
   explo 6, 6'', d3<br>
   orders<br>
   smokes`,
   {inField: false, x: null, y: null},
   12,
   'square',
   [78,120,0]
   ),
  new Model('land raider',
   `9+: 10'', 6+, 3+, 8/8, 16, 6, 9, 2+<br>
    5-8: 5'', 6+, 4+, 8/8, x, d6, 9, 2+<br>
    1-4: 3'', 6+, 5+, 8/8, x, 1, 9, 2+<br>
   smokes, hatefull<br>
   smokes, explo 6+,6,d3`,
   {inField: false, x: null, y: null},
   16,
   'square',
   [80,140,0]
   )
];
export const terrain = [
  {w: 166, h: 40, x: 140, y: 150},
  {w: 146, h: 70, x: 340, y: 30},
  {w: 188, h: 30, x: 540, y: 150},
  {w: 106, h: 20, x: 150, y: 350},
  {w: 96, h: 80, x: 340, y: 250},
  {w: 78, h: 90, x: 240, y: 350}
];
