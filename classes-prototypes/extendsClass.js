import Hero from "./classHero";

class Warrior extends Hero {
  constructor() {
    super();
    this.rage = 0;
  }
}

const warrior = new Warrior();
console.log(warrior.rage);

export default Warrior;
