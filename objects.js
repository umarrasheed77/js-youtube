const ms= Symbol("key")

const Jsuser= {
    name:"umar",
    age: 18,
    [ms]: "abc",
    location: "san francisco",
    email: "umar@google.com",
    isLoggedIn: false,
    lastlogindays: ["Monday","Tuesday"]


} // object literals

console.log(Jsuser.email)
console.log(Jsuser["email"])

console.log(Jsuser[ms])
Jsuser.greeting= function(){
    console.log("hi");
}
console.log(Jsuser.greeting())

const tinderuser= {}
 tinderuser.id="ac"
 tinderuser.name="Umar"
 tinderuser.isLoggedIn= false
 console.log(tinderuser)


 const course={
    coursename:"js",
    price:"9",
    courseinstructor:"umar"
 }

 const {courseinstructor: ci}= course;
 console.log(ci);