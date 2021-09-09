import { Model} from './classes.js';
//
// constructor(name, statLine, weapons, rules, location, baseForm, baseSize)
// constructor(name, desc, location, wounds, baseForm, baseSize)
export const models = [
  // tau,,
   new Model('cadre fireblade',
    `\nStable Platform	Marker Drones do not suffer the penalty for moving and firing Heavy weapons.	Codex: T'au Empire p109
\nVolley Fire	Models in <SEPT> units within 6" of any friendly <SEPT> Cadre Fireblades may fire an extra shot with pulse pistols, pulse carbines and pulse rifles when shooting at a target within half the weapon's range.	Codex: T'au Empire p96
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nCadre Fireblade	6"	3+	2+	3	3	5	3	8	4+	Codex: T'au Empire p96
\nMV7 Marker Drone	8"	5+	5+	3	4	1	1	6	4+	Codex: T'au Empire p109
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nMarkerlight	36"	Heavy 1	-	-	-	See Markerlights (rule).	Codex: T'au Empire p121
\nPhoton grenade	12"	Grenade D6	-	-		Blast. This weapon does not inflict any damage. Your opponent must subtract 1 from any hit rolls made for INFANTRY units that have suffered any hits from photon grenades until the end of the turn.	Codex: T'au Empire p121
\nPulse rifle	30"	Rapid Fire 1	5	0	1	-	Codex: T'au Empire `,
    {inField: false, x: null, y: null},
    2,
    'circle',
    35,
    'tau'
    ),
new Model('devilfish',
`detach	Both Gun Drones can detach at the start of your Movement phase by disembarking as if from a transport. From that point onwards, they are treated as a separate unit. They cannot reattach during the battle.	Codex: T'au Empire pvar
\nExplodes (6/6"/D3)	If this model is reduced to 0 wounds, roll a D6 before removing it from the battlefield. On a 6 it explodes, and each unit within 6" suffers D3 mortal wounds.	Imperial Armour: Compendium p210
\nHover Tank	Instead of measuring distances to and from this model's base, measure to and from this model's hull or base (whichever is closer).	Codex: T'au Empire pvar
\nThreat Identification Protocols	In the Shooting phase, Gun Drones can only target the nearest visible enemy unit. If two units are equally close, you may choose which is targeted.	Codex: T'au Empire p97,108,109,112-114
\nTurret Mounting	Units attacked by a Devilfish with an MB3 Recon Drone embarked within it do not gain any bonus to their saving throws for being in cover.	Codex: T'au Empire p114
\nTransport	Capacity	Ref
\nTY7 Devilfish (Transport)	A Devilfish can transport up to 12 <SEPT> INFANTRY or DRONE models. It cannot transport BATTLESUITS. It can transport only a single MB3 Recon Drone, but it does not count towards the total number of models embarked on the Devilfish.	Codex: T'au Empire p114
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nMV1 Gun Drone	8"	5+	5+	3	4	1	1	6	4+	Codex: T'au Empire p97,108,109,112-114
\nTY7 Devilfish [1] (7-12+ Wounds Remaining)	12"	6+	4+	6	7	12	3	8	3+	Codex: T'au Empire p114
\nTY7 Devilfish [2] (4-6 Wounds Remaining)	6"	6+	5+	6	7	N/A	D3	8	3+	Codex: T'au Empire p114
\nTY7 Devilfish [3] (1-3 Wounds Remaining)	3"	6+	6+	6	7	N/A	1	8	3+	Codex: T'au Empire p114
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nBurst cannon	18"	Assault 4	5	0	1	-	Codex: T'au Empire p121
\nPulse carbine	18"	Assault 2	5	0	1	-	`,
{inField: false, x: null, y: null},
12,
'square',
[78,120,0],
'tau'
),
new Model('piranha',
`Unit	M	WS	BS	S	T	W	A	Ld	Save	Ref\n
MV1 Gun Drone	8"	5+	5+	3	4	1	1	6	4+	Codex: T'au Empire p97,108,109,112-114\n
TX4 Piranha	16"	6+	4+	4	5	6	2	6	4+	Codex: T'au Empire p108\n
Weapon	Range	Type	S	AP	D	Abilities	Ref\n
Burst cannon	18"	Assault 4	5	0	1	-	Codex: T'au Empire p121\n
Pulse carbine	18"	Assault 2	5	0	1	-	Codex: T'au Empire p122\n
`,
{inField: false, x: null, y: null},
6,
'square',
[78,120,0],
'tau'
),
new Model('great knarloc',
`Selections: Great Knarloc beak and talons, Twin kroot gun\n
Categories: Faction: Kroot, Faction: T'au Empire, Great Knarloc, Monster, Heavy Support\n
Abilities: Crushing Strike, Loping Stride, Unit: Great Knarloc, Weapon: Great Knarloc beak and talons, Twin kroot gun\n
\n
Abilities	Description	Ref\n
Crushing Strike	Each time this model finishes a charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 4-5 that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds.	Warhammer Legends
\nLoping Stride	Each time this unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6" to the Move characteristic of models in this unit.	Warhammer Legends
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nGreat Knarloc	7"	3+	4+	7	6	9	4	6	4+	Warhammer Legends
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nGreat Knarloc beak and talons	Melee	Melee	User	-4	3	-	Warhammer Legends
\nTwin kroot gun	48"	Rapid Fire 2	7	-1	D3	-	Warhammer Legends

`,
{inField: false, x: null, y: null},
6,
'square',
[78,120,0],
'tau'
),
 new Model('coldstar',
  `manta strike, 4x fusion blasters, reroll 1 to hit and to wound\n
  \nColdstar	When this model Advances, add 20" to its Move characteristic for that Movement phase instead of rolling a D6.	Codex: T'au Empire p93
\n RELIC: Cross-linked stabiliser jets	COMMANDER, XV8 CRISIS BATTLESUITS or XV8 CRISIS BODYGUARDS unit only. When resolving an attack made with a ranged weapon by a model in this unit, re-roll hit rolls of 1 and re-roll wound rolls of 1.	Psychic Awakening V: The Greater Good p37
\nMaster of War	Once per battle, at the start of your turn, a single <SEPT> COMMANDER unit from your army can declare either Kauyon or Mont’ka:
\nKauyon: In a turn in which a <SEPT> COMMANDER unit from your army declared Kauyon, at the start of your Movement phase you can select any friendly <SEPT> units within 6" of that unit. Until the end of that turn, the selected units cannot move for any reason, but when resolving an attack made by a model in any of those units you can re-roll the hit roll.
\n
Mont’ka: In a turn in which a <SEPT> COMMANDER unit from your army declared Mont’ka, at the start of your Movement phase you can select any friendly <SEPT> units within 6" of that unit. Until the end of that turn, the selected units can shoot as if they did not move this turn.
\n
Unless stated otherwise, you can only use the Master of War ability once per battle, irrespective of how many models in your army have this ability.	Codex: T'au Empire p89
\nThreat Identification Protocols	In the Shooting phase, Gun Drones can only target the nearest visible enemy unit. If two units are equally close, you may choose which is targeted.	Codex: T'au Empire p97,108,109,112-114
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nCommander in XV86 Coldstar Battlesuit	20"	3+	2+	5	5	6	4	9	3+	Codex: T'au Empire p93
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nMV1 Gun Drone	8"	5+	5+	3	4	1	1	6	4+	Codex: T'au Empire p97,108,109,112-114
\nFusion blaster	18"	Assault 1	8	-4	D6	If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result.	Codex: T'au Empire p121
\nPulse carbine	18"	Assault 2	5	0	1	-	Codex: T'au Empire
\n RELIC: Vectored manoeuvring thrusters	T'AU SEPT BATTLESUIT only. This model may immediately move up to 6" after attacking in the Shooting phase. This move cannot bring this model within Engagement Range of any enemy models. \n
TRAI. Exemplar of the Mont'ka	Your Warlord can Advance and still shoot as if they hadn't Advanced this turn. `,
  {inField: false, x: null, y: null},
  6,
  'circle',
  42,
  'tau'
  ),
   new Model('crisis commander',
    `Selections: Advanced targeting system [5pts], 3x Missile pod [45pts], Puretide engram neurochip, Warlord
\nCategories: Faction: <Sept>, Battlesuit, Character, Fly, Jet Pack, HQ, Faction: T'au Empire, Commander, XV8 Crisis, Warlord
\nRules: For the Greater Good, Manta Strike
\nAbilities: Advanced targeting system, Master of War, Puretide engram neurochip, Unit: Commander in XV8 Crisis Battlesuit, Weapon: Missile pod
\n
\nAbilities	Description	Ref
\nAdvanced targeting system	A model equipped with an advanced targeting system increases the AP characteristic of all of its weapons by 1 (e.g. an AP of 0 becomes -1, an AP of -1 becomes -2).	Codex: T'au Empire p123
\nMaster of War	Once per battle, at the start of your turn, a single <SEPT> COMMANDER unit from your army can declare either Kauyon or Mont’ka:
\nKauyon: In a turn in which a <SEPT> COMMANDER unit from your army declared Kauyon, at the start of your Movement phase you can select any friendly <SEPT> units within 6" of that unit. Until the end of that turn, the selected units cannot move for any reason, but when resolving an attack made by a model in any of those units you can re-roll the hit roll.
\n
\nMont’ka: In a turn in which a <SEPT> COMMANDER unit from your army declared Mont’ka, at the start of your Movement phase you can select any friendly <SEPT> units within 6" of that unit. Until the end of that turn, the selected units can shoot as if they did not move this turn.
\n
\nUnless stated otherwise, you can only use the Master of War ability once per battle, irrespective of how many models in your army have this ability.	Codex: T'au Empire p89
\nPuretide engram neurochip	Once per battle, you can re-roll a single hit roll, wound roll or damage roll made for the bearer, or a friendly <SEPT> unit within 6" of the bearer. In addition, if your army is Battle-forged and the bearer is on the battlefield, roll a D6 each time you or your opponent use a Stratagem; on a 6 you gain a command point.	Codex: T'au Empire p132
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nCommander in XV8 Crisis Battlesuit	8"	3+	2+	5	5	5	4	9	3+	Codex: T'au Empire p92
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nMissile pod	36"	Assault 2	7	-1	D3	-	 `,
    {inField: false, x: null, y: null},
    6,
    'circle',
    42,
    'tau'
    ),
 new Model('9 crisis suits',
  `manta strike, 3x flamers\n
  \nBonding Knife Ritual	If you roll a 6 when taking a Morale test for this unit, the test is automatically passed.	Codex: T'au Empire p98,99,102-104,107,111
\nHigh-powered incinerator	BATTLESUIT unit only. This Weapon System replaces each flamer models in this unit are equipped with and has the following profile.	Psychic Awakening V: The Greater Good p37
\nStable Platform	Marker Drones do not suffer the penalty for moving and firing Heavy weapons.	Codex: T'au Empire p109
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nCrisis Shas'ui	8"	5+	4+	5	5	3	2	7	3+	Codex: T'au Empire p103,104
\nCrisis Shas'vre	8"	5+	4+	5	5	3	3	8	3+	Codex: T'au Empire p103,104
\nMV7 Marker Drone	8"	5+	5+	3	4	1	1	6	4+	Codex: T'au Empire p109
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nFlamer	12"	Assault D6	4	0	1	Each time an attack is made with this weapon, that attack automatically hits the target.	Warhammer 40,000 Core Book
\nHigh-powered incinerator	12"	Assault D6	4	0	1	When resolving an attack made with this weapon, do not make a hit roll: it automatically scores a hit. When resolving an attack made with this weapon against a unit that is within half range, add 1 to the Strength characteristic of this weapon for that attack.	Psychic Awakening V: The Greater Good p37
\nMarkerlight	36"	Heavy 1	-	-	-	See Markerlights (rule).	Codex: T'au Empire `,
  {inField: false, x: null, y: null},
  9,
  'circle',
  42,
  'tau'
  ),
 new Model('broadside',
  `2x smart missiles, 1 x heavy rail rifle, magma rifle, 1 ja 2 = 3 to wound \n
Unit	M	WS	BS	S	T	W	A	Ld	Save	Ref \n
Broadside Shas'vre	5"	5+	4+	5	5	6	3	8	2+	\n
MV7 Marker Drone	8"	5+	5+	3	4	1	1	6	4+	\n
Weapon	Range	Type	S	AP	D	Abilities	Ref \n
Heavy rail rifle	60"	Heavy 2	8	-4	D6	For each wound roll of 6+, the target unit suffers a mortal wound in addition to the normal damage.	Codex: T'au Empire p121
\n High-yield missile pod	36"	Heavy 4	7	-1	D3	-
\nMarkerlight	36"	Heavy 1	-	-	-	See Markerlights (rule).	Codex: T'au Empire p121
\nSmart missile system	30"	Heavy 4	5	0	1	This weapon can be fired at units that are not visible to the bearer. Units attacked by this weapon do not gain any bonus to their saving throws for being in cover.`,
  {inField: false, x: null, y: null},
  9,
  'circle',
  42,
  'tau'
  ),
 new Model('3 crisis suits',
  `manta strike, team1: 2xfusion,2xfusion+flamer,2xfusion+plasma\n
  team2: 3x flamer all\n
  \nBonding Knife Ritual	If you roll a 6 when taking a Morale test for this unit, the test is automatically passed.	Codex: T'au Empire p98,99,102-104,107,111
\nHigh-powered incinerator	BATTLESUIT unit only. This Weapon System replaces each flamer models in this unit are equipped with and has the following profile.	Psychic Awakening V: The Greater Good p37
\nStable Platform	Marker Drones do not suffer the penalty for moving and firing Heavy weapons.	Codex: T'au Empire p109
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nCrisis Shas'ui	8"	5+	4+	5	5	3	2	7	3+	Codex: T'au Empire p103,104
\nCrisis Shas'vre	8"	5+	4+	5	5	3	3	8	3+	Codex: T'au Empire p103,104
\nMV7 Marker Drone	8"	5+	5+	3	4	1	1	6	4+	Codex: T'au Empire p109
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nFlamer	12"	Assault D6	4	0	1	Each time an attack is made with this weapon, that attack automatically hits the target.	Warhammer 40,000 Core Book
\nHigh-powered incinerator	12"	Assault D6	4	0	1	When resolving an attack made with this weapon, do not make a hit roll: it automatically scores a hit. When resolving an attack made with this weapon against a unit that is within half range, add 1 to the Strength characteristic of this weapon for that attack.	Psychic Awakening V: The Greater Good p37
\nMarkerlight	36"	Heavy 1	-	-	-	See Markerlights (rule).	Codex: T'au Empire ,
\n in this: reroll 1 to h and w, 2x fusion 1 x flamer`,
  {inField: false, x: null, y: null},
  9,
  'circle',
  42,
  'tau'
  ),
 new Model('shadowsun',
  `
  Selections: 5. Exemplar of the Kauyon, Fletchette launcher, 2x High-energy fusion blaster, Light missile pod, MV37 Advanced Guardian Drone, MV62 Command-link Drone, Pulse pistol, Warlord
  \nCategories: Battlesuit, Character, Infantry, Jet Pack, Fly, Faction: T'au Sept, Faction: T'au Empire, Commander, XV22 Stalker, Shadowsun, Supreme Commander, HQ, Drone, Advanced Guardian Drone, Command-link Drone, Warlord
  \nRules: Drone Support, For the Greater Good, Saviour Protocols
  \nAbilities: 5. Exemplar of the Kauyon, Advanced Guardian Field, Camouflage Fields, Command-link Drone, Defender of the Greater Good, Genius of Kauyon, Infiltrator, Master of War, Supreme Commander, XV22 Stalker Battlesuit, Unit: Commander Shadowsun, MV37 Advanced Guardian Drone, MV62 Command-link Drone, Weapon: Fletchette launcher, High-energy fusion blaster, Light missile pod, Pulse pistol
  \n
  \nAbilities	Description	Ref
  \n5. Exemplar of the Kauyon	You can re-roll failed hit rolls for your Warlord as long as they have not moved this turn. If they have moved for any reason, they lose this trait until the start of the next turn.	Codex: T'au Empire p131
  \nAdvanced Guardian Field	This model has a 4+ invulnerable save. When a friendly T'AU EMPIRE model would lose a wound whilst within 3" of this model, roll one D6; on a 6 that wound is not lost.	Psychic Awakening V: The Greater Good p33
  \nCamouflage Fields	When resolving an attack made with a ranged weapon against this model or any accompanying DRONES, subtract 1 from the hit roll.	Psychic Awakening V: The Greater Good p33
  \nCommand-link Drone	At the start of your Shooting phase, if a friendly COMMAND-LINK DRONE model is within 3" of this model, select one friendly T'AU EMPIRE unit within 12" of that model. Until the end of that phase, when resolving an attack made by a model in that T'AU EMPIRE unit, you can re-roll a hit roll of 1.	Psychic Awakening V: The Greater Good p33
  \nDefender of the Greater Good	When this model would lose any wounds as a result of an attack whilst this model is within 3" of a friendly XV25 STEALTH BATTLESUITS unit, that unit can attempt to intercept that attack. Roll one D6; on a 2+ this model does not lose those wounds and that unit suffers 1 mortal wound for each of those wounds. Only one attempt can be made to intercept each attack.	Psychic Awakening V: The Greater Good p33
  \nGenius of Kauyon	Once per battle, this model can declare Kauyon even if Kauyon or Mont'ka has already been declared. Mont'ka and Kauyon cannot both be declared in the same turn.	Psychic Awakening V: The Greater Good p33
  \nInfiltrator	When you set up this model and its accompanying DRONES during deployment, they can be set up anywhere on the battlefield that is more than 12" away from the enemy deployment zone and any enemy models.	Psychic Awakening V: The Greater Good p33
  \nMaster of War	Once per battle, at the start of your turn, a single <SEPT> COMMANDER unit from your army can declare either Kauyon or Mont’ka:
  \nKauyon: In a turn in which a <SEPT> COMMANDER unit from your army declared Kauyon, at the start of your Movement phase you can select any friendly <SEPT> units within 6" of that unit. Until the end of that turn, the selected units cannot move for any reason, but when resolving an attack made by a model in any of those units you can re-roll the hit roll.
  \n
  \nMont’ka: In a turn in which a <SEPT> COMMANDER unit from your army declared Mont’ka, at the start of your Movement phase you can select any friendly <SEPT> units within 6" of that unit. Until the end of that turn, the selected units can shoot as if they did not move this turn.
  \n
  \nUnless stated otherwise, you can only use the Master of War ability once per battle, irrespective of how many models in your army have this ability.	Codex: T'au Empire p89
  \nSupreme Commander	This model can be included in a T'AU EMPIRE Detachment without preventing other units in that Detachment from gaining a Sept Tenet. Note, however, that this model does not benefit from any Sept Tenet unless the Sept Tenet selected for that Detachment is Coordinated Fire Arcs.	Psychic Awakening V: The Greater Good p33
  \nXV22 Stalker Battlesuit	This model has a 5+ invulnerable save.	Psychic Awakening V: The Greater Good p33
  \nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
  \nCommander Shadowsun	8"	3+	2+	4	4	5	4	9	3+	Psychic Awakening V: The Greater Good p33
  \nMV37 Advanced Guardian Drone	8"	5+	5+	3	4	1	1	6	4+	Psychic Awakening V: The Greater Good p33
  \nMV62 Command-link Drone	8"	5+	5+	3	4	1	1	6	4+	Psychic Awakening V: The Greater Good p33
  \nWeapon	Range	Type	S	AP	D	Abilities	Ref
  \nFletchette launcher	18"	Pistol 5	3	0	1	-	Psychic Awakening V: The Greater Good p33
  \nHigh-energy fusion blaster	24"	Assault 1	8	-4	D6	When resolving an attack made with this weapon against a unit that is within half range, roll one additional D6 when inflicting damage with it and discard one of the dice.	Psychic Awakening V: The Greater Good p33
  \nLight missile pod	24"	Assault 2	7	-1	D3	-	Psychic Awakening V: The Greater Good p33
  \nPulse pistol	12"	Pistol 1	5	0	1	-	Codex: T'au Empire
`,
  {inField: false, x: null, y: null},
  9,
  'circle',
  42,
  'tau'
  ),
 new Model('6 stealth suits',
  `
Abilities	Description	Ref
\nBonding Knife Ritual	If you roll a 6 when taking a Morale test for this unit, the test is automatically passed.	Codex: T'au Empire p98,99,102-104,107,111
\nCamouflage Fields	Your opponent must subtract 1 from all hit rolls for attacks that target this unit.	Codex: T'au Empire p102
\nShield generator	A model with a shield generator has a 4+ invulnerable save. You cannot take this support system on a Riptide battlesuit.	Codex: T'au Empire p123
\nStable Platform	Marker Drones do not suffer the penalty for moving and firing Heavy weapons.	Codex: T'au Empire p109
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nMV7 Marker Drone	8"	5+	5+	3	4	1	1	6	4+	Codex: T'au Empire p109
\nStealth Shas'ui	8"	5+	4+	4	4	2	2	7	3+	Codex: T'au Empire p102
\nStealth Shas'vre	8"	5+	4+	4	4	2	3	8	3+	Codex: T'au Empire p102
`,
  {inField: false, x: null, y: null},
  9,
  'circle',
  42,
  'tau'
  ),
 new Model('3 stealth suits',
  `
Abilities	Description	Ref
\nBonding Knife Ritual	If you roll a 6 when taking a Morale test for this unit, the test is automatically passed.	Codex: T'au Empire p98,99,102-104,107,111
\nCamouflage Fields	Your opponent must subtract 1 from all hit rolls for attacks that target this unit.	Codex: T'au Empire p102
\nShield generator	A model with a shield generator has a 4+ invulnerable save. You cannot take this support system on a Riptide battlesuit.	Codex: T'au Empire p123
\nStable Platform	Marker Drones do not suffer the penalty for moving and firing Heavy weapons.	Codex: T'au Empire p109
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nMV7 Marker Drone	8"	5+	5+	3	4	1	1	6	4+	Codex: T'au Empire p109
\nStealth Shas'ui	8"	5+	4+	4	4	2	2	7	3+	Codex: T'au Empire p102
\nStealth Shas'vre	8"	5+	4+	4	4	2	3	8	3+	Codex: T'au Empire p102
`,
  {inField: false, x: null, y: null},
  9,
  'circle',
  42,
  'tau'
  ),
 new Model('6 crisis suits',
  `manta strike, 3x flamers\n
  \nBonding Knife Ritual	If you roll a 6 when taking a Morale test for this unit, the test is automatically passed.	Codex: T'au Empire p98,99,102-104,107,111
\nHigh-powered incinerator	BATTLESUIT unit only. This Weapon System replaces each flamer models in this unit are equipped with and has the following profile.	Psychic Awakening V: The Greater Good p37
\nStable Platform	Marker Drones do not suffer the penalty for moving and firing Heavy weapons.	Codex: T'au Empire p109
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nCrisis Shas'ui	8"	5+	4+	5	5	3	2	7	3+	Codex: T'au Empire p103,104
\nCrisis Shas'vre	8"	5+	4+	5	5	3	3	8	3+	Codex: T'au Empire p103,104
\nMV7 Marker Drone	8"	5+	5+	3	4	1	1	6	4+	Codex: T'au Empire p109
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nFlamer	12"	Assault D6	4	0	1	Each time an attack is made with this weapon, that attack automatically hits the target.	Warhammer 40,000 Core Book
\nHigh-powered incinerator	12"	Assault D6	4	0	1	When resolving an attack made with this weapon, do not make a hit roll: it automatically scores a hit. When resolving an attack made with this weapon against a unit that is within half range, add 1 to the Strength characteristic of this weapon for that attack.	Psychic Awakening V: The Greater Good p37
\nMarkerlight	36"	Heavy 1	-	-	-	See Markerlights (rule).	Codex: T'au Empire `,
  {inField: false, x: null, y: null},
  9,
  'circle',
  42,
  'tau'
  ),
 new Model('5 crisis suits',
  `manta strike, 3x flamers\n
  \nBonding Knife Ritual	If you roll a 6 when taking a Morale test for this unit, the test is automatically passed.	Codex: T'au Empire p98,99,102-104,107,111
\nHigh-powered incinerator	BATTLESUIT unit only. This Weapon System replaces each flamer models in this unit are equipped with and has the following profile.	Psychic Awakening V: The Greater Good p37
\nStable Platform	Marker Drones do not suffer the penalty for moving and firing Heavy weapons.	Codex: T'au Empire p109
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nCrisis Shas'ui	8"	5+	4+	5	5	3	2	7	3+	Codex: T'au Empire p103,104
\nCrisis Shas'vre	8"	5+	4+	5	5	3	3	8	3+	Codex: T'au Empire p103,104
\nMV7 Marker Drone	8"	5+	5+	3	4	1	1	6	4+	Codex: T'au Empire p109
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nFlamer	12"	Assault D6	4	0	1	Each time an attack is made with this weapon, that attack automatically hits the target.	Warhammer 40,000 Core Book
\nHigh-powered incinerator	12"	Assault D6	4	0	1	When resolving an attack made with this weapon, do not make a hit roll: it automatically scores a hit. When resolving an attack made with this weapon against a unit that is within half range, add 1 to the Strength characteristic of this weapon for that attack.	Psychic Awakening V: The Greater Good p37
\nMarkerlight	36"	Heavy 1	-	-	-	See Markerlights (rule).	Codex: T'au Empire
\n
wysiwyc teams:\n
flamer,flamer,plasma		\n
plasma,plasma,flamer		\n
plasma,plasma,flamer  	\n
plasma,plasma,flamer		\n
missiles,flamer,shield	\n
\n
flamer,flamer,fusion		\n
flamer,flamer,fusion	\n
plasma,fusion,flamer	\n
missile,missile,shield\n
fusion,fusion,flamer	\n
\n
Fusion blaster	18"	Assault 1 8 -4	D6	If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result.\n
plasma rifle 24" rapid 1 6 -3 1\n
missile pod  36" assault 2 7 -1 d3\n
flamer 12" 4 0 1 auto hits
`,
  {inField: false, x: null, y: null},
  5,
  'circle',
  42,
  'tau'
  ),
 new Model('4 crisis suits',
  `manta strike, 3x flamers\n
  \nBonding Knife Ritual	If you roll a 6 when taking a Morale test for this unit, the test is automatically passed.	Codex: T'au Empire p98,99,102-104,107,111
\nHigh-powered incinerator	BATTLESUIT unit only. This Weapon System replaces each flamer models in this unit are equipped with and has the following profile.	Psychic Awakening V: The Greater Good p37
\nStable Platform	Marker Drones do not suffer the penalty for moving and firing Heavy weapons.	Codex: T'au Empire p109
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nCrisis Shas'ui	8"	5+	4+	5	5	3	2	7	3+	Codex: T'au Empire p103,104
\nCrisis Shas'vre	8"	5+	4+	5	5	3	3	8	3+	Codex: T'au Empire p103,104
\nMV7 Marker Drone	8"	5+	5+	3	4	1	1	6	4+	Codex: T'au Empire p109
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nFlamer	12"	Assault D6	4	0	1	Each time an attack is made with this weapon, that attack automatically hits the target.	Warhammer 40,000 Core Book
\nHigh-powered incinerator	12"	Assault D6	4	0	1	When resolving an attack made with this weapon, do not make a hit roll: it automatically scores a hit. When resolving an attack made with this weapon against a unit that is within half range, add 1 to the Strength characteristic of this weapon for that attack.	Psychic Awakening V: The Greater Good p37
\nMarkerlight	36"	Heavy 1	-	-	-	See Markerlights (rule).	Codex: T'au Empire
wysiwyc teams:\n
flamer,flamer,plasma		\n
plasma,plasma,flamer		\n
plasma,plasma,flamer  	\n
plasma,plasma,flamer		\n
\n
flamer,flamer,fusion		\n
flamer,flamer,fusion	\n
plasma,fusion,flamer	\n
fusion,fusion,flamer	\n
\n
Fusion blaster	18"	Assault 1 8 -4	D6	If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result.\n
plasma rifle 24" rapid 1 6 -3 1\n
missile pod  36" assault 2 7 -1 d3\n
flamer 12" 4 0 1 auto hits `,
  {inField: false, x: null, y: null},
  4,
  'circle',
  42,
  'tau'
  ),
 new Model('riptide',
  `2x plasma rifle, amplified ion accelerator
Nova Reactor	In your Movement phase you can choose to use this model's Nova Reactor. If you do, this model suffers a mortal wound. Choose one of the following effects to last until the beginning of your next turn:
\n* Nova Shield: This model has a 3+ invulnerable save.
\n* Boost: This model can move 2D6" in your Charge phase. You cannot use this ability to move within Engagement Range of any enemy models. If it does so, this model cannot declare a charge that phase.
\n* Nova-charge: Choose for either of this model's heavy burst cannon Type to change to Heavy 18, or its ion accelerator Type (both standard and overcharge) to change to Heavy 6.	Codex: T'au Empire p106
\nRiptide Shield Generator	This model has a 5+ invulnerable save.	Codex: T'au Empire p106
\nShield generator (Drone)	A model with a shield generator has a 4+ invulnerable save. In addition, roll a D6 each time a DRONE with this ability loses a wound; on a 5+ that Drone does not lose a wound.	Codex: T'au Empire p109
MV84 Shielded Missile Drone	12"	5+	5+	4	4	1	1	6	4+	Codex: T'au Empire p106
\nXV104 Riptide Battlesuit [1] (7-14+ Wounds Remaining)	12"	5+	4+	6	7	14	4	8	2+	Codex: T'au Empire p106
\nXV104 Riptide Battlesuit [2] (4-6 Wounds Remaining)	8"	5+	5+	6	7	N/A	3	8	2+	Codex: T'au Empire p106
\nXV104 Riptide Battlesuit [3] (1-3 Wounds Remaining)	4"	5+	5+	6	7	N/A	2	8	2+	Codex: T'au Empire p106
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nAmplified ion accelerator (overcharge)	72"	Heavy 6	9	-4	3+D3	For each unmodified hit roll of 1 made for attacks with this weapon's overcharge profile, the bearer suffers 1 mortal wound after shooting with this weapon.	Psychic Awakening V: The Greater Good p37
\nAmplified ion accelerator (standard)	72"	Heavy 6	8	-4	3	-`,
  {inField: false, x: null, y: null},
  14,
  'circle',
  60,
  'tau'
),
new Model('ghostkeel',
`Selections: 2x Fusion blaster [20pts], Cyclic ion raker, 2x MV5 Stealth Drone [20pts], Shield generator [5pts]
\nCategories: Elites, Fly, Faction: <Sept>, Battlesuit, Jet Pack, Faction: T'au Empire, Monster, XV95 Ghostkeel Battlesuit, Drone, MV5 Stealth Drone
\nRules: Drone Support, For the Greater Good, Infiltrator, Saviour Protocols
\nAbilities: Ghostkeel Electrowarfare Suite, Shield generator, Stealth Field, Unit: MV5 Stealth Drone, XV95 Ghostkeel Shas'vre [1] (6-10+ Wounds Remaining), XV95 Ghostkeel Shas'vre [2] (3-5 Wounds Remaining), XV95 Ghostkeel Shas'vre [3] (1-2 Wounds Remaining), Weapon: Cyclic ion raker (Overcharge), Cyclic ion raker (Standard), Fusion blaster
\n
\nAbilities	Description	Ref
\nGhostkeel Electrowarfare Suite	Your opponent must subtract 1 from hit rolls for models attacking this model from more than 6" away.	Codex: T'au Empire p105
\nShield generator	A model with a shield generator has a 4+ invulnerable save. You cannot take this support system on a Riptide battlesuit.	Codex: T'au Empire p123
\nStealth Field	Models shooting at a Stealth Drone or an XV95 GHOSTKEEL BATTLESUIT within 3" of any friendly Stealth Drones subtract 1 from their hit rolls. (This is cumulative with the Ghostkeel Electrowarfare Suite ability.)	Codex: T'au Empire p105
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nMV5 Stealth Drone	12"	5+	5+	4	4	1	1	6	4+	Codex: T'au Empire p105
\nXV95 Ghostkeel Shas'vre [1] (6-10+ Wounds Remaining)	12"	5+	4+	6	6	10	3	8	3+	Codex: T'au Empire p105
\nXV95 Ghostkeel Shas'vre [2] (3-5 Wounds Remaining)	8"	5+	5+	6	6	N/A	2	8	3+	Codex: T'au Empire p105
\nXV95 Ghostkeel Shas'vre [3] (1-2 Wounds Remaining)	4"	5+	5+	6	6	N/A	1	8	3+	Codex: T'au Empire p105
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nCyclic ion raker (Overcharge)	24"	Heavy 6	8	-1	D3	If you roll one or more unmodified hit rolls of 1, the bearer suffers a mortal wound after all of this weapon's shots have been resolved.	Codex: T'au Empire p121
\nCyclic ion raker (Standard)	24"	Heavy 6	7	-1	1	-	Codex: T'au Empire p121
\nFusion blaster	18"	Assault 1	8	-4	D6	If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result.	Codex: T'au Empire p121
\nSelection Rules
\nDrone Support: When a unit is set up on the battlefield, any accompanying DRONE models are set up in unit coherency with it. From that point onwards, the DRONE models are treated as a separate unit. (Codex: T'au Empire)
\nFor the Greater Good: - Each time an enemy unit declares a charge against this unit, this unit can fire Overwatch before the charge roll is made.
\n- While a friendly unit with this ability is within 6" of this unit, each time an enemy unit declares a charge against this unit, that friendly unit can fire Overwatch before the charge roll is made. If it does so, until the end of the phase, that friendly unit cannot fire Overwatch again. (Codex: T'au Empire p89)
\nInfiltrator: During deployment, this unit can be set up anywhere on the battlefield that is not within your opponent's deployment zone and is more than 12" from any enemy unit. ()`,
{inField: false, x: null, y: null},
10,
'circle',
60,
'tau'
),
  new Model('breachers',
   `6'', 5+, 4+, 3/3, w1, a1, ld 6, 4+\n
   sgt: +1ld +1a\n
   pulse blasters,photon grenades,\n
   Pulse blaster (1 Close range)	5"	Assault 2	6	-2	1	-	Codex: T'au Empire p122\n
Pulse blaster (2 Medium range)	10"	Assault 2	5	-1	1	-	Codex: T'au Empire p122\n
Pulse blaster (3 Long range)	15"	Assault 2	4	`,
   {inField: false, x: null, y: null},
   10,
   'circle',
   35,
   'tau'
   ),
     new Model('kroots',
      `At the start of the first battle round but before the first turn begins, you can move this unit up to 7". It cannot end this move within 9" of any enemy models. If both players have units that are able to move at the start of the first battle round but before the first turn begins, the player who is taking the first turn moves their units first.	Codex: T'au Empire p100
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nKroot	7"	3+	4+	3	3	1	1	6	6+	Codex: T'au Empire p100
\nKroot rifle (melee)	Melee	Melee	+1	0	1	-	Codex: T'au Empire p123
\nKroot rifle (shooting)	24"	Rapid Fire 1	4	0	1	-	Codex: T'au Empire p121`,
      {inField: false, x: null, y: null},
      10,
      'circle',
      35,
      'tau'
      ),
  new Model('5 pathfinders',
   `Bonding Knife Ritual	If you roll a 6 when taking a Morale test for this unit, the test is automatically passed.	Codex: T'au Empire p98,99,102-104,107,111
\nVanguard	At the start of the first battle round but before the first turn begins, you can move this unit and any accompanying Drones up to 7". They cannot end this move within 9" of any enemy models. If both players have units that are able to move at the start of the first battle round but before the first turn begins, the player who is taking the first turn moves their units first.	Codex: T'au Empire p96, 107
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nPathfinder	7"	5+	4+	3	3	1	1	6	5+	Codex: T'au Empire p107
\nPathfinder Shas'ui	7"	5+	4+	3	3	1	2	7	5+	Codex: T'au Empire p107
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nPhoton grenade	12"	Grenade D6	-	-		Blast. This weapon does not inflict any damage. Your opponent must subtract 1 from any hit rolls made for INFANTRY units that have suffered any hits from photon grenades until the end of the turn.	Codex: T'au Empire p121
\nMarkerlight	36"	Heavy 1	-	-	-	See Markerlights (rule).	Codex: T'au Empire p121
\nPulse carbine	18"	Assault 2	5	0	1	-	Codex: T'au Empire
\n Rail rifle	30"	Rapid Fire 1	6	-4	D3	For each wound roll of 6+ made for this weapon, the target unit suffers a mortal wound in addition to the normal damage.	`,
   {inField: false, x: null, y: null},
   10,
   'circle',
   35,
   'tau'
   ),
   new Model('5 strike team',
    `6'', 5+, 4+, 3/3, w1, a1, ld 6, 4+\n
    sgt: +1ld +1a\n
    pulse rifles,photon grenades,\n
    rifle: 30 rapid 1s5 0 1`,
    {inField: false, x: null, y: null},
    5,
    'circle',
    35,
    'tau'
    ),
    new Model('10 strike team',
     `6'', 5+, 4+, 3/3, w1, a1, ld 6, 4+\n
     sgt: +1ld +1a\n
     pulse rifles,photon grenades,\n
     rifle: 30 rapid 1s5 0 1`,
     {inField: false, x: null, y: null},
     10,
     'circle',
     35,
     'tau'
     ),
     new Model('gun drones',
      `8'', 5+, 5+, 3/4, w1, a1, ld 6, 4+\n
      marker: 36 h1 \n
      stable platform: \n
For the Greater Good: - Each time an enemy unit declares a charge against this unit, this unit can fire Overwatch before the charge roll is made.
- While a friendly unit with this ability is within 6" of this unit, each time an enemy unit declares a charge against this unit, that friendly unit can fire Overwatch before the charge roll is made. If it does so, until the end of the phase, that friendly unit cannot fire Overwatch again. (Codex: T'au Empire p89)
\nMarkerlights: If a model (other than a VEHICLE) fires a markerlight, it cannot fire any other weapons in that phase. When a unit is hit by a markerlight, place a counter next to it for the remainder of the phase. The table below describes the benefits T'AU EMPIRE models have when shooting at a unit that has markerlight counters. All benefits are cumulative.
* 1 - You can re-roll hit rolls of 1 for T'AU EMPIRE models attacking this unit.\n
* 2 - Destroyer and seeker missiles fired at this unit use the firing model's Ballistic Skill (and any modifiers) rather than only hitting on a 6.\n
* 3 - The target unit does not gain any bonus to its saving throws for being in cover.\n
* 4 - T'AU EMPIRE models attacking this unit do not suffer the penalty for moving and firing Heavy weapons or Advancing and firing Assault weapons.\n
* 5 or more - Add 1 to hit rolls for T'AU EMPIRE models attacking this unit. (Codex: T'au Empire p123)\n
Saviour Protocols: When resolving an attack made against a <SEPT> INFANTRY or <SEPT> BATTLESUIT unit whilst that unit is within 3" of a friendly <SEPT> DRONES unit, if the wound roll is successful, you can roll one D6; on a 2+ that DRONES unit suffers 1 mortal wound and the attack sequence ends. (Codex: T'au Empire pvar)`,
      {inField: false, x: null, y: null},
      2,
      'circle',
      35,
      'tau'
      ),
       new Model('shield drones',
        `8'', 5+, 5+, 3/4, w1, a1, ld 6, 4+\n
      Shield generator (Drone)	A model with a shield generator has a 4+ invulnerable save. In addition, roll a D6 each time a DRONE with this ability loses a wound; on a 5+ that Drone does not lose a wound.\n
        stable platform: \n
  For the Greater Good: - Each time an enemy unit declares a charge against this unit, this unit can fire Overwatch before the charge roll is made.
  - While a friendly unit with this ability is within 6" of this unit, each time an enemy unit declares a charge against this unit, that friendly unit can fire Overwatch before the charge roll is made. If it does so, until the end of the phase, that friendly unit cannot fire Overwatch again. (Codex: T'au Empire p89)
  \nMarkerlights: If a model (other than a VEHICLE) fires a markerlight, it cannot fire any other weapons in that phase. When a unit is hit by a markerlight, place a counter next to it for the remainder of the phase. The table below describes the benefits T'AU EMPIRE models have when shooting at a unit that has markerlight counters. All benefits are cumulative.
  * 1 - You can re-roll hit rolls of 1 for T'AU EMPIRE models attacking this unit.\n
  * 2 - Destroyer and seeker missiles fired at this unit use the firing model's Ballistic Skill (and any modifiers) rather than only hitting on a 6.\n
  * 3 - The target unit does not gain any bonus to its saving throws for being in cover.\n
  * 4 - T'AU EMPIRE models attacking this unit do not suffer the penalty for moving and firing Heavy weapons or Advancing and firing Assault weapons.\n
  * 5 or more - Add 1 to hit rolls for T'AU EMPIRE models attacking this unit. (Codex: T'au Empire p123)\n
  Saviour Protocols: When resolving an attack made against a <SEPT> INFANTRY or <SEPT> BATTLESUIT unit whilst that unit is within 3" of a friendly <SEPT> DRONES unit, if the wound roll is successful, you can roll one D6; on a 2+ that DRONES unit suffers 1 mortal wound and the attack sequence ends. (Codex: T'au Empire pvar)`,
        {inField: false, x: null, y: null},
        2,
        'circle',
        35,
        'tau'
        ),
       new Model('marker drones',
        `8'', 5+, 5+, 3/4, w1, a1, ld 6, 4+\n
        marker: 36 h1 \n
        stable platform: \n
  For the Greater Good: - Each time an enemy unit declares a charge against this unit, this unit can fire Overwatch before the charge roll is made.
  - While a friendly unit with this ability is within 6" of this unit, each time an enemy unit declares a charge against this unit, that friendly unit can fire Overwatch before the charge roll is made. If it does so, until the end of the phase, that friendly unit cannot fire Overwatch again. (Codex: T'au Empire p89)
  \nMarkerlights: If a model (other than a VEHICLE) fires a markerlight, it cannot fire any other weapons in that phase. When a unit is hit by a markerlight, place a counter next to it for the remainder of the phase. The table below describes the benefits T'AU EMPIRE models have when shooting at a unit that has markerlight counters. All benefits are cumulative.
  * 1 - You can re-roll hit rolls of 1 for T'AU EMPIRE models attacking this unit.\n
  * 2 - Destroyer and seeker missiles fired at this unit use the firing model's Ballistic Skill (and any modifiers) rather than only hitting on a 6.\n
  * 3 - The target unit does not gain any bonus to its saving throws for being in cover.\n
  * 4 - T'AU EMPIRE models attacking this unit do not suffer the penalty for moving and firing Heavy weapons or Advancing and firing Assault weapons.\n
  * 5 or more - Add 1 to hit rolls for T'AU EMPIRE models attacking this unit. (Codex: T'au Empire p123)\n
  Saviour Protocols: When resolving an attack made against a <SEPT> INFANTRY or <SEPT> BATTLESUIT unit whilst that unit is within 3" of a friendly <SEPT> DRONES unit, if the wound roll is successful, you can roll one D6; on a 2+ that DRONES unit suffers 1 mortal wound and the attack sequence ends. (Codex: T'au Empire pvar)`,
        {inField: false, x: null, y: null},
        2,
        'circle',
        35,
        'tau'
        ),
       new Model('recon drone',
        `MB3 Recon Drone	8"	5+	5+	4	4	2	1	6	4+\n
        Recon Suite	Units making saves against attacks made by a Pathfinder Team that is within 3" of a friendly Recon Drone do not gain any bonus to their saving throws for being in cover.
        \n `,
        {inField: false, x: null, y: null},
        2,
        'circle',
        35,
        'tau'
      ),
     new Model('grav-inhibitor drone',
      `Gravity Wave Projector	Enemy units beginning a charge move within 12" of any Grav-Inhibitor Drones reduce their charge distance by D3". `,
      {inField: false, x: null, y: null},
      2,
      'circle',
      35,
      'tau'
    ),
       new Model('guardian drone',
        `8'', 5+, 5+, 3/4, w1, a1, ld 6, 4+\n
        Guardian Field	Guardian Drones have a 5+ invulnerable save. Breacher Teams within 3" of any friendly Guardian Drone have a 5+ invulnerable save. Strike Teams within 3" of any friendly Guardian Drone have a 6+ invulnerable save.`,
        {inField: false, x: null, y: null},
        2,
        'circle',
        35,
        'tau'
        ),
       new Model('shielded missile drone',
        `
Abilities	Description	Ref
\nShield generator (Drone)	A model with a shield generator has a 4+ invulnerable save. In addition, roll a D6 each time a DRONE with this ability loses a wound; on a 5+ that Drone does not lose a wound.	Codex: T'au Empire p109
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nMV84 Shielded Missile Drone	12"	5+	5+	4	4	1	1	6	4+	Codex: T'au Empire p106
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nMissile pod	36"	Assault 2	7	-1	D3	-	Codex: T'au Empire p121`,
        {inField: false, x: null, y: null},
        2,
        'circle',
        35,
        'tau'
        ),
       new Model('stealth drone',
        `Stealth Field	Models shooting at a Stealth Drone or an XV95 GHOSTKEEL BATTLESUIT within 3" of any friendly Stealth Drones subtract 1 from their hit rolls. (This is cumulative with the Ghostkeel Electrowarfare Suite ability.)`,
        {inField: false, x: null, y: null},
        2,
        'circle',
        35,
        'tau'
        ),
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
  ),new Model('Bullgrins',
     `Brute Shield	4+ Invulnerable Save	\n
Slabshield	Add 2 to the save rolls of any models equipped with a slabshield.	\n
Unit	M	WS	BS	S	T	W	A	Ld	Save	Ref\n
Bullgryn	6"	3+	4+	5	5	3	3	7	4+	\n
Bullgryn Bone 'ead	6"	3+	4+	5	5	3	4	8	4+	\n
Weapon	Range	Type	S	AP	D	Abilities	Ref\n
Bullgryn Maul	Melee	Melee	+2	-1	2		\n
Frag Bombs	6"	Grenade D6	4	0	1	Blast.	\n
Selection Rules\n
Avalanche of Muscle: You can add 1 to the Attacks characteristic of this model in the Fight phase on any turn in which it made a successful charge. This ability may only be used the first time this model fights each turn. (Codex: Astra Militarum p102)`,
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
     new Model('heavy weapons team',
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
    new Model('company commander',
     `6'', 3+, 3+, 3/3, w4, a3, ld 8, 5+\n
     5++ invu, 2 x orders\n
     pistol,sword`,
     {inField: false, x: null, y: null},
     3,
     'circle',
     25,
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
    new Model('eversor',
     `7'', 2+, 2+, 4/4, w6, a6, ld 9, 6+\n
     if destroyed: d6-> 6'' 4+ each unit takes d3 mortals\n
     charging/heroic: 3d6'' +2 attacks\n
     each melee kill = +1 attack at same unit, consolidate = 6''\n
     if enemy falls back while 1'' of this->this can shoot it\n
     exe pistol: 12'' pistol4 s4 ap-1 1 rr wounds vs. inf\n
     melta bombs: 4'' grenade1 s8 -4ap d6 rr wound vs vech\n
     neuro gauntlet: s+1 -1 1 rr wounds\n
     power sword: +1 -3 1`,
     {inField: false, x: null, y: null},
     6,
     'circle',
     25,
     'imperial guard'
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
    new Model('armoured sentinel',
     `8'', 4+, 4+, 5/6, w6, a1, ld 7, 3+\n
     heavy flamer/multilaser`,
     {inField: false, x: null, y: null},
     6,
     'circle',
     60,
     'imperial guard'
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
new Model('manticore',
 `6+: 12'', 6+, 4+, 8, 12, 3, 7, 3+\n
  3-5: 8'', 6+, 5+, 8, x, d3, 7, 3+\n
  1-2: 4'', 6+, 6+, 8, x, 1, 7, 3+\n
 120'' s10 -2 d3, smokes`,
 {inField: false, x: null, y: null},
 11,
 'square',
 [78,120,0],
 'imperial guard'
 ),
 // BLACK LEGION
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
    new Model('dreadclaw',
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
     hatefull, \n chainswordit + 1 attack ja -ap`,
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
    new Model('terminator sorcerer',
     `Death to the False Emperorn \n
Teleport Strike	During deployment, - \n
Terminator Armour	Models in this unit have a 5+ invulnerable save.	\n
Psychic Power	Warp Charge	Range	Details	Ref\n
Death Hex	8	12"	If manifested, select a visible enemy unit within 12" of the psyker. Until the start of your next Psychic phase, that unit cannot take invulnerable saves.
\nPrescience	7	18"	If manifested, select a <LEGION> unit within 18" of the psyker. You can add 1 to all hit rolls made for that unit until the start of your next Psychic phase.
\nSmite	5	18"	Smite has a warp charge value of 5. If manifested, the closest visible enemy unit within 18" of the psyker suffers D3 mortal wounds (pg 181). If the result of the Psychic test was more than 10 the target suffers D6 mortal wounds instead.
\nPsyker	Cast	Deny	Powers Known	Other	Ref
\nSorcerer in Terminator Armour	2	1	Smite and 2 powers from the Dark Hereticus discipline	-
\nUnit	M	WS	BS	S	T	W	A	Ld	Save	Ref
\nSorcerer in Terminator Armour	5"	3+	3+	4	4	5	3	9	2+
\nWeapon	Range	Type	S	AP	D	Abilities	Ref
\nCombi-bolter	24"	Rapid Fire 2	4	0	1	-
\nForce axe	Melee	Melee	+2	-2	D3	`,
     {inField: false, x: null, y: null},
     4,
     'circle',
     32,
     'black legion'
     ),
    new Model('mr oldschool',
     `Death to the False Emperor\n
     Exalted Champion	Add 1 to your Warlord’s Attacks characteristic.	\n
     Lord of Chaos	You can re-roll hit rolls of 1 made for friendly <LEGION> units within 6" of this model.\n
     Sigil of Corruption	This model has a 4+ invulnerable save.	\n
     Teleport Strike\n
     Chaos Lord in Terminator Armour	5"	2+	2+	4	4	6	4	9	2+	\n
     Angelsbane	24"	Rapid Fire 2	5	-2	2	This weapon has a Damage characteristic of 3 if the target has the IMPERIUM keyword.\n
     Combi-bolter	24"	Rapid Fire 2	4	0	1	-	\n
     Power sword	Melee	Melee	+1	-3	1	-\n
     Z'aall, The Wrathful	Melee	Melee	User	-5	2	When rolling for this weapon’s Daemon Weapon ability, on a 2+ add a number to this weapon’s Strength characteristic equal to the result until the end of this phase.`,
     {inField: false, x: null, y: null},
     6,
     'circle',
     42,
     'black legion'
     ),
    new Model('terminators',
     `Death to the False Emperor, teleport, 5++\n
     Terminator	5"	3+	3+	4	4	2	2	8	2+	\n
      Terminator Champion	5"	3+	3+	4	4	2	3	9	2+	\n
      Boltgun	24"	Rapid Fire 1	4	0	1	-	\n
      Chainfist	Melee	Melee	x2	-4	D3	, subtract 1 from that attack’s hit roll, and if that attack is allocated to a VEHICLE model, that attack has a Damage characteristic of 3.	\n
      Heavy flamer	12"	Heavy D6	5	-1	1	 attack automatically hits the target.	\n
      Meltagun	12"	Assault 1	8	-4	D6	targets a unit within half range, that attack has a Damage characteristic of D6+2.	\n
      Power fist	Melee	Melee	x2	-3	2	 subtract 1 from that attack’s hit roll.	\n
      Power sword	Melee	Melee	+1	-3	1	-`,
     {inField: false, x: null, y: null},
     10,
     'circle',
     42,
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
    new Model('chaos lord',
     `Selections: Combi-bolter [3pts], Frag & Krak grenades, No Chaos Mark, Power sword [5pts]\n
Rules: Hateful Assault, Hateful Volleys.
Abilities: Death to the False Emperor, Lord of Chaos, Sigil of Corruption, Unit: Chaos Lord, Weapon: Combi-bolter, Frag grenades, Krak grenades, Power sword\n
Death to the False Emperor	Each time you roll a hit roll of 6+ for a model with this ability in the Fight phase, it can, if it was targeting an IMPERIUM unit, immediately make an extra attack against the same unit using the same weapon. These extra attacks cannot themselves generate any further attacks.	\n
Lord of Chaos	You can re-roll hit rolls of 1 made for friendly <LEGION> units within 6" of this model.	\n
Sigil of Corruption	This model has a 4+ invulnerable save.	\n
Chaos Lord	6"	2+	2+	4	4	5	4	9	3+	`,
     {inField: false, x: null, y: null},
     5,
     'circle',
     32,
     'black legion'
     ),
    new Model('prince',
     `Daemonic	This model has a 5+ invulnerable save.	\n
Death to the False Emperor.\n
Exalted Champion	Add 1 to your Warlord’s Attacks characteristic.	\n
You can re-roll hit rolls of 1 made for friendly <LEGION> and TZEENTCH DAEMON units within 6".\n
Death Hex	8	12"	If manifested, select a visible enemy unit within 12" of the psyker. Until the start of your next Psychic phase, that unit cannot take invulnerable saves.	\n
Smite	5	18"	Smite has a warp charge value of 5. If manifested, the closest visible enemy unit within 18" of the psyker suffers D3 mortal wounds (pg 181). If the result of the Psychic test was more than 10 the target suffers D6 mortal wounds instead.\n
12"	2+	2+	7	6	8	4	10	3+ \n
Malefic talon	Melee	Melee	User	-2	2	Each time this model fights, it can make 1 additional attack with this weapon. A model armed with two sets of malefic talons can make 3 additional attacks with them instead.`,
     {inField: false, x: null, y: null},
     8,
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
    new Model('10 chaos space marines',
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
    new Model('6 chaos space marines w ML',
     `6'', 3+, 3+, 4/4, w1, a1, ld 7, 3+\n
     champ: +1 attack, +1 ld.\n
     death to false emperor,
     hatefull \n
     missile launcher 48''  1/d6 8/d -2/0 d6/1`,
     {inField: false, x: null, y: null},
     6,
     'circle',
     35,
     'black legion'
     ),
    new Model('6 chaos space marines',
     `6'', 3+, 3+, 4/4, w1, a1, ld 7, 3+\n
     champ: +1 attack, +1 ld.\n
     death to false emperor,
     hatefull `,
     {inField: false, x: null, y: null},
     6,
     'circle',
     35,
     'black legion'
     ),
    new Model('havocs',
     `6'', 3+, 3+, 4/5, w1, a1, ld 7, 3+\n
     champ: +1 attack, +1 ld.\n
     death to false emperor,
     hatefull, can move and fire heavies normal`,
     {inField: false, x: null, y: null},
     5,
     'circle',
     35,
     'black legion'
     ),
new Model('rhino',
 `Explodes	 D6 before removing it from the battlefield; on a 6 it explodes, and each unit within 6" suffers D3 mortal wounds.	\n
Self-repair	Roll a D6 at the start of each of your turns; on a 6, this unit heals one wound.	\n
Smoke Launchers	Once per game; until your next Shooting phase your opponent must subtract 1 from all hit rolls for ranged weapons that target this vehicle.	\n
Chaos Rhino	10 (Legion) Infantry. No Terminator, Cult of Destruction, or Jump Pack	\n
Chaos Rhino	*	6+	*	6	7	10	*	8	3+	\n
Combi-bolter	24"	Rapid Fire 2	4	0	1	-	\n
Wound Track	Remaining W	Characteristic 1	Characteristic 2	Characteristic 3	Ref\n
Chaos Rhino1	6-10+	12"	3+	3	\n
Chaos Rhino2	3-5	6"	4+	D3\n\n
Chaos Rhino3	1-2	3"	5+	1`,
 {inField: false, x: null, y: null},
 10,
 'square',
 [78,120,0],
 'black legion'
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
    new Model('decimator',
     `Abilities	Description	Ref\n
Daemonic	The model has a 5+ invulnerable save.	\n
Explodes	When this model is destroyed, roll one D6 . On a 6 it explodes,  6" suffers D3 mortal wounds.	\n
Infernal Regeneration	At the start of your turn, this model regains 1 lost wound.	\n
Unit	M	WS	BS	S	T	W	A	Ld	Save	Ref\n
Decimator 1 (7+ wounds remaining)	9"	3+	3+	7	7	12	5	8	3+	\n
Decimator 2 (4-6 wounds remaining)	7"	4+	4+	7	7	N/A	5	8	3+	\n
Decimator 3 (1-3 wounds remaining)	5"	5+	5+	7	7	N/A	5	8	3+	\n
Weapon	Range	Type	S	AP	D	Abilities	Ref\n
Decimator butcher cannon	36"	Heavy 4	7	-2	2	-	\n
`,
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
