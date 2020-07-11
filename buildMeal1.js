/*Built a 'menu' object to contain a series
of nested objects. The 'courses' object contains
three empty arrays, one for each course.*/
let menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  /*The following method accepts 3 parameters: course, dish name, and
price. It assigns a variable, 'dish', that holds an object containing
name & price. Based on the courseName, the contents of 'dish' are pushed
into the appropriate array above. */
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    menu.courses[courseName].push(dish);
  },

  /*The following method accepts one parameter: the name of the course.
The 'dishes' variable contains the array of all the dishes for that course. 'Index' is a randomly-generated value between 0 and the number of dishes
minus 1; this index value is used to select a key-value pair (name:price) 
from the dishes array.*/

  getRandomDishFromCourse(courseName) {
    let dishes = menu.courses[courseName];
    let index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },

  /*This method generates random appetizer, main, and dessert name:price 
pairs using the RandomDish method above. It adds the price of each and 
returns a statement listing the meal and total price.*/
  generateRandomMeal() {
    let appetizer = menu.getRandomDishFromCourse("appetizers");
    let main = menu.getRandomDishFromCourse("mains");
    let dessert = menu.getRandomDishFromCourse("desserts");
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Your appetizer (${appetizer.name}), main course (${main.name}), and dessert (${dessert.name}) will cost $${totalPrice} plus tax. A 20% gratuity is appreciated. `;
  },
};

/*These method calls add items to the menu!*/
menu.addDishToCourse("appetizers", "samosa", 3);
menu.addDishToCourse("appetizers", "lentil soup", 2.5);
menu.addDishToCourse("appetizers", "papaya salad", 2);
menu.addDishToCourse("appetizers", "chaat", 2.75);
menu.addDishToCourse("mains", "dahl", 7);
menu.addDishToCourse("mains", "chicken tikka", 10);
menu.addDishToCourse("mains", "red curry", 9);
menu.addDishToCourse("mains", "tofu masala", 8);
menu.addDishToCourse("desserts", "mango sticky rice", 3.5);
menu.addDishToCourse("desserts", "chocolate cake", 5);
menu.addDishToCourse("desserts", "watermelon", 3.5);
menu.addDishToCourse("desserts", "green tea ice cream", 2);

/*This call assigns the output of the RandomMeal method to the variable 'meal'
and then logs the output to the console.*/
let meal = menu.generateRandomMeal();
console.log(meal);
