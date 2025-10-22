if(2=="2"){
    console.log("executed")
}
if(2==="2"){
    console.log("executed")
}
const temp=41
if(temp<=50){
    console.log("less")
}
else{
console.log("more")}


const userloggedin= true
const debitCard =true
const loggedinfromGoogle= false
const loggedinfromEmail=true
if(userloggedin && debitCard){
    console.log("allow")
}

if(loggedinfromGoogle || loggedinfromEmail){
    console.log("logged in")

}

// falsy valuess 0,-0,BigInt 0n,"", null, undefined, NaN
// truthy values "0", 'false', " ", [], {}, function(){}