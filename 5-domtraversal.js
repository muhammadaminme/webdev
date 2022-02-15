/* ||||||||||||||||||||||||||||||||||get ElementBy  Id|||||||||||||||||||||||||\ */

// const grandparent = document.getElementById('grandparent-id')

// GrandColor(grandparent)

// function GrandColor(elements){
//     elements.style.backgroundColor = '#333'
// }



/* ||||||||||||||||||||||||||||||||||get ElementBy  ClassName|||||||||||||||||||||||||\ */


// const parent = Array.from(document.getElementsByClassName('parent'))

// parent.forEach(ParentColor)

// function ParentColor(element){
//     element.style.backgroundColor = '#777'
// }


// const child = Array.from(document.getElementsByClassName("child"))

// child.forEach(ChildColor)

// function ChildColor(element){
//     element.style.backgroundColor = " red"
// }

/* |||||||||||||||||||||||||||||||||| querySelector |||||||||||||||||||||||||\ */



// const grandselector = document.querySelector("#grandparent-id")
// const grandselector = document.querySelector(".grandparent")
// const grandselector = document.querySelector(".parent")


// GrandColor(grandselector)

// function GrandColor(element){
//     element.style.backgroundColor = "pink"
// }

/* |||||||||||||||||||||||||||||||||| querySelector ALL |||||||||||||||||||||||||\ */

// const parentselector = document.querySelectorAll('.parent')

// parentselector.forEach(ParentColor)

// function ParentColor(element){
//     element.style.backgroundColor = "pink"
// }

/* |||||||||||||||||||||||||||||||||| selecting children |||||||||||||||||||||||||\ */

// const grandparent = document.querySelector("#grandparent-id")
// const parents = Array.from(grandparent.children)

// parents.forEach(ParentColor)

// function ParentColor(element){
//     element.style.backgroundColor = "yellow"
// }






// const grandparent = document.querySelector("#grandparent-id")
// const parents = Array.from(grandparent.children)
// const parentOne = parents[0]
// const child = parentOne.children

// ChangeColor(child[0])

// function ChangeColor(element){
//     element.style.backgroundColor = "yellow"
// }


/* |||||||||||||||||||||||||||||||||| Selecting Descendants |||||||||||||||||||||||||\ */

// const grandparent = document.querySelector("#grandparent-id")
// const childOne = grandparent.querySelector('.child')

// ChangeColor(childOne)

// function ChangeColor(element){
//     element.style.backgroundColor = "yellow"
// }



// const grandparent = document.querySelector("#grandparent-id")
// const children = grandparent.querySelectorAll('.child')

// children.forEach(ChangeColor)

// function ChangeColor(element){
//     element.style.backgroundColor = "yellow"
// }


/* |||||||||||||||||||||||||||||||||| Selecting Parents |||||||||||||||||||||||||\ */

// const childOne = document.querySelector('#child-one')

//     ChangeColor(childOne)

// function ChangeColor(param){
//     param.style.backgroundColor = "#333"
// }


// const childOne = document.querySelector('#child-one')
// const parent = childOne.parentElement

//     ChangeColor(parent)

// function ChangeColor(param){
//     param.style.backgroundColor = "#333"
// }


// const childOne = document.querySelector('#child-one')
// const parent = childOne.parentElement
// const grandparent =parent.parentElement


//     ChangeColor(grandparent)

// function ChangeColor(param){
//     param.style.backgroundColor = "#333"
// }


/* |||||||||||||||||||||||||||||||||| Selecting Anscestors |||||||||||||||||||||||||\ */

// const childOne = document.querySelector('.child')
// const grandparent = childOne.closest('.grandparent')

// // ChangeColor(childOne)
// ChangeColor(grandparent)

// function ChangeColor(element){
//     element.style.backgroundColor = "Orange"
// }

/* |||||||||||||||||||||||||||||||||| Next Element Sibling |||||||||||||||||||||||||\ */

// const childOne = document.querySelector('.child')
// const childTwo = childOne.nextElementSibling

//     ChangeColor(childTwo)

// function ChangeColor(element){
//     element.style.backgroundColor = "green"
// }


// const childOne = document.querySelector('.child')
// const childTwo = childOne.nextElementSibling

//     ChangeColor(childTwo.previousElementSibling)

// function ChangeColor(element){
//     element.style.backgroundColor = "green"
// }