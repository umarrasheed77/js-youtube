let index=0;
while(index<=10){
    console.log(`value of index is ${index}`)
    index++
}

let arr=['flash','batman','superman']
let i= arr.length
while(i>0){
    console.log(arr[i])
    i--
}

// for of
// ["","",""] strings in array
// [{},{}] objects in array
const mrr = [1,2,3,4]
for(const num of mrr){
    console.log(num)

}

const greet="helllo umar"
for(const i of greet){
    console.log(`each chr is ${i}`)


}
const mpp = new Map()
mpp.set("in","india")
mpp.set("om","oman")
console.log(mpp)
for (const [key, value] of mpp) {

    console.log(key)
    console.log(value)
    
}

const myobj={
    js:"javascript",
    cpp:"c ++",
    rb:"ruby"
}
for(const i in myobj){
    console.log(i)
    console.log(myobj[i])
}

for(const num in mrr){
    console.log(num)// returns the keys ie index and does not return the value
    console.log(mrr[num])
}

const coding=["cpp","js","ruby"]
coding.forEach( function (val){
    console.log(val)
}   )

coding.forEach( (val)=>{
    console.log(val)
}   )

function printme(item){
    console.log(item)
}

coding.forEach(printme)