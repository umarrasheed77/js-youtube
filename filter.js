const myarr=[1,2,3,4,5,6,7]
const newnums=myarr.filter((num)=> num>=5)
console.log(newnums)
const newarr =[]
myarr.forEach((num)=>{
    if(num%2==0){
        newarr.push(num)
    }
})
console.log(newarr)

const nos=[1,2,3,4,5,6,7,8,9]
const newnos= nos.map((num)=> num+10)
console.log(newnos)

const mnu=[1,2,3]
const tot=mnu.reduce(function (acc,currval){
    console.log(`acc:${acc} and curval:${currval}`)
    return acc+currval
}, 0)
console.log(tot)
 