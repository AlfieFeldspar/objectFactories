const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  //get & set keyword accessor property needs diff name than data property
  get appCourse() {
    return this._courses.appetizers;
  },
  get mainCourse() {
    return this._courses.mains;
  },
  get dessCourse() {
    return this._courses.desserts;
  },
  set appCourse(newApp) {
    this._courses.appetizers = newApp;
  },
  set mainCourse(newMain) {
    this._courses.mains = newMain;
  },
  set dessCourse(newDessert) {
    this._courses.desserts = newDessert;
  },
  get Courses() {
    return {
      appetizers: this.appCourse,
      mains: this.mainCourse,
      desserts: this.dessCourse,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is ${totalPrice}.`;
  },
};
menu.addDishToCourse("appetizers", "hummus", 2.0);
menu.addDishToCourse("appetizers", "grape leaves", 3.0);
menu.addDishToCourse("appetizers", "chips", 3.0);
menu.addDishToCourse("mains", "steak", 12.0);
menu.addDishToCourse("mains", "eggplant parm", 8.0);
menu.addDishToCourse("mains", "chicken korma", 10.75);
menu.addDishToCourse("desserts", "chocolate cake", 4.0);
menu.addDishToCourse("desserts", "ice cream", 2.5);
menu.addDishToCourse("desserts", "fruit", 3.5);

let meal = menu.generateRandomMeal();
console.log(meal);
console.log(menu.appCourse);
console.log(menu.Courses);
