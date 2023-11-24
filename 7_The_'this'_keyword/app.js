

// Answer :- 7 -- Reuse functions in different execution contexts. It means, a function once 
// defined can be invoked for different objects using the this keyword.
// Identifying the object in the current execution context when we invoke a method.

let object = {
    name: 'Rahul Tyagi',
    address: 'Bhagirathpur',
    message: function() {
        console.log(`${this.name} live in  ${this.address}`);
    }
};

object.message();