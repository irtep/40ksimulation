import { Model, Stats } from './classes.js';

// constructor(name, statLine, weapons, rules, location, baseForm, baseSize)
// constructor(m, ws, bs, s, t, w, a, ld, sv, woundRange)
export const models = [
  // imperial guard units
   new Model('guardsman',
  //           m  ws bs s t   w  a  l  s
    [new Stats(6, 4, 4, 3, 3, 1, 1, 6, 5, [1,1])],
    ['lasgun', 'frag grenades'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    25
    ),
    new Model('ig sergeant',
    [new Stats(6, 4, 4, 3, 3, 1, 1, 7, 5, [1,1])],
    ['laspistol', 'chainsword'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    25
  ),
  new Model('flamer guardsman',
  //           m  ws bs s t   w  a  l  s
    [new Stats(6, 4, 4, 3, 3, 1, 1, 6, 5, [1,1])],
    ['flamer'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    25
    ),
  new Model('Lemann Russ BT',
    //           m  ws bs s t   w  a  l  s
    [new Stats(10, 6, 4, 7, 8, 12, 3,  7,   3,    [7,12]),
    new Stats (7,  6, 5, 3, 7, 8, 12, 'd3', 7, 3, [6,4]),
    new Stats (4,  6, 6, 3, 7, 8, 12,  1,   7, 3, [1,3])],
    ['battle cannon', 'heavy bolter'],
    '',
    {inField: false, x: null, y: null},
    'square',
    [78,120,0] // w h angle
    ),
];
