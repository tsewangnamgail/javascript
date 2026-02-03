// const tinderUser = new Object()  //singulton object
const tinderUser = {}  //non singulton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  //hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //{obj1:{'1':'a','2':'b'},obj2:{'3':'a','4':'b'}}
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //{'1':'a','2':'b','3':'a','4':'b'}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);    //{'1':'a','2':'b','3':'a','4':'b'}


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //['id','name','isloggedIn']->datatype is array
// console.log(Object.values(tinderUser));  //values
// console.log(Object.entries(tinderUser));   //[['id','123'],[..],[..]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //check whether the value or not


//DESTRUCTUREING THE OBJECT
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor} = course  //clean code

// console.log(courseInstructor);  //hitesh
console.log(instructor);


//API RESULT

//->OBJECT
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//->ARRAY
[
    {},
    {},
    {}
]
