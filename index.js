'use strict'
const user = {
    name: 'coco',

    showName() {
        console.log(this.name);
    },

    setName(newName) {
        this.name = newName;
    }
}

user.showName();
user.setName('Ajax');
user.showName();

const getName = function(name, callback) {
    // callback.call(user, name);
    callback('Bob');
    user.showName();
    callback(name);
    user.showName();
}
console.log(user.setName);
getName('John', user.setName.bind(user));
// getName('John', user.setName);

/****************************************************************************/ 

class User {

    static add (a, b) {
        return a + b;
    }

    constructor(name, age) {
        this._name = name;
        this.age= age;
    }

    get name() {
        return this._name;
    }

    get birthYear() {
        const currentYear = new Date().getFullYear(); 
        console.log(currentYear);
        
        return this._birthYear = currentYear - this.age;
    }

}

const cocoUser = new User('Coco', 25);

console.log(cocoUser);
console.log(cocoUser.name);
console.log(cocoUser.birthYear);
console.log(User.add(2, 3));

/****************************************************************************/ 


class IncreasingCounter {
    #count = 0;
    get value() {
      console.log('Getting the current value!');
      return this.#count;
    }
    increment() {
      this.#count++;
    }
  }

  const counter = new IncreasingCounter();
  counter.count = 25;
  counter.increment();
  counter.increment();
  counter.increment();


console.log(counter.value);
