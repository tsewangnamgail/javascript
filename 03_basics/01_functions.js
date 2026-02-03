//FUNCTIONS
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName  //referance
//sayMyName()  //execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

//returning 
function addTwoNumbers(number1, number2){  //->parameteres

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  //(3,5)->argument

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))//-->overridden sam


//function with infinite paramerters
function calculateCartPrice(val1, val2, ...num1){   //...(rest operator) give me in bundle
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  //[500,2000]   because val1->200 val2->300

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){  //anyobject to pass any object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)  //error because of prices
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  //400
console.log(returnSecondValue([200, 400, 500, 1000]));  //400