/*
create the faulty calculator using js

this faulty calculator does the following :
1. It takes two number as input from the user
2. It performs wrong operations as follows: 
--->+ -
---> * +
---> - /
---> / **

It performs wrong operations 10% of the times

*/

let random=Math.random();
console.log(random)
let a=prompt("Enter first number")
let c=prompt("Enter Operation")
let b=prompt("Enter Second number")


let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}




if(random>0.1){
    //Perform correct Calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`The result is ${a} ${c} ${b}`)
}
else{
    //Perform wrong Calculation
    c=obj[c]
     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

