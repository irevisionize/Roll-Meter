/** @format */


//* I wanted to create a program and website that would generate a random number(dice) to equate to which weapon we would use depending on the demon
//! Good practice all around! 


const myWeapons = 
  ["Low Damage Swords"                                                                    //*<---Start of Weapons
  ["Samurai Sword", "Broad Sword", "Kitchen Knife"]
  ["Sword of Everlight", "Sword of Embracing Darkness", "Sword of Quickness", "Sword of Time", "Sword of the Bastard King"]
], 
  ["Low Damage Fist Weapons" //! Here Too!                                               //*<---Start of new New Weapon Type   <--ocd its red
  ["Gauntlet of Reckoning", "Brass Knuckles of the Boar", "Shimmering Brass Knuckles"]
],["Ranged Bows"                                                                         //*<---Start of new New Weapon Type
  ["Deadly Crossbow of the Demon", "Longbow of Silence", "Shortbow of Quickfire", "Crossbow of the Divine"]
], [ "Mid-Grade Swords"                                                                  //*<---Start of new New Weapon Type
  ["Sword of Everlight", "Sword of Embracing Darkness", "Sword of Quickness", "Sword of Time", "Sword of the Bastard King"]
];

myWeapons[0];

const meleeZombies = 
  ["Ailment Zombies"                                                                     //*<---Start of new New Zombie Type
  ["Venomous Zombie", "Diseased Zombie", "Cursed Zombie"]]
  ["Zombie Animals", //! Maybe we can look at this error and get more in depth, I got a error code of Array Element Destructuring pattern expected. (Google) said that I have an extra bracket somewhere. Corrected! maybe input from Matteo?
  ["Rabid Dog", "Rabid Cat", "Rabid Zoo Lion", "Rabid Zoo Monkey"]],
  ["Missing Limb Zombies"                                                                //*<---Start of new New Zombie Type
  ["Headless Zombie", "Missing Right Arm Zombie", "Missing Left Arm Zombie", "Missing Right Leg Zombie", "Missing Left Leg Zombie", "Missing Both Legs and Arms Zombie"]]

["Zombies with Weapons"]                                                                 //*<---Start of new New Zombie Type


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