//Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

//Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function.

class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }

  set temperature(celsius) {
    return (this._fahrenheit = (celsius * 9.0) / 5 + 32);
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
