class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get Title() {
    return this._title;
  }
  get IsCheckedOut() {
    return this._isCheckedOut;
  }
  get Ratings() {
    return this._ratings;
  }
  set IsCheckedOut(value) {
    this._isCheckedOut = value;
  } 
  toggleCheckOutStatus() {
    this.IsCheckedOut = !this.IsCheckedOut;
  }
  getAverageRating() {
    let sum = this.Ratings.reduce((accumulator, current) => 
      accumulator + current);
    return sum/this.Ratings.length;
  }
  addRating(value) {
    this.Ratings.push(value);
  }
}
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get Author() {
    return this._author;
  }
  get Pages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor (title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get Director() {
    return this._director;
  }
  get RunTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.IsCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.IsCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());