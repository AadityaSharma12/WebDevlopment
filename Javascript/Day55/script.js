console.log("JS Variable Learning")

var a=5;
var b=6;
var c="Aaditya";

var _a="Subham";
// var 55a="Rohan"   Invalid as variable name cannot start with a number

console.log(a+b+8);
console.log(typeof a, typeof b, typeof c)

const a1=6;
// Invalid as we cannot modify the constant value
// a1=a1+1
// console.log(a1)

var z=3;
z=z+5;
console.log(z)


// var has global scope

// var m=66;
// console.log(m)
// {
//     var m=80;
//     console.log(m)
// }
// console.log(m)



// const has local scope
// const m=66;
// console.log(m)
// {
// const m=90;
// console.log(m)
// }
// console.log(m)




// Data Type : 1. Primitive data Type  2. Objects: Also Called user defined data type. They are built by primitive data type
// Primitive : 1.Null 2. Number 3. String 4. Symbol 5. Indefined 6. Boolean 7. Byte

let x="Harry Bhai";
let y=22;
let z1=3.55;
const c1=true;
let q=undefined;
let r=null;
console.log(x,y,z1,c1,q,r)
console.log(typeof x,typeof y,typeof z1,typeof c1,typeof q,typeof r)

// Object

let o={
    name:"Harry",
    "job code": 5600,
    "is_handsome":true
}

console.log(o)
o.salary="10cr";
console.log(o)
o.salary="12cr";
console.log(o)