import { Model, Stats } from './classes.js';
//
// constructor(name, statLine, weapons, rules, location, baseForm, baseSize)
// constructor(name, desc, location, wounds, baseForm, baseSize)
export const models = [
  // imperial guard units
   new Model('guardsmen',
    `6'', 4+, 4+, 3/3, w1, a1, ld 6, 5+\n
    sgt: +1ld +1a\n
    lasguns,grenades,
    sgt: pistol,sword`,
    {inField: false, x: null, y: null},
    10,
    'circle',
    35,
    'imperial guard'
    ),
    new Model('missile guardsmen',
     `6'', 4+, 4+, 3/3, w1, a1, ld 6, 5+\n
     sgt: +1ld +1a\n
     lasguns,grenades,
     sgt: pistol,sword`,
     {inField: false, x: null, y: null},
     10,
     'circle',
     35,
     'imperial guard'
     ),
    new Model('pltn commander',
     `6'', 3+, 3+, 3/3, w3, a3, ld 7, 5+\n
     5++ invu, orders\n
     pistol,sword`,
     {inField: false, x: null, y: null},
     3,
     'circle',
     25,
     'imperial guard'
     ),
    new Model('armoured sentinel',
     `8'', 4+, 4+, 5/6, w6, a1, ld 7, 3+\n
     heavy flamer/multilaser`,
     {inField: false, x: null, y: null},
     6,
     'circle',
     60,
     'imperial guard'
     ),
    new Model('contemptor dreadnought',
     `8'', 3+, 3+, 7/7, w9, a4, ld 8, 3+\n
     khreres: 24 h6 7 -1 1\n
     fist: m 2x -3 3\n
     5++ invu\n
     each damage: reduce 1, min 1\n
     explo 6, 3'', 1, hatefull`,
     {inField: false, x: null, y: null},
     9,
     'circle',
     60,
     'black legion'
     ),
    new Model('leviathan dreadnought',
     `8+: 8'', 3+, 3+, 7/7, w14, a4, ld 8, 2+\n
      4-7: 6'', 4+, 4+, 7/7, x, a4, ld 8, 2+\n
      1-3: 4'', 5+, 5+, 7/7, x, a4, ld 8, 2+\n
     2x cannon: 36 h8 7 -1 2\n
     2x heavy flamer: 12'' d6 5 -1 1 autohit\n
     5++ invu\n
     each damage: reduce 1, min 1\n
     explo 6, 6'', d3`,
     {inField: false, x: null, y: null},
     14,
     'circle',
     60,
     'black legion'
     ),
    new Model('helbrute',
     `8'', 3+, 3+, 6/7, w8, a4, ld 8, 3+\n
     fist: m 2x -3 3\n
     crazy, if is hit, 6 hits back closest\n
     explo 6, 3'', d3, hatefull`,
     {inField: false, x: null, y: null},
     8,
     'circle',
     60,
     'black legion'
     ),
    new Model('dreadclaw drop pod',
     `12'', 4+, -, 6/6, w9, a4, ld 8, 3+\n
     blades: m 2x -4 3\n
     jets: if over passes 1=nothing, 2-5= d3 mortals, 6= d6 mortals\n
     explo 6, 6'', 1`,
     {inField: false, x: null, y: null},
     9,
     'circle',
     60,
     'black legion'
     ),
    new Model('berserkers',
     `6'', 3+, 3+, 5/4, w1, a2, ld 7, 3+\n
     champ: +1 attack, +1 ld.
     melees twice\n
     death to false emperor,
     hatefull`,
     {inField: false, x: null, y: null},
     10,
     'circle',
     35,
     'black legion'
     ),
    new Model('sorcerer',
     `6'', 3+, 3+, 4/4, w4, a3, ld 9, 3+\n
     2 spells, 1 deny.
     force stave: +3 -1 d3\n
     death to false emperor
     hatefull`,
     {inField: false, x: null, y: null},
     4,
     'circle',
     32,
     'black legion'
     ),
    new Model('warpsmith',
     `6'', 3+, 3+, 4/4, w4, a3, ld 9, 3+\n
     flamer, melta.
     can heal 1 of vehicle, range 1'' or 1 mortal to 18'' on 2+\n
     death to false emperor
     hatefull`,
     {inField: false, x: null, y: null},
     4,
     'circle',
     32,
     'black legion'
     ),
    new Model('noise marines',
     `6'', 3+, 3+, 4/4, w1, a2, ld 7, 3+\n
     champ: +1 attack, +1 ld.
     if model dies, shoots\n
     sonic blaster: 24'' assault 3 401, no covers\n
     death to false emperor,
     hatefull`,
     {inField: false, x: null, y: null},
     10,
     'circle',
     35,
     'black legion'
     ),
    new Model('chaos space marines',
     `6'', 3+, 3+, 4/4, w1, a1, ld 7, 3+\n
     champ: +1 attack, +1 ld.\n
     death to false emperor,
     hatefull`,
     {inField: false, x: null, y: null},
     10,
     'circle',
     35,
     'black legion'
     ),
  new Model('Leman Russ',
   `7+: 10'', 6+, 4+, 7/8, 12, 3, 7, 3+\n
    4-6: 7'', 6+, 5+, 7/8, x, d3, 7, 3+\n
    1-3: 4'', 6+, 6+, 7/8, x, 1, 7, 3+\n
   2x turret to same target if moved 1/2 max\n
   bc: 72'' d6 8 -2 d3 blast\n
   demo: 24'' d6 10 -3 d6, blast\n
   explo 6, 6'', d3,
   smokes`,
   {inField: false, x: null, y: null},
   12,
   'square',
   [78,120,0],
   'imperial guard'
   ),
new Model('Lightning',
 `7+: 10'', 6+, 3+, 7/7, 14, 3, 7, 3+\n
  4-6: 7'', 6+, 4+, 7/7, x, d3, 7, 3+\n
  1-3: 4'', 6+, 5+, 7/7, x, 1, 7, 3+\n
 aircraft, hard to hit, supersonic\n
 2x lasc, 1 long autoc, 4x hellstrikes\n
 long autoc: 72'' h2 7 -1 d3\n
 hellstrikes: 72'' h1 8 -2 d6, two dices, better\n
 explo 6, 6'', d3`,
 {inField: false, x: null, y: null},
 14,
 'square',
 [78,120,0],
 'imperial guard'
 ),
new Model('predator',
 `6+: 12'', 6+, 3+, 6/7, 11, 3, 8, 3+\n
  3-5: 6'', 6+, 4+, 6/7, x, d3, 8, 3+\n
  1-2: 3'', 6+, 5+, 6/7, x, 1, 8, 3+\n
 explo 6, 6'', d3, hatefull`,
 {inField: false, x: null, y: null},
 11,
 'square',
 [78,120,0],
 'black legion'
 ),
    new Model('vindicator',
     `6+: 10'', 6+, 3+, 6/8, 11, 3, 8, 3+\n
      3-5: 5'', 6+, 4+, 6/8, x, d3, 8, 3+\n
      1-2: 3'', 6+, 5+, 6/8, x, 1, 8, 3+\n
      explo 6, 6'' d3
      smokes, hatefull`,
     {inField: false, x: null, y: null},
     11,
     'square',
     [78,120,0],
     'black legion'
     ),
    new Model('terrax',
     `8+: 8'', 4+, 3+, 7/8, 14, 3, 8, 3+\n
      4-7: 5'', 4+, 4+, 7/8, x, d3, 8, 3+\n
      1-3: 3'', 4+, 5+, 7/8, x, 1, 8, 3+\n
      drill: x2, -4 d3+3, vs. vehicle: d3+6\n
      meltas: 12'' h5 8 -4 d6 if 1/2 +2damage\n
      explo 66d3, hatefull`,
     {inField: false, x: null, y: null},
     14,
     'square',
     [78,120,0],
     'black legion'
     ),
  new Model('baneblade',
   `14+: 10'', 6+, 4+, 9/8, 26, 9, 7, 3+\n
    7-13: 7'', 6+, 5+, 9/8, x, 6, 7, 3+\n
    1-6: 4'', 6+, 6+, 9/8, x, 3, 7, 3+\n
   bbc: 72'' 3d6 9 -3 3 blast\n
   demo: 24'' d6 10 -3 d6, blast\n\n
   smokes, explo 6+,2d6,d6`,
   {inField: false, x: null, y: null},
   26,
   'square',
   [100,160,0],
   'imperial guard'
   ),
  new Model('chimera',
   `6+: 12'', 6+, 4+, 6/7, 10, 3, 7, 3+\n
    3-5: 8'', 6+, 5+, 6/7, x, d3, 7, 3+\n
    1-3: 4'', 6+, 6+, 6/7, x, 1, 7, 3+\n
    lasguns: r3 301, only if transporting\n
    multilasgun h3 601\n
    explo 66d3, hatefull`,
   {inField: false, x: null, y: null},
   10,
   'square',
   [78,120,0],
   'imperial guard'
   ),
  new Model('tank commander',
   `7+: 10'', 6+, 3+, 7/8, 12, 3, 7, 3+\n
    4-6: 7'', 6+, 4+, 7/8, x, d3, 7, 3+\n
    1-3: 4'', 6+, 5+, 7/8, x, 1, 7, 3+\n
   2x turret to same target if moved 1/2 max\n
   bc: 72'' d6 8 -2 d3 blast\n
   demo: 24'' d6 10 -3 d6, blast\n
   explo 6, 6'', d3\n
   orders\n
   smokes`,
   {inField: false, x: null, y: null},
   12,
   'square',
   [78,120,0],
   'imperial guard'
   ),
  new Model('land raider',
   `9+: 10'', 6+, 3+, 8/8, 16, 6, 9, 2+\n
    5-8: 5'', 6+, 4+, 8/8, x, d6, 9, 2+\n
    1-4: 3'', 6+, 5+, 8/8, x, 1, 9, 2+\n
   smokes, hatefull\n
   smokes, explo 6+,6,d3`,
   {inField: false, x: null, y: null},
   16,
   'square',
   [80,140,0],
   'black legion'
   ),
   // CRYX UNITS
  new Model('malefica',
   `BASE	Small<br/>
SPD	6\n
STR	6\n
MAT	7\n
DEF	15<br/>
ARM	15\n
CMD	9\n
FOCUS	7\n
HP	16\n
WJP	+29\n
Warcaster - All warcasters come with a stack of standard special rules - most notably being awesome. Click here for a newbie-friendly recap, or click here for the full rules.
<br/>
Feat: Shadowfall
Friendly Faction models/units currently in Agathia's control range are affected by Ghost Walk (refer to her spells).
While in Agathia's control range, friendly Faction models gain Stealth.
When a model in Agathia's battlegroup ends its activation in her control range, you can immediately place that model anywhere completely within 3" of its location.
Shadowfall lasts for one round.
Abilities
Undead symbol.jpg Undead
Apparition - During your Control Phase, place this model anywhere completely within 2" of its current location.
Death Shroud - While within this model's command range, enemy models suffer -2 STR.
Ghostly - This model can advance through terrain and obstacles without penalty and can advance through obstructions if it has enough movement to move completely past them. It cannot be targeted by free strikes.
Henchmen [ Small-based Bane ] - Choose one friendly Small-based Bane unit at the beginning of the game to be Henchmen. The chosen unit gains +2 DEF and MAT and Apparition.
Irregulars [ Bane Knights ] - Bane Knights can be included in any army that also contains this model.
Soul Taker: Cull Soul - This model can gain soul tokens. When a living enemy model is destroyed within 2" of this model, this model gains the destroyed model's soul token. After this model replenishes its focus during your next Control Phase, replace each soul token with 1 focus point.
Weapons
Death Kiss - 2" reach, P+S 12 melee weapon
Magical dam symbol.jpg Damage Type: Magical
Spells
COST	RNG	AOE	POW	DUR	OFF
Ghost Walk
2	6	-	-	Turn	No
Target friendly Faction model/unit gains Ghostly for one turn.
Ghostly - This model can advance through terrain and obstacles without penalty and can advance through obstructions if it has enough movement to move completely past them. It cannot be targeted by free strikes.
Hellfire
3	10	-	14	-	Yes
Models disabled by Hellfire cannot make a Tough roll. Models boxed by Hellfire are removed from play.
Hellwrought
2	6	-	-	Upkeep	No
Target warjack in the spellcaster's battlegroup gains +2 ARM and Retaliation.
Retaliation - If a model with Retaliation was damaged by an enemy attack during the last round, during your Maintenance Phase it can advance up to 3" and make one basic melee attack.
Parasite
3	8	-	-	Upkeep	Yes
Target model/unit suffers -3 ARM and the spellcaster gains +1 ARM.
Vanish
1	SELF	-	-	-	No
Place the spellcaster anywhere completely within 3" of its current location. Vanish can only be cast once per activation.`,
   {inField: false, x: null, y: null},
   10,
   'circle',
   35,
   'cryx'
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
