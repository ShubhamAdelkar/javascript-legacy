const Hero = require("./heroHealth");

class Warrior extends Hero {
  constructor() {
    super();
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

module.exports = Warrior;
