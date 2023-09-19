/** @format */


//* I wanted to create a program and website that would generate a random number(dice) to equate to which weapon we would use depending on the demon
//! Good practice all around! 



const meleeZombies = {
  missingLimbZombies: ["Headless Zombie", "Missing Right Arm Zombie", "Missing Left Arm Zombie", "Missing Right Leg Zombie", "Missing Left Leg Zombie", "Missing Both Legs and Arms Zombie"], 
  ailmentZombies: ["Venomous Zombie", "Diseased Zombie", "Cursed Zombie"],
  zombieAnimals: ["Rabid Dog", "Rabid Cat", "Rabid Zoo Lion", "Rabid Zoo Monkey"],
}

meleeZombies.missingLimbZombies[0];





const myWeapons = [
  lowDamageSwords = ["Samurai Sword", "Broad Sword", "Kitchen Knife", "Short Sword"],
  lowDamageFistWeapons = ["Copper Brass Knuckles", "Bronze Brass Knuckles", "Brass Knuckles of the Boar", "Shimmering Brass Knuckles"],
  rangedBows = ["Deadly Crossbow of the Demon", "Longbow of Silence", "Shortbow of Quickfire", "Crossbow of the Divine"],
  midGradeSwords = ["Sword of Everlight", "Sword of Embracing Darkness", "Sword of Quickness", "Sword of Time", "Sword of the Bastard King"],
]

function nondestructivelyUpdateObject(obj, key, value) {
  const newMissingLimbZombies = { ...meleeZombies.missingLimbZombies };

}
const newMissingLimbZombies = nondestructivelyUpdateObject(
  meleeZombies, 'missingLimbZombies', ["new zombietype1", "new zombietype2", "new zombietype3", "new zombietype4", "new zombietype5", "new zombietype6"]
);

  newMissingLimbZombies[6] = ;
}

// function nondestructivelyUpdateObject(obj, key, value) {
//   // Create a copy of the original list you want to update
//   const newList = [...obj[key]];

//   // Add the new values to the copied list
//   newList.push(...value);

//   // Create a new object with the updated list and return it
//   return { ...obj, [key]: newList };
// }

// const updatedMeleeZombies = nondestructivelyUpdateObject(
//   meleeZombies, // Your original container
//   'missingLimbZombies', // The label for the part you want to update
//   [
//     "new zombietype1",
//     "new zombietype2",
//     "new zombietype3",
//     "new zombietype4",
//     "new zombietype5",
//     "new zombietype6",
//   ] // The new zombie types you want to add
// );




const myWeapons = [
  ["Low Damage Swords", //*<---Start of Weapons
    ["Samurai Sword", "Broad Sword", "Kitchen Knife"],
    ["Sword of Everlight", "Sword of Embracing Darkness", "Sword of Quickness", "Sword of Time", "Sword of the Bastard King"]
  ],
  ["Low Damage Fist Weapons", //! Here Too! //*<---Start of new New Weapon Type   <--ocd its red
    ["Gauntlet of Reckoning", "Brass Knuckles of the Boar", "Shimmering Brass Knuckles"]
  ],
  ["Ranged Bows", //*<---Start of new New Weapon Type
    ["Deadly Crossbow of the Demon", "Longbow of Silence", "Shortbow of Quickfire", "Crossbow of the Divine"]
  ],
  ["Mid-Grade Swords", //*<---Start of new New Weapon Type
    ["Sword of Everlight", "Sword of Embracing Darkness", "Sword of Quickness", "Sword of Time", "Sword of the Bastard King"]
  ]
];

myWeapons[0];




const barbWeaponType = 
[ "Great Axes", "Great Sword", "Great Mace", "One-Handed Swords", "One-Handed Axes", "One-Handed Maces"]



const myClasses = [
{
  name: "Throktar",
  class: "Barbarian",
  weaponType: barbWeaponType,
  race: "Half-Elf", 
}, 
{ name: "Trixie",
  class: "Thief",
  weaponType: [], //* Need to create a function / array for her weapon type 
  race: "Human" 
}
];


console.log(myClasses);






const lowDmgSwords = 
["Samurai Sword", "BroadSword", "Kitchen Knife", "Short Sword"]

const lowDmgFistWeapons = 
["Copper Brass Knuckles", "Bronze Brass Knuckles", ]






















// Below I would like to generate a random number range for these (Probably limit Missing Limb Zombies from level 1-3, then Zombie Animals 3 - 7, then Ailment Zombies 7 - 10, eventually creating another tier of zombie that is more difficult)
const demonLevels = 
  ["level 1 Demon",
  "level 2 Demon",
  "Level 3 Demon",
  "Level 4 Demon",
  "Level 5 Demon",
  "Level 6 Demon",
  "Level 7 Demon",
  "Level 8 Demon",
  "Level 9 Demon",
  "Level 10 Demon",
];

const missingLimbZombies = [
  {name: "Headless Zombie", health: 32}
  {name: "Missing Right Arm Zombie", health: 48}
  {name: "Missing Left Arm Zombie", health: 48}
  {name: "Missing Right Leg Zombie", health: 39}
  {name: "Missing Left Leg Zombie", health: 39}
  {name: "Missing Both Legs and Arms Zombie", health: 3}
  {name: "Headless Zombie", health: 45}

] 


const weapons = [
  { name: "Samurai Sword", minDamage: 2, maxDamage: 9, critMin: 11, critMax: 30 },
];


//Will need to update this too! 
function demonSlaying(slayDemon) {
  if (slayDemon === demonTypes[1]) {
    return myWeapons[0]
  } else {
    console.log("No Weapon Needed")
  } else {
    if (slayDemon >= 2)
    return myWeapons[2]
  } console.log("") // update later
}

// Review this as well..
function getRandomEnemy() {
  const randomIndex = Math.floor(Math.random() * enemies.length);
  return enemies[randomIndex];
}

// review and do this repetitively (This took me way too long and still need more understanding)
function getRandomDamage(weapon) {
  const isCritical = Math.random() < 0.2; //! 20% chance of critical strike, whoot!
  const min = isCritical ? weapon.critMin : weapon.minDamage;
  const max = isCritical ? weapon.critMax : weapon.maxDamage;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//* Help was needed for this code below to generate (Need to review later and customize it to my own) (Source, ChatGPT)
function battle(playerWeapon) {  
  const enemy = getRandomEnemy();
  const playerDamage = getRandomDamage(playerWeapon);

  console.log(`You encounter a ${enemy.name} with ${enemy.health} health.`);
  console.log(`You attack with your ${playerWeapon.name} and deal ${playerDamage} damage.`);

  enemy.health -= playerDamage;

  if (enemy.health <= 0) {
    console.log(`You defeated the ${enemy.name}!`);
  } else {
    console.log(`The ${enemy.name} has ${enemy.health} health remaining.`);
  }
}





//? These are my questions 

//? Is it okay to have these many arrays? 
//? Is it okay to have subcategories like this or is there a better way to organize it. 


//*My Goals:
// I would like to create a website to incorporate images to this, as well as a random (Dice maybe?) to randomize the odds against each enemy. 

//I would like 


const myArray = ["Kris", "tofer"];

myArray[0] + myArray[1];


// console.log(myArray); // "Twinkle"



const crappyArray = [ "Kris", "tofer", "Twinkle", "Twinkle", "Little", "Star" ];