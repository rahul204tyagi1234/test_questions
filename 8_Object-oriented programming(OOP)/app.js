 
// Answer :- in javaScript, object-oriented programing can be achieved without using classes through a prototype-based approach.
// Objects can be created as instances of other objects, and method canbe defined prototypes.
// creating a prototype object

const animalPrototype ={
    makeSound:function(){
        console.log("Animal sound")
    }
};

// Creating specific objects based on the prototype

const cat = Object.create(animalPrototype);
cat.makeSound =function(){
    console.log("Meow");
};

const dog = Object.create(animalPrototype);
dog.makeSound =function(){
    console.log("woof");
};

// using the objects

cat.makeSound();
dog.makeSound();


