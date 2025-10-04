 const accountId = 144553
 let accountEmail="umar@googlr.com"
 var accountPassword="12345"
 accountcity="Hamirpur"

//  accountId=2 not allowed as const
 accountEmail="bumar@googlr.com"
accountPassword="32"
accountcity="delhi"
// console.log(accountId)
// console.log(accountEmail)
// console.log(accountPassword)
// console.log(accountcity)

/* prefer not to use var because of issue in block scope and fucntional scope*/
 let accounstState
 console.table([accountId,accountEmail,accountPassword,accountcity,accounstState])