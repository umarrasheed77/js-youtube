const user={
    username:"umar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to webaite`)
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

// function chai(){
//     let username="umar"
//     console.log(this)
// }
// chai()

const chai = ()=>{
    let username="umar"
    console.log(this)
}
chai()



const addtwo= (num1,num2) => {
    return num1+num2
}

console.log(addtwo(3,4))

const addthree= (num1,num2,num3)=> (num1+num2+num3)
console.log(addthree(1,2,3))