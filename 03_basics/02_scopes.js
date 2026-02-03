//  {}  --->Scope decides who can use a variable and where.

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// let a=10;
// const b=20;
// var c=30;

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //cannot access
     two()
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1
}



addTwo(5)  //cannot access here in this fucntion because of the declaration of function
const addTwo = function(num){
    return num + 2
}