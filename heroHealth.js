class Hero {
  constructor() {
    this.health = 50;
  }
  takeDamage(damage) {
    this.health -= damage;
  }
}

const hero = new Hero();
console.log(hero.health);

hero.takeDamage(6);
console.log(hero.health);
