// Question-2:- What is a callback function in javaScript? 
// Provide an example of a situation where a callback function is commonly used.

// A callback function in javascript is a function that is passed as an argument
// in another function. Which is then called inside the parent function to complete 
// a routine or an action. To put it more simply, it is a function that will be called(executed)
// later after its parent function(the function in which it is passed as an argument) is done executing.

// Callback Function Example
function printName(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the printName() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(printName, 2000, 'Rahul', sayName);
