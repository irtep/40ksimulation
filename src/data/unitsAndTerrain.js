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
   `BASE	Small\n
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
\n
Feat: Shadowfall\n
Friendly Faction models/units currently in Agathia's control range are affected by Ghost Walk (refer to her spells).
While in Agathia's control range, friendly Faction models gain Stealth.
When a model in Agathia's battlegroup ends its activation in her control range, you can immediately place that model anywhere completely within 3" of its location.
Shadowfall lasts for one round.\n
Abilities\n
Undead\n
Apparition - During your Control Phase, place this model anywhere completely within 2" of its current location.\n
Death Shroud - While within this model's command range, enemy models suffer -2 STR.\n
Ghostly - This model can advance through terrain and obstacles without penalty and can advance through obstructions if it has enough movement to move completely past them. It cannot be targeted by free strikes.\n
Henchmen [ Small-based Bane ] - Choose one friendly Small-based Bane unit at the beginning of the game to be Henchmen. The chosen unit gains +2 DEF and MAT and Apparition.\n
Irregulars [ Bane Knights ] - Bane Knights can be included in any army that also contains this model.\n
Soul Taker: Cull Soul - This model can gain soul tokens. When a living enemy model is destroyed within 2" of this model, this model gains the destroyed model's soul token. After this model replenishes its focus during your next Control Phase, replace each soul token with 1 focus point.\n
Weapons\n
Death Kiss - 2" reach, P+S 12 melee weapon\n
Magical dam symbol.jpg Damage Type: Magical\n
Spells\n
COST	RNG	AOE	POW	DUR	OFF\n
Ghost Walk\n
2	6	-	-	Turn	No\n
Target friendly Faction model/unit gains Ghostly for one turn.\n
Ghostly - This model can advance through terrain and obstacles without penalty and can advance through obstructions if it has enough movement to move completely past them. It cannot be targeted by free strikes.\n
Hellfire
3	10	-	14	-	Yes
Models disabled by Hellfire cannot make a Tough roll. Models boxed by Hellfire are removed from play.\n
Hellwrought
2	6	-	-	Upkeep	No
Target warjack in the spellcaster's battlegroup gains +2 ARM and Retaliation.
Retaliation - If a model with Retaliation was damaged by an enemy attack during the last round, during your Maintenance Phase it can advance up to 3" and make one basic melee attack.\n
Parasite
3	8	-	-	Upkeep	Yes
Target model/unit suffers -3 ARM and the spellcaster gains +1 ARM.\n
Vanish
1	SELF	-	-	-	No
Place the spellcaster anywhere completely within 3" of its current location. Vanish can only be cast once per activation.\n`,
   {inField: false, x: null, y: null},
   16,
   'circle',
   30,
   'cryx'
 ),
