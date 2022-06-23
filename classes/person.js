// Your code here

class Person {

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(people) {
    if (!Array.isArray(people)) {
      console.log("introducePeople only takes an array as an argument.");
      return;
    }

    let allPeople = true;

    people.forEach(
      person => {
        if (!(person instanceof Person)) {
          console.log("All items in array must be Person class instances.")
          allPeople = false;
        }
      }
    );

    if (allPeople) {
      people.forEach(
        person => person.introduce()
      );
    }
  }

}

let bob = new Person("Bob", "Johnson", 10);
let mary = new Person("Mary", "Jane", 40);
//bob.introduce();

Person.introducePeople([bob, mary]);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
