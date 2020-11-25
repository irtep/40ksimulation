import { Model, Stats } from './classes.js';
//
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
    new Model('pltn. commander',
    [new Stats(6, 4, 4, 3, 3, 3, 1, 7, 5, [1,1])],
    ['laspistol', 'chainsword'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    25
    ),
    new Model('armouder sentinel',
    [new Stats(6, 4, 4, 3, 3, 6, 1, 7, 5, [1,1])],
    ['laspistol', 'chainsword'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    60
    ),
    new Model('contemptor dreadnought',
    [new Stats(6, 4, 4, 3, 3, 9, 1, 7, 5, [1,1])],
    ['laspistol', 'chainsword'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    60
    ),
    new Model('leviathan dreadnought',
    [new Stats(6, 4, 4, 3, 3, 14, 1, 7, 5, [1,1])],
    ['laspistol', 'chainsword'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    80
    ),
    new Model('helbrute',
    [new Stats(6, 4, 4, 3, 3, 8, 1, 7, 5, [1,1])],
    ['laspistol', 'chainsword'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    60
    ),
    new Model('dreadclaw',
    [new Stats(6, 4, 4, 3, 3, 9, 1, 7, 5, [1,1])],
    ['laspistol', 'chainsword'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    90
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
    new Model('berserker',
    //           m  ws bs s t   w  a  l  s
    [new Stats(6, 4, 4, 3, 3, 9, 1, 6, 5, [1,1])],
    ['flamer'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    32
    ),
    new Model('bererker champ',
    //           m  ws bs s t   w  a  l  s
    [new Stats(6, 4, 4, 3, 3, 1, 1, 6, 5, [1,1])],
    ['flamer'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    32
    ),
    new Model('sorcerer',
      //           m  ws bs s t   w  a  l  s
    [new Stats(6, 4, 4, 3, 3, 4, 1, 6, 5, [1,1])],
    ['flamer'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    32
    ),
    new Model('warpsmith',
    //           m  ws bs s t   w  a  l  s
    [new Stats(6, 4, 4, 3, 3, 4, 1, 6, 5, [1,1])],
    ['flamer'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    32
    ),
    new Model('noise marine',
    //           m  ws bs s t   w  a  l  s
    [new Stats(6, 4, 4, 3, 3, 10, 1, 6, 5, [1,1])],
    ['flamer'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    32
    ),
    new Model('space marine',
    //           m  ws bs s t   w  a  l  s
    [new Stats(6, 4, 4, 3, 3, 6, 1, 6, 5, [1,1])],
    ['flamer'],
    '',
    {inField: false, x: null, y: null},
    'circle',
    32
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
    new Model('vindicator',
    //           m  ws bs s t   w  a  l  s
    [new Stats(10, 6, 4, 7, 8, 11, 3,  7,   3,    [7,12]),
    new Stats (7,  6, 5, 3, 7, 8, 12, 'd3', 7, 3, [6,4]),
    new Stats (4,  6, 6, 3, 7, 8, 12,  1,   7, 3, [1,3])],
    ['battle cannon', 'heavy bolter'],
    '',
    {inField: false, x: null, y: null},
    'square',
    [78,120,0] // w h angle
    ),
    new Model('rhino',
    //           m  ws bs s t   w  a  l  s
    [new Stats(10, 6, 4, 7, 8, 10, 3,  7,   3,    [7,12]),
    new Stats (7,  6, 5, 3, 7, 8, 12, 'd3', 7, 3, [6,4]),
    new Stats (4,  6, 6, 3, 7, 8, 12,  1,   7, 3, [1,3])],
    ['battle cannon', 'heavy bolter'],
    '',
    {inField: false, x: null, y: null},
    'square',
    [78,120,0] // w h angle
    ),
    new Model('terrax',
    //           m  ws bs s t   w  a  l  s
    [new Stats(10, 6, 4, 7, 8, 14, 3,  7,   3,    [7,12]),
    new Stats (7,  6, 5, 3, 7, 8, 12, 'd3', 7, 3, [6,4]),
    new Stats (4,  6, 6, 3, 7, 8, 12,  1,   7, 3, [1,3])],
    ['battle cannon', 'heavy bolter'],
    '',
    {inField: false, x: null, y: null},
    'square',
    [78,120,0] // w h angle
    ),
  new Model('Baneblade',
    //           m  ws bs s t   w  a  l  s
    [new Stats(10, 6, 4, 7, 8, 26, 3,  7,   3,    [7,12]),
    new Stats (7,  6, 5, 3, 7, 8, 12, 'd3', 7, 3, [6,4]),
    new Stats (4,  6, 6, 3, 7, 8, 12,  1,   7, 3, [1,3])],
    ['battle cannon', 'heavy bolter'],
    '',
    {inField: false, x: null, y: null},
    'square',
    [178,220,0] // w h angle
  ),
  new Model('Chimera',
  //           m  ws bs s t   w  a  l  s
  [new Stats(10, 6, 4, 7, 8, 10, 3,  7,   3,    [7,12]),
  new Stats (7,  6, 5, 3, 7, 8, 12, 'd3', 7, 3, [6,4]),
  new Stats (4,  6, 6, 3, 7, 8, 12,  1,   7, 3, [1,3])],
  ['battle cannon', 'heavy bolter'],
  '',
  {inField: false, x: null, y: null},
  'square',
  [78,120,0] // w h angle
),
  new Model('Tank Commander BT',
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
  new Model('Tank Commander Demo',
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
export const terrain = [
  {w: 166, h: 40, x: 140, y: 150},
  {w: 146, h: 70, x: 340, y: 30},
  {w: 188, h: 30, x: 540, y: 150},
  {w: 106, h: 20, x: 150, y: 350},
  {w: 96, h: 80, x: 340, y: 450},
  {w: 78, h: 90, x: 240, y: 350}
];
