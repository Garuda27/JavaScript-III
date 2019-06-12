/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - specifies the value to the left of the .
* 2. Explicit Binding - uses call, apply, and bind to be more specific
* 3. New Binding - uses the new keyword to make a new function
* 4. Window Binding - this will be the window object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function bestMilkFlavor(milk) {
    console.log(this);
    return milk;
  }
  bestMilkFlavor("Chocolate");
// Principle 2

// code example for Implicit Binding
const obj = {
    twice: "Meow meow",
    catGoes: function(say) {
        console.log(`${this.twice} ${say}`);
      console.log(this);
    }
  };
  obj.catGoes("Meow");
// Principle 3

// code example for New Binding
function theDogGoes(voice) {
    this.voice = voice;
    this.speak = function() {
      console.log(this.voice);
    };
  }
  
  const Dog = new theDogGoes('Woof');
  
  Dog.speak();
// Principle 4

// code example for Explicit Binding
function bestCandy(bar) {
    console.log(this);
    return bar;
  }
    bestCandy.call("Twix");