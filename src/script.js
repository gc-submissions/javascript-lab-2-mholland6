"use strict";

// TODO - write your code here.

const randomDamage = () => {
  return Math.floor( Math.random() * 10 + 1 );
}

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor( Math.random() * 2 );
  return randNum === 0 ? opt1 : opt2;
}

const attackPlayer = function(health) {
  return health - randomDamage(); 
}

const logHealth = (player, health) => console.log(player + " health: " + health);

const logDeath = (winner, loser) => console.log(winner + " defeated " + loser);

const isDead = (health) => health <= 0 ? true : false;

function fight(player1, player2, player1health, player2health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2health = attackPlayer(player2health);
      logHealth(player2, player2health);
      if ( isDead(player2health) ) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1health = attackPlayer(player1health);
      logHealth(player1, player1health);
      if ( isDead(player1health) ) {
        logDeath(player2, player1);
        break;
      }
    }

     
  }
  
}

fight("Mitch", "Adam", 100, 100);



// Extended Challenges

// getGrade

let number;
let grade;
function getGrade(number) {
  if (number < 60) {
    grade = "F";
  } else if (number < 70) {
    grade = "D";
  } else if (number < 80) {
    grade = "C";
  } else if (number < 90) {
    grade = "B";
  } else {
    grade = "A";
  }
  return number, grade;
  
}

for (let i = 1; i <= 10; i++) {
  let number = Math.floor( Math.random() * 100 + 1);
  console.log( number, getGrade(number) )
}

// prioritize This function has two parameters, urgent and important,
// both boolean. It returns the priority according to this rule: 
// urgent & important → 1, important not urgent → 2, 
// urgent not important → 3, neither urgent nor important → 4.


