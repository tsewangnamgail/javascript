const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  //this refer the current context
        console.log(this);
    }

}

// user.welcomeMessage()  //hitesh welcome to website
// user.username = "sam"  
// user.welcomeMessage()   //sam welcome to website (change to sam because of sam)

// console.log(this);   //emmpty

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //work only in object not inside function
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {   //arrow fucntion
    let username = "hitesh"
    console.log(this);
}
// chai()


//ARROW FUCNTION
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2  //implesit return
// const addTwo = (num1, num2) => ( num1 + num2 )


const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()