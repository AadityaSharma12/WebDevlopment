let arr=[1,2,3,4,5,7]

// console.log(arr)
// console.log(arr.length)
// console.log(arr[4])
// console.log(arr[0])
// console.log(arr[8])   // Undefined

// Arrays are Mutable
// arr[0]=10
// console.log(arr)
// console.log(arr[0])
// console.log(typeof arr)


console.log(arr)
console.log(arr.toString())

console.log(arr.join(" and "))

let b=[3,4,5,6,7,8]
console.log(b.pop())
console.log(b)

b.push(100)
console.log(b)
b.push("Aaditya")
console.log(b)

console.log(b.shift())
console.log(b)

b.unshift(70)
console.log(b)

// delete(b[2])
// console.log(b)

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]
console.log(a1.concat(a2,a3,[12,23]))
console.log(a1)

a4=[5,2,7,9,1]
console.log(a4.sort())

console.log(a4.splice(2,4))
console.log(a4)

console.log(a1.slice(0,2))
console.log(a1)



