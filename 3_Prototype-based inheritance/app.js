// Question - 3 :- describe prototype-based inheritance in javascript. 
// provide an example demonstrating how objects inherit properties and methods from prototypes.


// Prototype inheritance in javascript is the linking of prototypes 
// of a parent object to a child object to share and utilize the properties of a parent class using a child class.

// Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.
let student = {
    id: 1,
  };
  let tution = {
    id: 2,
  };
  let school = {
    id: 3,
  };
  student.__proto__ = school; //level1 inheritance
  student.__proto__.__proto__ = tution; //level2 inheritance
  console.log(student.id); //the student object's property
  console.log(student.__proto__.id); //school object's property