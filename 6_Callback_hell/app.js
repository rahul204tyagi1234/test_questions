// Question - 6 :- What is "callback Hell" in javaScript, and how can you mitigate it?
// Provide an example of nested callback 

// Answer :-6-- In programming languages, 
// callback hell generally refers to an ineffective way of writing code with asynchronous calls.
// It is also known as the Pyramid of Doom.

//The callback hell in JavaScript is referred to as a situation 
//where an excessive amount of nested callback functions are being executed.

function add(x,y){  
    return x+y  
}  
function sub(x,y){  
    return x-y  
}  
function expectedResult(call, x, y){  
    return call(x,y)  
}  
console.log(expectedResult(add, 20, 10))      
console.log(expectedResult(sub, 30, 10))   