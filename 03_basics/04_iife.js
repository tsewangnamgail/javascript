// Immediately Invoked Function Expressions (IIFE)
//we use iife to remove the pollution of global variable 
//Immediately executed

//named iife
(function chai(){
    console.log(`DB CONNECTED`);
})();  //here we need to use ';' to end the first code


//unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
