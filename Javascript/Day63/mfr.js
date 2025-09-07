let arr=[1,3,5,7,11,13]
// let newarr=[]

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newarr.push(element+5)
// }
// console.log(newarr)


// map

let newarr=arr.map((e)=>{
    return e+1
})
console.log(newarr)
 

// filter

const greterThanSeven=((e)=>{
    if(e>7){
        return true
    }
    return false
})

console.log(arr.filter(greterThanSeven))



// reduce
let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))
