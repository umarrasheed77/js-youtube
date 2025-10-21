function Sayname(){
    console.log("U")
        console.log("m")

            console.log("a")

                console.log("r")

}
Sayname()

function addnums(number1,number2){
    let result= number1+number2
    return result
}
addnums(3,4)
addnums(3,"a")

function loginuser(username){
    return `${username} just logged in`
}

console.log(loginuser("umar"))

function calculateprice(...num1){
    return num1
}

console.log(calculateprice(2))
console.log(calculateprice(2,4,6))


const user ={
    username:"umar",
    price:99
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username:"Sam",
    price:""
})