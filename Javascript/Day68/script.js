console.log("Aaditya")

// console.log(document.body.children[0].children[2].style.color="red")


// Class Selector

// let b=document.getElementsByClassName("box")
// console.log(b)

// b[2].style.backgroundColor="red"


// ID Selector

// document.getElementById("red").style.backgroundColor="pink"


// Query Selector

// document.querySelector(".box").style.backgroundColor="yellow"
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="green"
// })


// Tag Selector
// console.log(document.getElementsByTagName("div"))



// Matches , closest and contains

// Matches
e=document.getElementsByTagName("div")
// console.log(e[4].matches("#red"))
// console.log(e[3].matches("#red"))


// Closest

// console.log(e[3].closest("#red"))
// console.log(e[3].closest(".container"))
// console.log(e[3].closest("html"))


// Contains

console.log(document.querySelector(".container").contains(e[2]))
console.log(document.querySelector(".container").contains(e[0]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))


