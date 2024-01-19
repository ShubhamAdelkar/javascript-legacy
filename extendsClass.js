const Hero = require("./classHero");

class Warrior extends Hero {
  constructor() {
    super();
    this.rage = 0;
  }
}

const warrior = new Warrior();
console.log(warrior.rage);

module.exports = Warrior;
