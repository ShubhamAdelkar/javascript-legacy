const Hero = require("./heroHealth");

class Warrior extends Hero {
  constructor(initialHealth) {
    super(initialHealth);
    this.rage = 0;
  }

  takeDamage(damage) {
    super.takeDamage(damage);
    this.rage++;
  }
}

const warrior = new Warrior();
console.log(warrior.rage, warrior.health);
warrior.takeDamage(10);
console.log(warrior.health, warrior.rage);

const warrior1 = new Warrior(50);
const warrior2 = new Warrior(25);
const hero1 = new Hero(10);

console.log(warrior1.health);
console.log(warrior2.health);
console.log(hero1.health);
