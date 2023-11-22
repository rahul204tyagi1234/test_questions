// Question-1:- Explain what a closure is in javaScript. 
//Provide a practical esample demonstrating the use of closures.


// Answer :- A function that has access to variables from its outer scope even
// after the outer scope even after the outer function has finished execcuting.

// Example 1:-

//Define the closure
 
function addFunction(){
    var add=10;
    return function(value){
        addWord = add*value;
        return addWord;
    }
}
// Use the closure
var addWord =addFunction();
console.log(addWord(13));

// Example 2:-

const one =1;
function outer(){
    const two = 2;
    function nested(){
        const three =3;
        console.log(one);
        console.log(two);
        console.log(three);
    }
    return nested;
}
const nestedFunction = outer();
nestedFunction();