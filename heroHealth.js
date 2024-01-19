class Hero {
  constructor(initialHealth) {
    this.health = initialHealth || 50;
  }
  takeDamage(damage) {
    this.health -= damage;
  }
}

const hero = new Hero();
console.log(hero.health);

hero.takeDamage(6);
console.log(hero.health);

module.exports = Hero;
