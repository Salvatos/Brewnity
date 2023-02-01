// Set item detail objects for itemDetails() (below)
const baseItems = {
	"None": { SaleValue: "", Type: "", Slot: "", Attack: "", Defense: "", Maneuver: "", Gambit: "", Effects: "" },
	"Adamant Iron": { SaleValue: "3 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Adamant Steel Nails": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Adamant Steel": { SaleValue: "5 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Alfvattin": { SaleValue: "", Type: "Item", Slot: "", Attack: "", Defense: "", Maneuver: "", Gambit: "", Effects: "+1 Initiative" },
	"Amulet of Beastly Strength": { SaleValue: "15 gold", Type: "Amulet", Slot: "Amulet", Attack: "", Defense: "", Maneuver: "", Gambit: "", Effects: "+2 Damage" },
	"Amulet of Leathery Hide": { SaleValue: "10 gold", Type: "Amulet", Slot: "Amulet", Attack: "", Defense: "", Maneuver: "", Gambit: "", Effects: "+5 Armor" },
	"Armor Fortification":			{ SaleValue: "",				Type: "Enchantment",	Slot: "",		Attack: "",						Defense: "",		Maneuver: "",		Gambit: "Replace: +2 Guard",		Effects: "" },
	"Awareness Salts":				{ SaleValue: "",				Type: "Item",			Slot: "",		Attack: "",						Defense: "",		Maneuver: "",		Gambit: "",		Effects: "+2 Initiative" },
	"Axewall Rib-Tickler Knife":	{ SaleValue: "10 gold",			Type: "Dagger",			Slot: "1H",		Attack: "+2 Damage",			Defense: "+2 Initiative",		Maneuver: "+2 Initiative",		Gambit: "+1 Damage, +2 Initiative",		Effects: "" },
	"Balanced Knife":				{ SaleValue: "6 silver",		Type: "Dagger",			Slot: "1H",		Attack: "+1 Damage",			Defense: "+1 Initiative",		Maneuver: "+2 Initiative",		Gambit: "+1d4 Initiative",		Effects: "" },
	"Battler’s Shield":				{ SaleValue: "25 gold",		Type: "Shield",				Slot: "1H",		Attack: "+1 Initiative",		Defense: "+2 Guard",		Maneuver: "+1 Guard, +1 Initiative",		Gambit: "",		Effects: "" },
	"Bearpaw Hammer":				{ SaleValue: "4 gold",			Type: "Hammer",			Slot: "2H",		Attack: "+2 Damage, +1 Initiative",		Defense: "+1 Initiative",		Maneuver: "+2 Damage",		Gambit: "+1d6 Damage, -2 Initiative",		Effects: "" },
	"Blackened Kingsilver": { SaleValue: "35 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Blazing Enchantment":			{ SaleValue: "",				Type: "Enchantment",	Slot: "",		Attack: "Add: +1 Damage",		Defense: "",		Maneuver: "Add: Convert Maneuver to Gambit",		Gambit: "",		Effects: "-2 Morale" },
	"Blinding Flares":				{ SaleValue: "",				Type: "Item",				Slot: "",		Attack: "",		Defense: "",		Maneuver: "",		Gambit: "Stun/1 Round",		Effects: "" },
	"Blood Tonic":					{ SaleValue: "",				Type: "Item",				Slot: "",		Attack: "",		Defense: "",		Maneuver: "",		Gambit: "",		Effects: "+2 Heal, Cure Poison" },
	"Blood-Dark Obsidian Gauntlets":{ SaleValue: "+d20 gold/month",	Type: "Gauntlets",				Slot: "Hands",		Attack: "+2 Poison/3 Rounds",		Defense: "",		Maneuver: "",		Gambit: "+1d8 Life Steal",		Effects: "+5 Armor, -1 Morale" },
	"Bloodbound Plate Armor":		{ SaleValue: "+d10 gold/month",	Type: "Breastplate",				Slot: "Chest",		Attack: "",		Defense: "+3 Heal",		Maneuver: "",		Gambit: "",		Effects: "+25 Armor" },
	"Bold Cloak":					{ SaleValue: "",				Type: "Cloak",				Slot: "Cloak",		Attack: "",		Defense: "",		Maneuver: "",		Gambit: "",		Effects: "+1d10 Leadership Untrained" },
	"Boots of Gentle Whispers":		{ SaleValue: "20 gold",			Type: "Boots",				Slot: "Boots",		Attack: "",		Defense: "",		Maneuver: "Select Any",		Gambit: "",		Effects: "+1 Armor" },
	"Boots of the Elder Wolf":	{ SaleValue: "+d20 gold/month",	Type: "Boots",	Slot: "Boots",	Attack: "+3 Damage",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+1 Any Untrained" },
	"Brazzle Nails": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Broken Armor": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Buckler Shield":	{ SaleValue: "",	Type: "Shield",	Slot: "1H",	Attack: "",	Defense: "+2 Guard",	Maneuver: "+1 Damage, +1 Initiative",	Gambit: "",	Effects: "" },
	"Burning Sand":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+3 Damage, +1 Initiative" },
	"Caltrops":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "Prevent/2 Rounds",	Effects: "" },
	"Cloak of Drunkenness":	{ SaleValue: "15 gold",	Type: "Cloak",	Slot: "Cloak",	Attack: "",	Defense: "+1 Initiative",	Maneuver: "",	Gambit: "+2 Initiative",	Effects: "" },
	"Conflagration Shield":	{ SaleValue: "+d6 gold/month",	Type: "Shield",	Slot: "1H",	Attack: "",	Defense: "+3 Guard",	Maneuver: "+1 Guard, +2 Initiative",	Gambit: "+1 Guard, +3 Damage",	Effects: "+5 Armor" },
	"Crossroads Armor":	{ SaleValue: "+d12 gold/month",	Type: "Breastplate",	Slot: "Chest",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+20 Armor" },
	"Crossroads Banners":	{ SaleValue: "",	Type: "Structure",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+1 Morale" },
	"Crossroads Mace":	{ SaleValue: "+d20 gold/month",	Type: "Mace",	Slot: "2H",	Attack: "+2 Damage, +1 Initiative",	Defense: "+1 Initiative",	Maneuver: "+1 Damage, +1 Initiative",	Gambit: "+2 Damage, +2 Initiative",	Effects: "" },
	"Crossroads Serving Amulet":	{ SaleValue: "+d4 gold/month",	Type: "Amulet",	Slot: "Amulet",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Dark-Breaker’s Helm":	{ SaleValue: "+d8 gold/month",	Type: "Helm",	Slot: "Head",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+15 Armor, +1 Morale" },
	"Deep Titan Gauntlets":	{ SaleValue: "+d20 gold/month",	Type: "Gauntlets",	Slot: "Hands",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+5 Armor, +1 Skill" },
	"Descending Blade":	{ SaleValue: "35 gold",	Type: "Sword",	Slot: "1H",	Attack: "+4 Damage",	Defense: "+1 Damage",	Maneuver: "+2 Damage",	Gambit: "+2 Damage, +1 Initiative",	Effects: "" },
	"Dexterous Reaver’s Sword":	{ SaleValue: "5 gold (15 for set)",	Type: "Sword",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+1 Damage, +1 Initiative",	Maneuver: "+1 Initiative",	Gambit: "+2 Bleed/3 Rounds",	Effects: "" },
	"Diamond Legion Boots":	{ SaleValue: "+d20 gold/month",	Type: "Boots",	Slot: "Boots",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+4 Armor, +1 Skill" },
	"Divining Gauntlets":	{ SaleValue: "",	Type: "Gauntlets",	Slot: "Hands",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+1d10 Scrounging Bonus" },
	"Dragon’s Fists":	{ SaleValue: "10 gold",	Type: "Mace",	Slot: "2H",	Attack: "+2 Damage, +1 Fire/3 Rounds",	Defense: "+1 Initiative",	Maneuver: "+1 Initiative",	Gambit: "+2 Fire/3 Rounds",	Effects: "" },
	"Dragonseye Ruby": { SaleValue: "4 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Dragonleather Armor":	{ SaleValue: "",	Type: "Breastplate",	Slot: "Chest",	Attack: "",	Defense: "",	Maneuver: "+3 Initiative",	Gambit: "",	Effects: "+5 Armor" },
	"Elfwar Helm":	{ SaleValue: "35 gold",	Type: "Helm",	Slot: "Head",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "+2 Guard",	Effects: "+3 Armor" },
	"Elisavel’s Letter":	{ SaleValue: "20 gold",	Type: "Treasure",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Elite Sprinter’s Boots":	{ SaleValue: "35 gold",	Type: "Boots",	Slot: "Boots",	Attack: "",	Defense: "",	Maneuver: "+2 Initiative",	Gambit: "+3 Initiative, Prevent/1 Round",	Effects: "+5 Armor" },
	"Embersword":	{ SaleValue: "35 gold",	Type: "Sword",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+2 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+1d6 Fire",	Effects: "" },
	"Enchanted Edgework":	{ SaleValue: "",	Type: "Enchantment",	Slot: "",	Attack: "Add: +1 Damage",	Defense: "",	Maneuver: "",	Gambit: "Add: +1 Damage",	Effects: "" },
	"Enchanted Goggles":	{ SaleValue: "",	Type: "Helm",	Slot: "Helm",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+2 Initiative" },
	"Enchanted Velvet": { SaleValue: "3 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Endurance Training Research":	{ SaleValue: "",	Type: "Bonus",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+10 Defense Permanent" },
	"Enduring Gauntlets":	{ SaleValue: "20 gold",	Type: "Gauntlets",	Slot: "Hands",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "+1 Guard",	Effects: "+3 Armor" },
	"Feast Supplies":	{ SaleValue: "",	Type: "Structure",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+1 Morale" },
	"Fighting Style Research":	{ SaleValue: "",	Type: "Bonus",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+1 Skill Permanent" },
	"Fire Oils":	{ SaleValue: "1 gold",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+1d4 Fire/3 Rounds" },
	"Fire Oils (2)":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+2 Fire/3 Rounds" },
	"First Aid Kit":	{ SaleValue: "1 silver",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+6 Heal" },
	"Firstwall Waking Water":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+3 Initiative" },
	"Fist and a Half Axe":	{ SaleValue: "8 silver",	Type: "Axe",	Slot: "2H",	Attack: "+3 Damage",	Defense: "+1 Damage",	Maneuver: "+1 Initiative, -2 Damage",	Gambit: "+6 Damage, -4 Initiative",	Effects: "" },
	"Flickering Knife":	{ SaleValue: "15 gold",	Type: "Dagger",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+1 Damage",	Maneuver: "+1 Damage, +1 Initiative",	Gambit: "+4 Damage, -2 Initiative",	Effects: "" },
	"Flintbreaker Armor":	{ SaleValue: "+d10 gold/month",	Type: "Breastplate",	Slot: "Chest",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+20 Armor" },
	"Flintbreaker Masterwork Armor":	{ SaleValue: "+d20 gold/month",	Type: "Breastplate",	Slot: "Chest",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "1d4 Boon",	Effects: "+20 Armor" },
	"Flintbreaker Shield":	{ SaleValue: "25 gold",	Type: "Shield",	Slot: "1H",	Attack: "+1 Damage, +1 Initiative",	Defense: "+2 Guard",	Maneuver: "+1 Guard",	Gambit: "",	Effects: "" },
	"Floodwader Boots":	{ SaleValue: "",	Type: "Boots",	Slot: "Boots",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "Item/1 Round",	Effects: "" },
	"Foe-Cutting Blade":	{ SaleValue: "1 gold",	Type: "Sword",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+1 Damage, +1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+2 Bleed/3 Rounds",	Effects: "" },
	"Forgebreaker":	{ SaleValue: "+d20 gold/month",	Type: "Axe",	Slot: "2H",	Attack: "+5 Damage",	Defense: "+2 Damage",	Maneuver: "+1 Initiative",	Gambit: "+10 Damage, -4 Initiative",	Effects: "" },
	"Fortified Bandages":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+5 Heal, +1 Initiative" },
	"Fortifying Rations":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+5 Defense Temporary (Adventure)" },
	"Four-Copper Knife":	{ SaleValue: "5 silver",	Type: "Dagger",	Slot: "1H",	Attack: "+1 Damage",	Defense: "+1 Initiative",	Maneuver: "+1 Initiative",	Gambit: "Action Choice",	Effects: "" },
	"Frigid Weaponmark":	{ SaleValue: "",	Type: "Enchantment",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "Replace: +5 Initiative",	Effects: "" },
	"Frostbiter Sword":	{ SaleValue: "+d6 gold/month",	Type: "Sword",	Slot: "1H",	Attack: "",	Defense: "+1 Damage",	Maneuver: "+1 Initiative, +2 Damage",	Gambit: "+5 Initiative",	Effects: "" },
	"Goblet":	{ SaleValue: "5 gold",	Type: "Treasure",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Goblin Knife":	{ SaleValue: "5 gold",	Type: "Dagger",	Slot: "1H",	Attack: "+1 Damage",	Defense: "+1 Damage",	Maneuver: "+1 Damage, +1 Initiative",	Gambit: "+1d4 Poison/3 Rounds",	Effects: "" },
	"Godsforge Full Helm":	{ SaleValue: "+d20 gold/month",	Type: "Helm",	Slot: "Head",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "1d4 Boon",	Effects: "+5 Armor" },
	"Godsjade": { SaleValue: "15 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Greenshine":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+2 Initiative, -1 Self Poison/3 Rounds" },
	"Gremlin’s Luckstone":	{ SaleValue: "1 gold",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "Re-Roll any Die" },
	"Halefist Dagger":	{ SaleValue: "1 gold",	Type: "Dagger",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+3 Bleed/3 Rounds",	Effects: "" },
	"Halefist Sword":	{ SaleValue: "8 silver",	Type: "Sword",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+2 Damage, +1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+2 Bleed/3 Rounds",	Effects: "" },
	"Hamramma’s Hammer":	{ SaleValue: "+d12 gold/month",	Type: "Hammer",	Slot: "2H",	Attack: "+2 Damage, +1 Initiative",	Defense: "+1 Initiative",	Maneuver: "+1 Damage, +1 Initiative",	Gambit: "+3 Damage",	Effects: "" },
	"Hardened Lifestone": { SaleValue: "2 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Healing Kit":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+8 Heal" },
	"Helm of Dancing Lights":	{ SaleValue: "20 gold",	Type: "Helm",	Slot: "Head",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "Stun/2 Rounds",	Effects: "+2 Armor" },
	"Helm of Divine Wrath":	{ SaleValue: "+d10 gold/month",	Type: "Helm",	Slot: "Helm",	Attack: "Add: +2 Initiative",	Defense: "",	Maneuver: "",	Gambit: "+2 Initiative, +3 Damage",	Effects: "+5 Armor" },
	"Helm of the Black Mile":	{ SaleValue: "",	Type: "Helm",	Slot: "Helm",	Attack: "Add: +1 Damage",	Defense: "+2 Guard",	Maneuver: "",	Gambit: "",	Effects: "+5 Armor" },
	"Helm of Timeless Reckoning":	{ SaleValue: "+d20 gold/month",	Type: "Helm",	Slot: "Helm",	Attack: "",	Defense: "+3 Initiative",	Maneuver: "",	Gambit: "",	Effects: "+5 Armor" },
	"Highland Rich":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+1 Damage/5 Rounds, -1 Initiative/5 Rounds" },
	"Holdmark Armor":	{ SaleValue: "",	Type: "Breastplate",	Slot: "Chest",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "+3 Guard",	Effects: "+10 Armor" },
	"Holdmark Belt":	{ SaleValue: "",	Type: "Belt",	Slot: "Belt",	Attack: "+1 Initiative",	Defense: "1 Guard",	Maneuver: "+1 Initiative",	Gambit: "+1 Initiative, +5 Heal",	Effects: "" },
	"Holdmark Boots":	{ SaleValue: "",	Type: "Boots",	Slot: "Boots",	Attack: "",	Defense: "+2 Guard",	Maneuver: "",	Gambit: "",	Effects: "+2 Armor" },
	"Holdmark Elite Axe":	{ SaleValue: "",	Type: "Axe",	Slot: "2H",	Attack: "+4 Damage",	Defense: "+2 Damage",	Maneuver: "+1 Initiative, -1 Damage",	Gambit: "+6 Damage, -1 Initiative",	Effects: "" },
	"Holdmark Gauntlets":	{ SaleValue: "",	Type: "Gauntlets",	Slot: "Hands",	Attack: "",	Defense: "+1 Guard",	Maneuver: "",	Gambit: "",	Effects: "+3 Armor" },
	"Holdmark Helm":	{ SaleValue: "",	Type: "Helm",	Slot: "Helm",	Attack: "",	Defense: "",	Maneuver: "+1 Guard",	Gambit: "",	Effects: "+4 Armor" },
	"Holdmark Shield":	{ SaleValue: "",	Type: "Shield",	Slot: "1H",	Attack: "+1 Guard",	Defense: "+2 Guard",	Maneuver: "+2 Guard",	Gambit: "Prevent/1 Round",	Effects: "" },
	"Holdmark Sword":	{ SaleValue: "",	Type: "Sword",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+2 Damage",	Maneuver: "+1 Damage, +1 Initiative",	Gambit: "+2 Bleed/3 Rounds",	Effects: "" },
	"Holdmaster’s Ring":	{ SaleValue: "Absolutely not for sale.",	Type: "Ring",	Slot: "Ring",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+1 Morale" },
	"Ill-Favored Halberd":	{ SaleValue: "6 silver",	Type: "Spear",	Slot: "2H",	Attack: "+4 Damage, -1 Initiative",	Defense: "+1 Guard, -1 Initiative",	Maneuver: "+2 Guard",	Gambit: "+2 Bleed/3 Rounds",	Effects: "" },
	"Kingsilver Nails": { SaleValue: "8 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Kniferounder’s Shield":	{ SaleValue: "25 gold",	Type: "Shield",	Slot: "1H",	Attack: "",	Defense: "+2 Guard",	Maneuver: "+1 Guard, +1 Initiative",	Gambit: "+2 Guard",	Effects: "" },
	"Lashaya’s Helm":	{ SaleValue: "10 gold",	Type: "Helm",	Slot: "Head",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+3 Armor" },
	"Laughing Knife":	{ SaleValue: "20 gold",	Type: "Dagger",	Slot: "1H",	Attack: "+1 Damage",	Defense: "+2 Damage, -1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+1 Damage, +1 Initiative",	Effects: "" },
	"Left Flanking Knife":	{ SaleValue: "7 silver",	Type: "Dagger",	Slot: "1H",	Attack: "+1 Damage",	Defense: "+1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+1 Initiative, +1 Damage",	Effects: "" },
	"Major Enchanted Ruby":	{ SaleValue: "45 gold",	Type: "Treasure",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Mark of Fortification":	{ SaleValue: "",	Type: "Enchantment",	Slot: "",	Attack: "",	Defense: "Replace: +1 Guard",	Maneuver: "",	Gambit: "Replace: +1 Guard",	Effects: "+5 Armor" },
	"Mawguard Boots":	{ SaleValue: "15 gold",	Type: "Boots",	Slot: "Boots",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+6 Armor" },
	"Mismatched Gauntlets":	{ SaleValue: "15 gold",	Type: "Gauntlets",	Slot: "Hands",	Attack: "",	Defense: "+2 Guard, -1 Initiative",	Maneuver: "",	Gambit: "",	Effects: "+2 Armor" },
	"Pacing Boots":	{ SaleValue: "5 gold",	Type: "Boots",	Slot: "Boots",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+4 Armor" },
	"Pieces of Scrap": { SaleValue: "3 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Poison Lacquer Kit":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+2 Poison/3 Rounds" },
	"Poisoned Gauntlets":	{ SaleValue: "+d8 gold/month",	Type: "Gauntlets",	Slot: "Hands",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "+1d4 Poison",	Effects: "" },
	"Pressed Elfmoss Sheets": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Quick Cinnabar": { SaleValue: "8 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Quickmarked Leather": { SaleValue: "5 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Radiant Gauntlets":	{ SaleValue: "+d10 gold/month",	Type: "Gauntlets",	Slot: "Hands",	Attack: "",	Defense: "+2 Guard",	Maneuver: "",	Gambit: "+1d4 Fire/2 Rounds",	Effects: "+3 Armor" },
	"Rage potions":	{ SaleValue: "10 gold",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+3 Damage, +10 Armor, -4 Guard/3 Rounds" },
	"Reference: Bardsong":	{ SaleValue: "",	Type: "Bonus",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+Bardsong" },
	"Reference: Dark Lore":	{ SaleValue: "",	Type: "Bonus",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+Dark Lore" },
	"Reference: Kroach":	{ SaleValue: "",	Type: "Bonus",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+Kroach" },
	"Right Flanking Knife":	{ SaleValue: "7 silver",	Type: "Dagger",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+1 Bleed/3 Rounds",	Effects: "" },
	"Royal Oaken Club":	{ SaleValue: "15 gold",	Type: "Club",	Slot: "1H",	Attack: "+3 Damage",	Defense: "",	Maneuver: "Stun",	Gambit: "+2 Damage, +1 Initiative",	Effects: "Cannot be used with Fire Oils" },
	"Ruined Bloodbound Plate": { SaleValue: "10 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Ruined Dark-Breaker’s Helm": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Ruined Frostbiter Sword": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Ruined Pair of Wall-Runners": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Ruined Poisoned Gauntlets": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Ruined Stormtaker Shield": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Ruined Survivor’s Axe": { SaleValue: "2 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Ruined Vanguard Armor": { SaleValue: "5 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Scale Armor":	{ SaleValue: "",	Type: "Breastplate",	Slot: "Chest",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+5 Armor" },
	"Scrap": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Sentry’s Shield":	{ SaleValue: "25 gold",	Type: "Shield",	Slot: "1H",	Attack: "",	Defense: "+2 Guard",	Maneuver: "+1 Initiative",	Gambit: "Use 2 Items, -2 Initiative",	Effects: "" },
	"Shadedark Knife":	{ SaleValue: "+d6 gold/month",	Type: "Dagger",	Slot: "1H",	Attack: "+2 Damage, +1 Initiative",	Defense: "+1 Guard, -1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+1 Bleed/3 Rounds, +1 Initiative",	Effects: "" },
	"Sharpening Charm":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+1 Damage/5 Rounds" },
	"Shield of the Unflinching":	{ SaleValue: "+d20 gold/month",	Type: "Shield",	Slot: "1H",	Attack: "+1 Damage",	Defense: "+2 Guard",	Maneuver: "+1 Guard, +1 Initiative",	Gambit: "+2 Bleed/3 Rounds",	Effects: "" },
	"Shieldgnawing Axe":	{ SaleValue: "10 gold",	Type: "Axe",	Slot: "2H",	Attack: "+4 Damage",	Defense: "+1 Damage",	Maneuver: "+1 Initiative, -1 Damage",	Gambit: "+8 Damage, -4 Initiative",	Effects: "" },
	"Shining Kingsilver Flail":	{ SaleValue: "10 gold",	Type: "Flail",	Slot: "2H",	Attack: "+3 Damage",	Defense: "+1 Damage",	Maneuver: "+1 Initiative, +1 Damage",	Gambit: "Stun/1 Round",	Effects: "" },
	"Sifrun’s Breath":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "+4 Damage, -2 Guard/3 Rounds",	Effects: "" },
	"Sinister Reaver’s Sword":	{ SaleValue: "5 gold (15 for set)",	Type: "Sword",	Slot: "1H",	Attack: "+1 Damage",	Defense: "+1 Damage, +1 Initiative",	Maneuver: "+3 Initiative",	Gambit: "+1 Guard",	Effects: "" },
	"Six Claw Hara-moks":	{ SaleValue: "5 silver",	Type: "Fist",	Slot: "2H",	Attack: "+2 Damage, +1 Poison/3 Rounds",	Defense: "+1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+1d4 Poison/3 Rounds",	Effects: "" },
	"Slate Cloak":	{ SaleValue: "10 gold",	Type: "Cloak",	Slot: "Cloak",	Attack: "",	Defense: "",	Maneuver: "+1 Guard, +2 Initiative",	Gambit: "",	Effects: "" },
	"Smoke Bomb":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+1 Initiative" },
	"Softstrider Armor":	{ SaleValue: "10 gold (40 for set)",	Type: "Breastplate",	Slot: "Chest",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+15 Armor" },
	"Softstrider Gauntlets":	{ SaleValue: "10 gold (40 for set)",	Type: "Gauntlets",	Slot: "Hands",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+2 Armor" },
	"Softstrider Helm":	{ SaleValue: "10 gold (40 for set)",	Type: "Helm",	Slot: "Head",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "1d4 Boon",	Effects: "+2 Armor" },
	"Sparking Weaponmark":	{ SaleValue: "",	Type: "Enchantment",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "Replace: +2 Damage, +3 Inititative",	Effects: "" },
	"Spear of the Wall":	{ SaleValue: "30 gold",	Type: "Spear",	Slot: "2H",	Attack: "+2 Damage, +1 Initiative",	Defense: "+1 Guard, +2 Initiative",	Maneuver: "+1 Guard, +2 Initiative",	Gambit: "+2 Bleed/3 Rounds",	Effects: "" },
	"Stalker’s Dagger":	{ SaleValue: "15 gold",	Type: "Dagger",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+2 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+2 Damage, +2 Initiative",	Effects: "" },
	"Steel": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Stormtaker Shield":	{ SaleValue: "+d8 gold/month",	Type: "Shield",	Slot: "1H",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "+5 Damage, -2 Initiative",	Effects: "Immunity to Electrical damage" },
	"Stout":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+1 Guard/5 Rounds" },
	"Supple Boar Leather": { SaleValue: "1 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Survivor’s Axe":	{ SaleValue: "+d8 gold/month",	Type: "Axe",	Slot: "2H",	Attack: "+2 Damage, +1 Heal",	Defense: "+1 Heal",	Maneuver: "+1 Initiative, +1 Heal",	Gambit: "+2 Damage, +4 Heal",	Effects: "" },
	"Sword of Dreaming Shadows":	{ SaleValue: "+d20 gold/month",	Type: "Sword",	Slot: "1H",	Attack: "1 Life Steal",	Defense: "+1 Initiative",	Maneuver: "+1 Initiative",	Gambit: "+1d8 Life Steal",	Effects: "-1 Morale" },
	"Thrice-Blessed Axe":	{ SaleValue: "35 gold",	Type: "Axe",	Slot: "2H",	Attack: "+3 Damage",	Defense: "+1 Damage",	Maneuver: "+1 Initiative, -1 Damage",	Gambit: "+9 Damage, -4 Initiative",	Effects: "" },
	"Throwing Knives":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+2 Damage" },
	"Thrunlast’s Gold": { SaleValue: "40 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Thumper":	{ SaleValue: "",	Type: "Fist",	Slot: "1H",	Attack: "+1 Damage",	Defense: "+1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "Prevent/2 Rounds",	Effects: "" },
	"Thurvik":	{ SaleValue: "",	Type: "Fist",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+1 Damage",	Maneuver: "+1 Damage",	Gambit: "Action Choice/1 Round",	Effects: "" },
	"Timeless Ring":	{ SaleValue: "5 gold",	Type: "Ring",	Slot: "Ring",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "1d4 Boon",	Effects: "+2 Armor" },
	"Torchguard Sword":	{ SaleValue: "30 gold",	Type: "Sword",	Slot: "1H",	Attack: "+3 Damage, +1 Initiative",	Defense: "+1 Guard, +1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+10 Ancient Evil Bane",	Effects: "" },
	"Traveler’s Dagger":	{ SaleValue: "3 silver",	Type: "Dagger",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+2 Bleed/3 Rounds",	Effects: "" },
	"Trollcrusher":	{ SaleValue: "40 gold",	Type: "Hammer",	Slot: "2H",	Attack: "+4 Damage, +1 Initiative",	Defense: "",	Maneuver: "+3 Damage",	Gambit: "Stun/1 Round",	Effects: "" },
	"Trollsmasher Gauntlet":	{ SaleValue: "35 gold",	Type: "Gauntlets",	Slot: "Hands",	Attack: "",	Defense: "",	Maneuver: "+3 Damage, +1 Initiative",	Gambit: "",	Effects: "" },
	"Umbral Steel": { SaleValue: "5 gold",	Type: "Material",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "" },
	"Vanguard Armor":	{ SaleValue: "+d8 gold/month",	Type: "Breastplate",	Slot: "Chest",	Attack: "",	Defense: "+2 Guard",	Maneuver: "+1 Guard, +1 Initiative",	Gambit: "",	Effects: "+5 Armor, +1d10 Leadership Untrained" },
	"Vitality Draught":	{ SaleValue: "",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+5 Defense Permanent" },
	"Wall-Runners":	{ SaleValue: "+d8 gold/month",	Type: "Boots",	Slot: "Boots",	Attack: "",	Defense: "",	Maneuver: "+1 Initiative",	Gambit: "+1 Initiative",	Effects: "+3 Armor, +d10 Pathfinding Untrained" },
	"Wardstone":	{ SaleValue: "1 gold",	Type: "Item",	Slot: "",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "",	Effects: "+4 Guard/1 Round" },
	"Warholder Sword":	{ SaleValue: "5 silver",	Type: "Sword",	Slot: "1H",	Attack: "+1 Damage",	Defense: "+1 Damage, +1 Initiative",	Maneuver: "+1 Initiative",	Gambit: "Prevent/4 Rounds",	Effects: "" },
	"Westfall Gauntlets":	{ SaleValue: "25 gold",	Type: "Gauntlets",	Slot: "Hands",	Attack: "",	Defense: "+1 Guard",	Maneuver: "",	Gambit: "",	Effects: "+3 Armor" },
	"Wicked Knife":	{ SaleValue: "5 silver",	Type: "Dagger",	Slot: "1H",	Attack: "+1 Damage",	Defense: "+1 Initiative",	Maneuver: "+2 Initiative",	Gambit: "+1d4 Poison/3 Rounds",	Effects: "" },
	"Wicked Cutlass":	{ SaleValue: "30 gold",	Type: "Sword",	Slot: "1H",	Attack: "+2 Damage",	Defense: "+1 Initiative",	Maneuver: "+1 Bleed/3 Rounds",	Gambit: "+3 Bleed/3 Rounds",	Effects: "+8 Armor" },
	"Wooden Ring":	{ SaleValue: "5 gold",	Type: "Ring",	Slot: "Ring",	Attack: "",	Defense: "",	Maneuver: "",	Gambit: "+1 Guard",	Effects: "" },
	"Worldshaker Warhammer":	{ SaleValue: "+d20 gold/month",	Type: "Hammer",	Slot: "2H",	Attack: "+3 Damage, +1 Initiative",	Defense: "",	Maneuver: "+2 Damage, +1 Initiative",	Gambit: "Stun/1 Round",	Effects: "" }
};

// Create a placeholder collection of custom items when none exists
let customItems = {};

// Build inventory dropdowns
buildInventory(baseItems);

function buildInventory(allItems) {
	Object.keys(allItems).forEach(key => {
		switch (key) {
			case "None": // None goes everywhere
				let dropdowns = document.querySelectorAll("#inventory select");
				dropdowns.forEach((child, index) => {
					child.innerHTML += `<option value="${key}">${key}</option>`;
				});
				break;
			case "Thumper": // Specific slot
				document.getElementById("LeftHand").innerHTML += `<option value="${key}" selected="selected">${key}</option>`;
				break;
			case "Thurvik": // Specific slot
				document.getElementById("RightHand").innerHTML += `<option value="${key}" selected="selected">${key}</option>`;
				break;
			default: // Everything else goes to all bags if it has a slot, or it’s an item, treasure or material
				if (allItems[key].Slot != "" || allItems[key].Type == "Item" || allItems[key].Type == "Treasure" || allItems[key].Type == "Material") {
					let bags = document.querySelectorAll("#inventory select[id^='Bag']");
					bags.forEach((child, index) => {
						child.innerHTML += `<option value="${key}">${key}</option>`;
					});
				}
				else {
					document.getElementById("NonEquipItem").innerHTML +=`<option value="${key}">${key}</option>`;
				}
				
				switch (allItems[key].Slot) {
					case "1H":
					case "2H":
						document.getElementById("LeftHand").innerHTML +=`<option value="${key}">${key}</option>`;
						document.getElementById("RightHand").innerHTML +=`<option value="${key}">${key}</option>`;
						document.getElementById("Spare").innerHTML +=`<option value="${key}">${key}</option>`;
						break;
					case "Head":
						document.getElementById("Helmet").innerHTML +=`<option value="${key}">${key}</option>`;
						break;
					case "Chest":
						document.getElementById("Body").innerHTML +=`<option value="${key}">${key}</option>`;
						break;
					case "Boots":
						document.getElementById("Boots").innerHTML +=`<option value="${key}">${key}</option>`;
						break;
					case "Hands":
						document.getElementById("Gloves").innerHTML +=`<option value="${key}">${key}</option>`;
						break;
					case "Amulet":
						document.getElementById("Amulet").innerHTML +=`<option value="${key}">${key}</option>`;
						break;
					case "Ring":
						document.getElementById("Ring1").innerHTML +=`<option value="${key}">${key}</option>`;
						document.getElementById("Ring2").innerHTML +=`<option value="${key}">${key}</option>`;
						break;
					case "Belt":
						document.getElementById("Belt").innerHTML +=`<option value="${key}">${key}</option>`;
						break;
					case "Cloak":
						document.getElementById("Cloak").innerHTML +=`<option value="${key}">${key}</option>`;
						break;
				}
		}
	});
}

// Validate coins on load, for page refreshes
coinLimit();

function createCharacter(easymode = false) {
	// Clear everything
	let numbers = document.querySelectorAll('input[type="number"]');
	numbers.forEach((child, index) => {
		child.value = 0;
	});
	let checkbox = document.querySelectorAll('input[type="checkbox"]');
	checkbox.forEach((child, index) => {
		child.checked = false;
	});
	let text = document.querySelectorAll(':is(input[type="text"], textarea)');
	text.forEach((child, index) => {
		child.value = "";
	});
	let select = document.querySelectorAll('select');
	select.forEach((child, index) => {
		// Set hands to fists
		if (child.id == "LeftHand") {
			child.value = "Thumper";
		}
		else if (child.id == "RightHand") {
			child.value = "Thurvik";
		}
		// Add starting healing kit
		else if (child.id == "Bag1") {
			child.value = "Healing Kit";
		}
		// Clear the rest
		else {
			child.value = "None";
		}
		child.dispatchEvent(new Event('change'));
	});
	
	// Roll stats
	document.getElementById("CurrentDefense").value = (easymode) ? 30 : Math.floor(Math.random() * 10) + 1 + 20;
	document.getElementById("MaxDefense").value = document.getElementById("CurrentDefense").value;
	document.getElementById("Skill").value = (easymode) ? 20 : Math.floor(Math.random() * 10) + 1 + 10;
	document.getElementById("Copper").value = (easymode) ? 10 : Math.floor(Math.random() * 10) + 1;
}

function applyWound() {
	// Roll Defense penalty
	let decrease = Math.floor(Math.random() * 4) + 1;
	document.getElementById("MaxDefense").value = document.getElementById("MaxDefense").value - decrease;
	document.getElementById("CurrentDefense").value = document.getElementById("MaxDefense").value;
	document.getElementById("CombatDefense").value = (document.getElementById("CurrentDefense").value * 1) + (document.getElementById("Armor").value * 1);
	document.getElementById("Glory").value = document.getElementById("Glory").value * 1 + 1;
	document.getElementById("WoundFeedback").innerHTML = `Wound applied: Defense decreased by ${decrease}.`;
	if (document.getElementById("MaxDefense").value < 1) {
		document.getElementById("WoundFeedback").innerHTML += ` Game over <strong>☠</strong>`;
	}
	document.getElementById("WoundFeedback").animate(
		[
			{ fontSize: '15px', opacity: 1, offset: 0 },
			{ fontSize: '15px', opacity: 1, offset: 0.8 },
			{ fontSize: 0, opacity: 0, offset: 1 }
		], {
		duration: 8000,
		easing: 'ease-in',
		fill: 'forwards'
	});
}

function validateHands() {
	if (
	(document.getElementById("LeftHandOutput").innerHTML.match("2H") && document.getElementById("RightHandOutput").innerHTML != "") ||
	(document.getElementById("RightHandOutput").innerHTML.match("2H") && document.getElementById("LeftHandOutput").innerHTML != "")
	) {
		document.getElementById("InventoryWarning").style.display = "";
	}
	else {
		document.getElementById("InventoryWarning").style.display = "none";
	}
}

function coinLimit() {
	let coinage = (document.getElementById("Copper").value * 1) +
	(document.getElementById("Silver").value * 1) +
	(document.getElementById("Gold").value * 1);
	document.getElementById("Coinage").innerHTML = coinage + "/100";
	
	if (coinage > 100) {
		document.getElementById("Coinage").style.color = "red";
	}
	else {
		document.getElementById("Coinage").style.color = "black";
	}
}

function CombatStart() {
	document.getElementById("Initiative").value = document.getElementById("Skill").value - document.getElementById("EnemySkill").value;
	document.getElementById("CombatDefense").value = (document.getElementById("CurrentDefense").value * 1) + (document.getElementById("Armor").value * 1);
	document.combatRound = 1;
	document.getElementById("CombatRoll").innerHTML = "";
}

function rollCombatDie() {
	// Roll die and get Initiative
	var d10 = Math.floor(Math.random() * 10) + 1;
	var init = document.getElementById("Initiative").value;
	var baseEdmg = 0;
	var basePdmg = 0;
	var actions = "";
	
	// Check damage results
	if (init < -10) {
		baseEdmg = 1;
		basePdmg = 7;
		if (d10 == 10 || d10 == 1 || d10 == 2 || d10 == 7 || d10 == 8) {
			actions = actions + " Claw ";
		}
		if (d10 == 3 || d10 == 6) {
			actions = actions + " Attack ";
		}
		if (d10 == 3 || d10 == 5 || d10 == 6 || d10 == 8 || d10 == 9) {
			actions = actions + " Defense ";
		}
		if (d10 == 4 || d10 == 5 || d10 == 7 || d10 == 9) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 4) {
			actions = actions + " Gambit ";
		}
	}
	else if (init == -10 || init == -9) {
		baseEdmg = 1;
		basePdmg = 6;
		if (d10 == 10 || d10 == 1|| d10 == 5 || d10 == 9) {
			actions = actions + " Claw ";
		}
		if (d10 == 3 || d10 == 5 || d10 == 7) {
			actions = actions + " Attack ";
		}
		if (d10 == 2 || d10 == 3 || d10 == 4 || d10 == 6 || d10 == 7 || d10 == 8) {
			actions = actions + " Defense ";
		}
		if (d10 == 2 || d10 == 4 || d10 == 6 || d10 == 8) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 9) {
			actions = actions + " Gambit ";
		}
	}
	else if (init == -8 || init == -7) {
		baseEdmg = 2;
		basePdmg = 5;
		if (d10 == 10 || d10 == 4 || d10 == 6) {
			actions = actions + " Claw ";
		}
		if (d10 == 1 || d10 == 2 || d10 == 4 || d10 == 7) {
			actions = actions + " Attack ";
		}
		if (d10 == 1 || d10 == 3 || d10 == 5 || d10 == 7 || d10 == 8) {
			actions = actions + " Defense ";
		}
		if (d10 == 2 || d10 == 5 || d10 == 6 || d10 == 8) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 3) {
			actions = actions + " Gambit ";
		}
		if (d10 == 9) {
			actions = actions + " Any ";
		}
	}
	else if (init == -6 || init == -5) {
		baseEdmg = 2;
		basePdmg = 4;
		if (d10 == 10 || d10 == 3 || d10 == 7) {
			actions = actions + " Claw ";
		}
		if (d10 == 2 || d10 == 5 || d10 == 6 || d10 == 7) {
			actions = actions + " Attack ";
		}
		if (d10 == 1 || d10 == 2 || d10 == 4 || d10 == 5 || d10 == 8) {
			actions = actions + " Defense ";
		}
		if (d10 == 1 || d10 == 3 || d10 == 4 || d10 == 8) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 6) {
			actions = actions + " Gambit ";
		}
		if (d10 == 9) {
			actions = actions + " Any ";
		}
	}
	else if (init == -4 || init == -3) {
		baseEdmg = 3;
		basePdmg = 4;
		if (d10 == 10 || d10 == 2 || d10 == 3) {
			actions = actions + " Claw ";
		}
		if (d10 == 1 || d10 == 5 || d10 == 6 || d10 == 8) {
			actions = actions + " Attack ";
		}
		if (d10 == 1 || d10 == 2 || d10 == 4 || d10 == 6 || d10 == 7) {
			actions = actions + " Defense ";
		}
		if (d10 == 3 || d10 == 4 || d10 == 5 || d10 == 8) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 7) {
			actions = actions + " Gambit ";
		}
		if (d10 == 9) {
			actions = actions + " Any ";
		}
	}
	else if (init == -2 || init == -1) {
		baseEdmg = 3;
		basePdmg = 3;
		if (d10 == 10 || d10 == 1 || d10 == 3) {
			actions = actions + " Claw ";
		}
		if (d10 == 4 || d10 == 6 || d10 == 7 || d10 == 8) {
			actions = actions + " Attack ";
		}
		if (d10 == 2 || d10 == 3 || d10 == 5 || d10 == 6 || d10 == 8) {
			actions = actions + " Defense ";
		}
		if (d10 == 1 || d10 == 2 || d10 == 4 || d10 == 7) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 5) {
			actions = actions + " Gambit ";
		}
		if (d10 == 9) {
			actions = actions + " Any ";
		}
	}
	else if (init == 0) {
		baseEdmg = 3;
		basePdmg = 2;
		if (d10 == 10 || d10 == 1 || d10 == 2) {
			actions = actions + " Claw ";
		}
		if (d10 == 3 || d10 == 6 || d10 == 7 || d10 == 8) {
			actions = actions + " Attack ";
		}
		if (d10 == 1 || d10 == 3 || d10 == 4 || d10 == 5) {
			actions = actions + " Defense ";
		}
		if (d10 == 4 || d10 == 5 || d10 == 6 || d10 == 8) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 2 || d10 == 7) {
			actions = actions + " Gambit ";
		}
		if (d10 == 9) {
			actions = actions + " Any ";
		}
	}
	else if (init == 1 || init == 2) {
		baseEdmg = 4;
		basePdmg = 2;
		if (d10 == 10 || d10 == 2 || d10 == 4) {
			actions = actions + " Claw ";
		}
		if (d10 == 1 || d10 == 5 || d10 == 6 || d10 == 7 || d10 == 8) {
			actions = actions + " Attack ";
		}
		if (d10 == 3 || d10 == 5 || d10 == 6 || d10 == 7) {
			actions = actions + " Defense ";
		}
		if (d10 == 1 || d10 == 2 || d10 == 3 || d10 == 4) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 8) {
			actions = actions + " Gambit ";
		}
		if (d10 == 9) {
			actions = actions + " Any ";
		}
	}
	else if (init == 3 || init == 4) {
		baseEdmg = 5;
		basePdmg = 2;
		if (d10 == 10 || d10 == 4 || d10 == 7) {
			actions = actions + " Claw ";
		}
		if (d10 == 2 || d10 == 3 || d10 == 4 || d10 == 7 || d10 == 8) {
			actions = actions + " Attack ";
		}
		if (d10 == 1 || d10 == 3 || d10 == 5 || d10 == 6) {
			actions = actions + " Defense ";
		}
		if (d10 == 2 || d10 == 5 || d10 == 6 || d10 == 8) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 1) {
			actions = actions + " Gambit ";
		}
		if (d10 == 9) {
			actions = actions + " Any ";
		}
	}
	else if (init == 5 || init == 6) {
		baseEdmg = 6;
		basePdmg = 2;
		if (d10 == 10 || d10 == 3 || d10 == 8) {
			actions = actions + " Claw ";
		}
		if (d10 == 1 || d10 == 4 || d10 == 5 || d10 == 7 || d10 == 8) {
			actions = actions + " Attack ";
		}
		if (d10 == 1 || d10 == 2 || d10 == 6 || d10 == 7) {
			actions = actions + " Defense ";
		}
		if (d10 == 2 || d10 == 3 || d10 == 5 || d10 == 6) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 4) {
			actions = actions + " Gambit ";
		}
		if (d10 == 9) {
			actions = actions + " Any ";
		}
	}
	else if (init == 7 || init == 8) {
		baseEdmg = 7;
		basePdmg = 1;
		if (d10 == 10 || d10 == 1 || d10 == 4) {
			actions = actions + " Claw ";
		}
		if (d10 == 1 || d10 == 2 || d10 == 6 || d10 == 7 || d10 == 8) {
			actions = actions + " Attack ";
		}
		if (d10 == 2 || d10 == 3 || d10 == 4 || d10 == 7) {
			actions = actions + " Defense ";
		}
		if (d10 == 3 || d10 == 5 || d10 == 6 || d10 == 8) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 5) {
			actions = actions + " Gambit ";
		}
		if (d10 == 9) {
			actions = actions + " Any ";
		}
	}
	else if (init == 9 || init == 10) {
		baseEdmg = 8;
		basePdmg = 1;
		if (d10 == 10 || d10 == 7) {
			actions = actions + " Claw ";
		}
		if (d10 == 2 || d10 == 3 || d10 == 5 || d10 == 6 || d10 == 7) {
			actions = actions + " Attack ";
		}
		if (d10 == 1 || d10 == 3 || d10 == 4 || d10 == 5) {
			actions = actions + " Defense ";
		}
		if (d10 == 10 || d10 == 1 || d10 == 2 || d10 == 4) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 6) {
			actions = actions + " Gambit ";
		}
		if (d10 == 8 || d10 == 9) {
			actions = actions + " Any ";
		}
	}
	else if (init > 10) {
		baseEdmg = 9;
		basePdmg = 1;
		if (d10 == 10) {
			actions = actions + " Claw ";
		}
		if (d10 == 10 || d10 == 1 || d10 == 2 || d10 == 3 || d10 == 6) {
			actions = actions + " Attack ";
		}
		if (d10 == 2 || d10 == 4 || d10 == 5) {
			actions = actions + " Defense ";
		}
		if (d10 == 1 || d10 == 3 || d10 == 5 || d10 == 6) {
			actions = actions + " Maneuver ";
		}
		if (d10 == 4) {
			actions = actions + " Gambit ";
		}
		if (d10 == 7 || d10 == 8 || d10 == 9) {
			actions = actions + " Any ";
		}
	}
	
	actions = actions.replace("Claw  ", "Claw and ");
	actions = actions.replace("  ", " or ");
	
	// Display roll and update round counter
	document.getElementById("CombatRoll").innerHTML = `Round ${document.combatRound}: rolled <b>${d10}</b>.`;
	document.combatRound++;
	document.combatRoll = d10;
	document.getElementById("CombatRoll").animate(
		[
			{ color: '#1f6c14' },
			{ color: 'black' }
		], {
		duration: 5000,
		easing: 'ease-in-out',
		fill: 'forwards'
	});
	
	document.getElementById("EnemyDamage").innerHTML = baseEdmg;
	document.getElementById("PlayerDamage").innerHTML = basePdmg;
	document.getElementById("AvailableActions").innerHTML = actions;
}

function rollD(faces, spend = false) {
	// Roll die and display roll
	var dieroll = Math.floor(Math.random() * faces) + 1;
	document.getElementById("dieroll").innerHTML = "You rolled a d" +faces+ " with a result of: <b>"+dieroll+"</b>.";
	document.getElementById("dieroll").animate(
		[
			{ color: '#1f6c14' },
			{ color: 'black' }
		], {
		duration: 5000,
		easing: 'ease-in-out',
		fill: 'forwards'
	});
	
	// Spend boon
	if (spend) {
		document.getElementById("d"+faces+"Boons").value -= 1;
	}
}
	
function itemDetails(slotOutput) {
	// Determine selected item and fetch data
	var selectedItem = document.getElementById(slotOutput);
	var selectedValue = selectedItem.options[selectedItem.selectedIndex].value;
	let allItems = {};
	Object.assign(allItems, baseItems, customItems);
	var ObjectImLookingFor = allItems[ selectedValue ];
	var statDump = "";
	if (ObjectImLookingFor.Type != "") { statDump += "<b>Type:</b> " + ObjectImLookingFor.Type; }
	if (ObjectImLookingFor.Slot != "") { statDump += " <b>Slot:</b> " + ObjectImLookingFor.Slot; }
	if (ObjectImLookingFor.SaleValue != "") { statDump += " <b>Sale value:</b> " + ObjectImLookingFor.SaleValue; }
	if (ObjectImLookingFor.Attack != "") { statDump += " <b>Attack:</b> " + ObjectImLookingFor.Attack; }
	if (ObjectImLookingFor.Defense != "") { statDump += " <b>Defense:</b> " + ObjectImLookingFor.Defense; }
	if (ObjectImLookingFor.Maneuver != "") { statDump += " <b>Maneuver:</b> " + ObjectImLookingFor.Maneuver; }
	if (ObjectImLookingFor.Gambit != "") { statDump += " <b>Gambit:</b> " + ObjectImLookingFor.Gambit; }
	if (ObjectImLookingFor.Effects != "") { statDump += " <b>Effects:</b> " + ObjectImLookingFor.Effects; }
	
	// Add definitions
	statDump = statDump.replace(/Action Choice/g, '<abbr title="You may choose one or more actions to apply immediately">Action Choice</abbr>');
	statDump = statDump.replace(/Add/g, '<abbr title="Add an action to a given slot">Add</abbr>');
	statDump = statDump.replace(/Always/g, '<abbr title="This action is always available regardless of your rolls">Always</abbr>');
	statDump = statDump.replace(/Armor/g, '<abbr title="Added to your current Defense when combat begins">Armor</abbr>');
	statDump = statDump.replace(/Bleed/g, '<abbr title="Inflicts x damage per round, at the start of the round">Bleed</abbr>');
	statDump = statDump.replace(/Boon/g, '<abbr title="Gain a boon of the specified type">Boon</abbr>');
	statDump = statDump.replace(/Convert/g, '<abbr title="Optionally use a different type of action when the specified type is available">Convert</abbr>');
	statDump = statDump.replace(/Cure/g, '<abbr title="Removes a damage-over-time effect">Cure</abbr>');
	statDump = statDump.replace(/Defense Permanent/g, '<abbr title="Permanently increases your Max Defense">Defense Permanent</abbr>');
	statDump = statDump.replace(/Disarm/g, '<abbr title="Replace one equipped weapon with the corresponding fist; cannot use this weapon until end of combat">Disarm</abbr>');
	statDump = statDump.replace(/Enchantment/g, '<abbr title="Use the Custom Items section below to create an enchanted copy of a base item">Enchantment</abbr>');
	statDump = statDump.replace(/Fire/g, '<abbr  title="Inflicts x damage per round, at the start of the round">Fire</abbr>');
	statDump = statDump.replace(/Guard/g, '<abbr title="Cancel x damage this round">Guard</abbr>');
	statDump = statDump.replace(/Heal/g, '<abbr title="Regain x Defense">Heal</abbr>');
	statDump = statDump.replace(/Item(?=\/)/g, '<abbr title="Optionally use an item in your bag in the current combat phase">Item</abbr>');
	statDump = statDump.replace(/Life Steal/g, '<abbr title="Deal x damage and regain as much Defense">Life Steal</abbr>');
	statDump = statDump.replace(/Material/g, '<abbr title="Can be used between adventures if you are a Forgecrafter; otherwise, only good for selling">Material</abbr>');
	statDump = statDump.replace(/Poison/g, '<abbr  title="Inflicts x damage per round, at the start of the round">Poison</abbr>');
	statDump = statDump.replace(/Prevent/g, '<abbr title="Cancel Claw actions for x rounds">Prevent</abbr>');
	statDump = statDump.replace(/Regenerate/g, '<abbr title="Heals x Defense for y rounds">Regenerate</abbr>');
	statDump = statDump.replace(/Replace/g, '<abbr title="Replaces one action’s effect with another">Replace</abbr>');
	statDump = statDump.replace(/Select/g, '<abbr title="You may use the specified action immediately">Select</abbr>');
	statDump = statDump.replace(/Shatter/g, '<abbr title="Destroy an equipped item of your choice among Hand, Head and Chest slots">Shatter</abbr>');
	statDump = statDump.replace(/Skill Permanent/g, '<abbr title="Permanently increases your Skill">Skill Permanent</abbr>');
	statDump = statDump.replace(/Slow/g, '<abbr title="Decreases Initiative by x for y rounds">Slow</abbr>');
	statDump = statDump.replace(/Sneak Attack/g, '<abbr title="You may use a Gambit before combat begins">Sneak Attack</abbr>');
	statDump = statDump.replace(/Stun/g, '<abbr title="Your enemy cannot deal damage and Claw effects are cancelled during x rounds">Stun</abbr>');
	statDump = statDump.replace(/Untrained/g, '<abbr title="Adds x to your untrained skill checks">Untrained</abbr>');
	
	// Display relevant info to appropriate line
	document.getElementById(slotOutput + "Output").innerHTML = statDump;
}

function saveToStorage(mode) {
	let saveObject = {
		Skill: document.getElementById("Skill").value,
		Morale: document.getElementById("Morale").value,
		Glory: document.getElementById("Glory").value,
		CurrentDefense: document.getElementById("CurrentDefense").value,
		MaxDefense: document.getElementById("MaxDefense").value,
		Armor: document.getElementById("Armor").value,
		Bardsong: document.getElementById("Bardsong").checked,
		DarkBreaker: document.getElementById("DarkBreaker").checked,
		Forgecraft: document.getElementById("Forgecraft").checked,
		Healing: document.getElementById("Healing").checked,
		KroachKin: document.getElementById("KroachKin").checked,
		Leadership: document.getElementById("Leadership").checked,
		Mechanics: document.getElementById("Mechanics").checked,
		Pathfinding: document.getElementById("Pathfinding").checked,
		Scrounging: document.getElementById("Scrounging").checked,
		Skullduggery: document.getElementById("Skullduggery").checked,
		WeaponExpert: document.getElementById("WeaponExpert").checked,
		WeaponExpertise: document.getElementById("WeaponExpertise").value,
		Initiative: document.getElementById("Initiative").value,
		EnemySkill: document.getElementById("EnemySkill").value,
		EnemyDefense: document.getElementById("EnemyDefense").value,
		ClawText: document.getElementById("ClawText").value,
		CombatDefense: document.getElementById("CombatDefense").value,
		CombatRoll: `Round ${document.combatRound}: rolled <b>${document.combatRoll}</b>.`,
		LeftHand: document.getElementById("LeftHand").value,
		RightHand: document.getElementById("RightHand").value,
		Spare: document.getElementById("Spare").value,
		Body: document.getElementById("Body").value,
		Helmet: document.getElementById("Helmet").value,
		Boots: document.getElementById("Boots").value,
		Gloves: document.getElementById("Gloves").value,
		Belt: document.getElementById("Belt").value,
		Amulet: document.getElementById("Amulet").value,
		Ring1: document.getElementById("Ring1").value,
		Ring2: document.getElementById("Ring2").value,
		Cloak: document.getElementById("Cloak").value,
		Bag1: document.getElementById("Bag1").value,
		Bag2: document.getElementById("Bag2").value,
		Bag3: document.getElementById("Bag3").value,
		Bag4: document.getElementById("Bag4").value,
		Bag5: document.getElementById("Bag5").value,
		Bag6: document.getElementById("Bag6").value,
		Bag7: document.getElementById("Bag7").value,
		Bag8: document.getElementById("Bag8").value,
		Bag9: document.getElementById("Bag9").value,
		Bag10: document.getElementById("Bag10").value,
		Storage: document.getElementById("Storage").value,
		Gold: document.getElementById("Gold").value,
		Silver: document.getElementById("Silver").value,
		Copper: document.getElementById("Copper").value,
		d4Boons: document.getElementById("d4Boons").value,
		d6Boons: document.getElementById("d6Boons").value,
		d8Boons: document.getElementById("d8Boons").value,
		d10Boons: document.getElementById("d10Boons").value,
		d20Boons: document.getElementById("d20Boons").value,
		Notes: document.getElementById("Notes").value,
		CombatNotes: document.getElementById("CombatNotes").value,
		CustomItems: customItems
	};
	
	if (mode == "storage") {
		localStorage.setItem('Holdfast', JSON.stringify(saveObject));
	}
	else if (mode == "clipboard") {
		// Copy code to clipboard (no IE support)
		navigator.clipboard.writeText(JSON.stringify(saveObject)).then(function() {
			alert("Save data copied to clipboard; paste into a local .json file.");
		}, function() {
			alert("Failed to save to clipboard.");
		});
	}
	else if (mode == "download") {
		const date = new Date();
		const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
		const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
		
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(saveObject)));
		element.setAttribute('download', `Holdfast Save ${year}-${month}-${day} ${hour}h${minutes}m${seconds}s.json`);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}
}

function loadFromStorage(json) {
	let saveObject;
	if (json) {
		saveObject = JSON.parse(json);
	}
	else {
		saveObject = JSON.parse( localStorage.getItem('Holdfast') );
	}
	
	const propNames = Object.getOwnPropertyNames(saveObject);
	propNames.forEach((name) => {
		// custom items
		if (name == "CustomItems") {
			const items = Object.getOwnPropertyNames(saveObject[name]);
				items.forEach((item) => {
					addCustomItem(item, saveObject[name][item]);
				});
		}
		// innerHTML
		else if (name == "CombatRoll") {
			document.getElementById(name).innerHTML = (saveObject[name]) ? saveObject[name] : "";
		}
		// checkbox value
		else if (document.getElementById(name).type == "checkbox") {
			document.getElementById(name).checked = (saveObject[name] === true) ? true : false;
		}
		// input value
		else {
			document.getElementById(name).value = (saveObject[name]) ? saveObject[name] : "";
			if (document.getElementById(name).tagName == "SELECT") { document.getElementById(name).dispatchEvent(new Event('change')); }
		}
	});
	coinLimit();
	validateHands();
}

// JSON file importer
const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
	reader.addEventListener('load', (event) => {
		loadFromStorage(event.target.result);
	});
	reader.readAsText(file);
});

function updateCustomItems() {
	// Clear previous state
	customItems = {};
	// Loop through tables
	let customItemTables = document.querySelectorAll("#CustomItems > div");
	customItemTables.forEach((item, index) => {
		let itemName = item.querySelector(".CustomName").value;
		// Ignore tables with no name
		if (itemName.length < 1) {
			return;
		}
		// Add entry and values to customItems collection
		customItems[itemName] = {
			SaleValue: item.querySelector(".CustomSaleValue").value,
			Type: item.querySelector(".CustomType").value,
			Slot: item.querySelector(".CustomSlot").value,
			Attack: item.querySelector(".CustomAttack").value,
			Defense: item.querySelector(".CustomDefense").value,
			Maneuver: item.querySelector(".CustomManeuver").value,
			Gambit: item.querySelector(".CustomGambit").value,
			Effects: item.querySelector(".CustomEffects").value
		};
	});
	
	// save inventory selections and destroy dropdowns
	let dropdowns = document.querySelectorAll("#inventory select");
	let equipped = {};
	dropdowns.forEach((dropdown, index) => {
		equipped[dropdown.id] = dropdown.value;
		dropdown.innerHTML = "";
	});
	
	// rebuild inventory dropdowns
	allItems = {};
	Object.assign(allItems, baseItems, customItems);
	buildInventory(allItems);
	
	// load intenvory selections
	dropdowns.forEach((dropdown, index) => {
		// If the (custom) item no longer exists, default to None
		if (dropdown.querySelector("option[value='"+equipped[dropdown.id]+"']")) {
			dropdown.value = equipped[dropdown.id];
		}
		else {
			dropdown.value = "None";
		}
		// Update stats
		document.getElementById(dropdown.id).dispatchEvent(new Event('change'));
	});
}

function addCustomItem(item, saved) {
	let numOfCustomItems = document.querySelectorAll("#CustomItems > div").length;
	let nextIndex = numOfCustomItems + 1;
	if (item && saved) {
		document.getElementById("CustomItems").insertAdjacentHTML("beforeend", `
			<div id="CustomItem${nextIndex}" class="custom-item-grid">
				<h5>Name</h5>
				<input type="text" size="8" class="CustomName" value="${item}" />
				
				<h5>Sale value</h5>
				<input type="text" size="8" class="CustomSaleValue" value="${saved.SaleValue}" />
				
				<h5>Type</h5>
				<input type="text" size="8" class="CustomType" value="${saved.Type}" />
				
				<h5>Slot</h5>
				<input type="text" size="8" class="CustomSlot" value="${saved.Slot}" />
				
				<h5>Attack</h5>
				<input type="text" size="8" class="CustomAttack" value="${saved.Attack}" />
				
				<h5>Defense</h5>
				<input type="text" size="8" class="CustomDefense" value="${saved.Defense}" />
				
				<h5>Maneuver</h5>
				<input type="text" size="8" class="CustomManeuver" value="${saved.Maneuver}" />
				
				<h5>Gambit</h5>
				<input type="text" size="8" class="CustomGambit" value="${saved.Gambit}" />
				
				<h5>Effects</h5>
				<input type="text" size="8" class="CustomEffects" value="${saved.Effects}" />
			</div>
		`);
	}
	else {
		document.getElementById("CustomItems").insertAdjacentHTML("beforeend", `
			<div id="CustomItem${nextIndex}" class="custom-item-grid">
				<h5>Name</h5>
				<input type="text" size="8" class="CustomName" />
				
				<h5>Sale value</h5>
				<input type="text" size="8" class="CustomSaleValue" />
				
				<h5>Type</h5>
				<input type="text" size="8" class="CustomType" />
				
				<h5>Slot</h5>
				<input type="text" size="8" class="CustomSlot" />
				
				<h5>Attack</h5>
				<input type="text" size="8" class="CustomAttack" />
				
				<h5>Defense</h5>
				<input type="text" size="8" class="CustomDefense" />
				
				<h5>Maneuver</h5>
				<input type="text" size="8" class="CustomManeuver" />
				
				<h5>Gambit</h5>
				<input type="text" size="8" class="CustomGambit" />
				
				<h5>Effects</h5>
				<input type="text" size="8" class="CustomEffects" />
			</div>
		`);
	}
}

function deleteNamelessItems() {
	let customItemTables = document.querySelectorAll("#CustomItems > div");
	customItemTables.forEach((item, index) => {
		if (item.querySelector(".CustomName").value.length < 1) {
			item.remove();
		}
	});
}

function toggleInstructions() {
	let pInfo = document.querySelectorAll("p.info");
	pInfo.forEach((item, index) => {
		item.style.display = (item.style.display == 'none') ? 'block' : 'none';
	});
}