new Model('slayer',
 `BASE	Large\n
SPD	6\n
STR	10\n
MAT	7\n
DEF	13\n
ARM	17\n
HP	28\n
FA	U\n
COST	10\n
Warjack \n
Abilities\n
Construct\n
Weapons\n
Death Claw (x2)\n
 RNG 	 POW 	 P+S 	 LOCATION 	\n
1	6	16	1 each side	\n
Open Fist\n
Combo Strike (★ Attack) - Make a melee attack. Instead of making a normal damage roll, the POW of the damage roll is equal to this model's STR plus twice the POW of this weapon. (Giving a total P+S = 22)\n
Tusks\n
RNG 	 POW 	 P+S 	 LOCATION 	\n
1	2	12	Head	\n
Hard Head - This model can add this weapon's POW to its head-butt and slam power attack damage rolls.\n`,
 {inField: false, x: null, y: null},
 28,  // hp
 'circle',
 50,
 'cryx'
),
new Model('asphyxious1',
`BASE	Medium\n
SPD	5\n
STR	7\n
MAT	6\n
DEF	15\n
ARM	16\n
FOCUS	7\n
HP	18\n
WJP	+28\n
Warcaster \n
<br/>Feat: Consuming Blight\n
Enemy models currently in Asphyxious' control range suffer an unboostable POW 5 damage roll. Consuming Blight damage rolls are simultaneous.\n
Asphyxious then gains up to 7 focus points. He cannot have more focus points than his current FOCUS as a result of Consuming Blight.\n
Abilities\n
Undead\n
Soul Taker: Cull Soul - This model can gain soul tokens. When a living enemy model is destroyed within 2" of this model, this model gains the destroyed model's soul token. After this model replenishes its focus during your next Control Phase, replace each soul token with 1 focus point.\n
Weapons\n
Soulsplitter - 2" reach, P+S 15 melee weapon.\n
Magical dam symbol.jpg Damage Type: Magical\n
Sustained Attack - During this model's activation, when it makes an attack with this weapon against the last model hit by the weapon this activation, the attack automatically hits.\n
Spells\n
COST	RNG	AOE	POW	DUR	OFF	\n
Breath of Corruption
3	8	3	12 (Corrosion)	Round	Yes
Models hit suffer a POW 12 corrosion damage roll. The AOE is a cloud and a hazard which stays in play for one round, and does 1 point of corrosion damage to models entering or ending their activations in it.\n
Hellfire
3	10	-	14	-	Yes
Models disabled by Hellfire cannot make a Tough roll. Models boxed by Hellfire are removed from play.\n
Parasite
3	8	-	-	Upkeep	Yes
Target model/unit suffers -3 ARM and the spellcaster gains +1 ARM.\n
Scything Touch
2	6	-	-	Upkeep	No
Target friendly Faction model gains Dark Shroud.\n
Dark Shroud - While in this model's melee range, enemy models suffer -2 ARM.\n
Spectral Leech
2	10	-	-	-	Yes
Remove d3 focus or fury points from the target model hit by Spectral Leech.\n
Teleport
2	SELF	-	-	-	No
Place the spellcaster anywhere completely within 6" of its current location, then its activation ends.\n`,
{inField: false, x: null, y: null},
18,
'circle',
40,
'cryx'
),
new Model('reaper',
`BASE	Large\n
SPD	6\n
STR	10\n
MAT	7\n
RAT	5\n
DEF	13\n
ARM	17\n
HP	28\n
FA	U\n
COST	13\n
Warjack \n
Abilities\n
Construct\n
Weapons\n
Harpoon - 8" range, POW 12 ranged attack\n
Drag - When this weapon damages an enemy model with an equal or smaller base, immediately after the attack is resolved the damaged model can be pushed directly toward this model until it contacts a model, an obstacle, or an obstruction. After the damaged model is moved, this model can make one basic melee attack against the damaged model. After resolving this melee attack, this model can make additional melee attacks during its Combat Action.\n
Tusks - 1" reach, POW 2, P+S 12 melee attack\n
Hard Head - This model can add this weapon's POW to its head-butt and slam power attack damage rolls.\n
Helldriver - 2" reach, POW 6, P+S 16 melee attack\n
Sustained Attack - During this model's activation, when it makes an attack with this weapon against the last model hit by the weapon this activation, the attack automatically hits.\n`,
{inField: false, x: null, y: null},
28,  // hp
'circle',
50,
'cryx'
),
new Model('deathripper',
`BASE	Medium\n
SPD	7\n
STR	7\n
MAT	5\n
DEF	14\n
ARM	14\n
HP	20\n
FA	U\n
COST	6\n
Warjack \n
Abilities\n
Construct\n
Arc node\n
Weapons\n
Mandible - 0.5" reach, P+S 12 melee weapon.\n
Sustained Attack - During this model's activation, when it makes an attack with this weapon against the last model hit by the weapon this activation, the attack automatically hits.\n`,
{inField: false, x: null, y: null},
20,  // hp
'circle',
40,
'cryx'
),
new Model('bane rider',
`BASE	Large\n
SPD	7\n
STR	7\n
MAT	7\n
DEF	12\n
ARM	18\n
CMD	8\n
HP	5 each\n
FA	2\n
UNIT SIZE	3 or 5\n
COST	12 or 20\n
4 pts each\n
Undead \n
Cavalry\n
Ghostly - This model can advance through terrain and obstacles without penalty and can advance through obstructions if it has enough movement to move completely past them. It cannot be targeted by free strikes.\n
Reposition [3"] - At the end of an activation in which it did not run or fail a charge, this model can advance up to 3", then its activation ends.\n
Vengeance - During your Maintenance Phase, if one or more models in a unit with Vengeance were damaged by enemy attacks during the last round, each model in the unit can advance 3" and make one basic melee attack.\n
Weapons\n
Bane Blade\n
RNG 	 POW 	 P+S\n
2	6	13	\n
Brutal Charge - This model gains +2 to charge attack damage rolls with this weapon.\n
Mount\n
RNG 	 POW\n
0.5	12	`,
{inField: false, x: null, y: null},
5,  // hp
'circle',
50,
'cryx'
),
new Model('bane warrior',
`BASE	Small\n
SPD	5\n
STR	7\n
MAT	6 / 7\n
DEF	12\n
ARM	15\n
CMD	7\n
HP	1 / 5\n
FA	3\n
UNIT SIZE	6 or 10 +2 CA\n
COST	10 or 16 +5 CA\n
1.8 pts each\n
Undead \n
Ghostly - This model can advance through terrain and obstacles without penalty and can advance through obstructions if it has enough movement to move completely past them. It cannot be targeted by free strikes.\n
War Axe - 1" reach & 11 P+S, but its abilities make up for that.\n
Weapon Master\n
Dark Shroud - While in this model's melee range, enemy models suffer -2 ARM.	`,
{inField: false, x: null, y: null},
1,  // hp
'circle',
30,
'cryx'
),
new Model('tartarus',
`BASE	Medium\n
SPD	5\n
STR	7\n
MAT	8\n
DEF	12\n
ARM	17\n
CMD	9\n
HP	8\n
FA	C\n
COST	6\n
Stealth\n
Undead\n
Dark Shroud - While in this model's melee range, enemy models suffer -2 ARM.\n
Veteran Leader [ Bane ] - While in this model's command range, other friendly Bane models gain +1 to attack rolls.\n
Ghostly - This model can advance through terrain and obstacles without penalty and can advance through obstructions if it has enough movement to move completely past them. It cannot be targeted by free strikes.\n
Rapid Strike - This model can make one additional melee attack each Combat Action.\n
Weapons\n
Rivener - 2" reach, P+S 12 melee weapon\n
Weapon Master\n
Death Toll [Small-based Bane] - When this weapon boxes a living enemy warrior model during this model's Combat Action, RFP that model and add to play one Grunt to a friendly small-based Bane unit in this model's command range. Place the Grunt in formation and in this model's command range. The Grunt must forfeit its Combat Action the turn it is put into play.	`,
{inField: false, x: null, y: null},
8,  // hp
'circle',
40,
'cryx'
),
new Model('rorsh',
`BASE	Small\n
SPD	6\n
STR	\n
MAT	7\n
RAT	5\n
DEF	13\n
ARM	16\n
FURY	3\n
HP	8\n
FA	C\n
COST	15\n
Abilities\n
Lesser Warlock - 1) This model is not a warlock but has the following warlock special rules: Battlegroup Commander, Fury Manipulation, Healing, Spellcaster, and Transferring Damage. 2) This model must have at least one warbeast in its battlegroup at the start of the game.
Farrow Warlock - This model can only have Farrow warbeasts in its battlegroup.\n
Tough\n
Diversionary Tactic (★ Action) - Center a 4" AOE on Rorsh. Models in the AOE other than Rorsh and Brine suffer a POW 6 blast damage roll. After these damage rolls are resolved, Rorsh can make a full advance. If Brine was in the AOE, he can make a full advance as well. Rorsh and Brine cannot be targeted by free strikes during this movement.\n
Feign Death - This model cannot be targeted by ranged or magic attacks while knocked down.\n
Souie (★ Action) - If Brine is currently in this model's control range, Brine can immediately make a full advance toward this model.\n
Weapons\n
Dynomite - 6" range, 4" AOE, POW 12 ranged weapon.\n
Lever Action Pig Iron - 10" range, ROF 2, POW 12 ranged weapon.\n
Cleaver - 0.5" reach, P+S 11 melee weapon.\n
Spells\n
COST	RNG	AOE	POW	DUR	OFF	\n
Pigpen\n
2	SELF	(★)	-	Upkeep	No	\n
While within 3" of the spellcaster, enemy models treat open terrain as rough terrain.	`,
{inField: false, x: null, y: null},
8,  // hp
'circle',
30,
'mercenary'
),
new Model('brine',
`BASE	Large\n
SPD	5\n
STR	\n
MAT	6\n
DEF	12\n
ARM	17\n
FURY	4\n
THRS	8\n
HP	26\n
Abilities\n
Warbeast \n
Bacon - When this model is destroyed, each living warbeast B2B can remove d3 damage points.\n
Companion [ Rorsh ] - This model is included in any army that includes Rorsh. If Rorsh is destroyed or removed from play, remove this model from play. This model is part of Rorsh's battlegroup.\n
Extended Control Range - When checking to see if this model is in its controller's control range, double the range.\n
Pain Response - While damaged, this model can charge and make power attacks without being forced.\n
Retaliatory Strike - If this model is hit by a melee attack made by an enemy model during your opponent's turn, after that attack is resolved this model can immediately make one basic melee attack against that model. This model can make only one Retaliatory Strike per turn.\n
Weapons\n
Claw (x2) - 1" reach, P+S 14 melee weapons.\n
Open Fist symbol.jpg Open Fist\n
Gore - 1" reach, P+S 15 tusks.\n
Critical Knockdown - On a critical hit, the model hit becomes knocked down.\n
Hard Head - This model can add this weapon's POW to its head-butt and slam power attack damage rolls.\n
Animus\n
COST	RNG	AOE	POW	DUR	OFF	\n
Pig Farm\n
1	SELF	-	-	Turn	No	\n
The spellcaster gains an extra dice on melee damage rolls against living models and Snacking. Pig Farm lasts for one turn.\n
Snacking - When this model boxes a living model with a melee attack, it can choose to RFP the boxed model. When it does, this model can remove d3 damage points.	`,
{inField: false, x: null, y: null},
26,  // hp
'circle',
50,
'mercenary'
),
new Model('desercrator',
`BASE	Large\n
SPD	5\n
STR	12\n
MAT	6\n
RAT	5\n
DEF	12\n
ARM	18\n
HP	30\n
FA	U\n
COST	14\n
Abilities\n
Construct\n
Steady - This model cannot become knocked down.\n
Amphibious\n
Accumulator [Bane] - When it begins its activation within 3" of one or more other friendly Bane models, this model gains 1 focus point.\n
Pathfinder\n
Weapons\n
Vivisector - 1" reach, POW 5, P+S 17 melee attack\n
Critical Shred - On a critical hit with this weapon during this model's Combat Action, after the attack is resolved this model can make one additional attack with this weapon against the model hit.\n
Grievous Wounds - A model hit by this weapon loses Tough and cannot have damage removed from it for one round.\n
Plague Bringer - 12" range, 4" AOE, POW 14 ranged attack\n
Void Field – This attack’s AOE is a hazard that remains in play for one round. Non-undead models entering or ending their activations in the AOE suffer 1 point of corrosion damage.\n
Corrosion dam symbol.jpg Damage Type: Corrosion	`,
{inField: false, x: null, y: null},
30,  // hp
'circle',
50,
'cryx'
),
new Model('pistol wraith',
`BASE	Small\n
SPD	6\n
STR	4\n
RAT	7\n
DEF	14\n
ARM	12\n
HP	5\n
FA	2\n
COST	5\n
Abilities\n
Undead\n
Incorporeal\n
Gunfighter\n
Soul Taker: Body Count - This model can gain soul tokens. When this model destroys a living enemy model with an attack, this model gains the destroyed model's soul token. This model can have up to three soul tokens at any time. This model can spend soul tokens for the following:\n
Strength of Death - During its Combat Action, this model can spend soul tokens to boost one attack or damage roll for each token spent.\n
Weapons\n
Wraithlock Pistol (x2) - 10" range, POW 12 ranged attacks\n
Magical dam symbol.jpg Damage Type: Magical\n
Chain Attack: Death Chill - If this model hits the same model with both its initial attacks with this weapon, the model hit becomes stationary for one round.	`,
{inField: false, x: null, y: null},
5,  // hp
'circle',
30,
'cryx'
),
new Model('necrotech',
`BASE	Medium\n
SPD	5\n
STR	6\n
MAT	6\n
DEF	12\n
ARM	13\n
CMD	7\n
HP	5\n
FA	3\n
COST	2\n
Abilities\n
Undead\n
Create Scrap Thrall (★ Action) - When this model uses this ability remove one or more scrap tokens from this model, then roll a d3 for each scrap token removed. Add to play up to that number of Scrap Thrall placed completely within 3" of this model. A placed Scrap Thrall must forfeit its Combat Action the turn it is put into play.\n
Repair [d6] (★ Action) - RNG B2B. Target friendly Faction construct model. If the model is in range, remove d6 damage points from it.\n
Spare Parts - When a warjack is destroyed in this model's command range, it gains one scrap token. This model can have up to three scrap tokens at any time. Before making a repair roll, this model can spend one scrap token to add +2 to its roll.\n
Steady - This model cannot become knocked down.\n
Weapons\n
Vice Claw - 2" reach, P+S 10 melee weapon\n	`,
{inField: false, x: null, y: null},
5,  // hp
'circle',
40,
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
