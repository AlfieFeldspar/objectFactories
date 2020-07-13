class School {
  constructor(name, level, students) {
    this._name = name;
    this._level = level;
    this._students = students;
  }
  get Name() {
    return this._name;
  }
  get Level() {
    return this._level;
  }
  get Students() {
    return this._students;
  }
  set Students(newValue) {
    if (newValue.isNaN()) {
      console.log("Invalid input: students must be set to a number");           
    } else {
      this._students = newValue;
    }
  }
  quickFacts() {
    console.log(
      `${this.Name} educates ${this.Students} students at the ${this.Level} school level.`
    );
  }
  static pickSubstituteTeacher(teachers) {
    let teachNum = Math.floor(Math.random() * teachers.length);
    return teachers[teachNum];
  }
}

class Primary extends School {
  constructor(name, students, pickupPolicy) {
    super(name, "primary", students);
    this._pickupPolicy = pickupPolicy;
  }
  get PickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, students) {
    super(name, 'middle', students);
  }
}

class High extends School {
  constructor(name, students, sportsTeams) {
    super(name, "high", students);
    this._sportsTeams = sportsTeams;
  }
  get Teams() {
    return this._sportsTeams;
  }
}

//add new Primary School instance
const lorraineHansbury = new Primary("Lorraine Hansbury", 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

//call static method on the class, not on the instance (call on Primary or School, but not on lorraineHansbury)
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(sub);

//add new High School instance
const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.Teams); 