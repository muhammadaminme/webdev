const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')



// grandparent.addEventListener('click', (e)=>{console.log(e.target)})

// grandparent.addEventListener('click', (e)=>{
//     console.log('grandparent')
// })

// grandparent.addEventListener('click', (e)=>{
//     console.log('grandparent-2')
// })


/* ||||||||||||||||||||  Event Bubbling/ Capturing |||||||||||||||||||||||||| */

// grandparent.addEventListener('click', (e)=>{
//     console.log('grandparent-1')
// })

// parent.addEventListener('click', (e)=>{
//     console.log('parent-1')
// })

// child.addEventListener('click', (e)=>{
//     console.log('child-1')
// })

// document.addEventListener('click', (e)=>{
//     console.log("document")
// })

/* =========================================== */
// document.addEventListener('click', (e)=>{
//     console.log('document captue')
// }, {capture:true})

// grandparent.addEventListener('click', (e)=>{
//     console.log('grandparent bubble')
// },)


// parent.addEventListener('click', (e)=>{
//     console.log('parent capture')
// }, {capture: true})


// child.addEventListener('click', (e)=>{
//     console.log('child bubble')
// })

// grandparent.addEventListener('click', (e)=>{
//     console.log('grandparent capture')
// }, {capture: true})

// parent.addEventListener('click', (e)=>{
//     console.log('parent buble')
// })

// child.addEventListener('click', (e)=>{
//     console.log('child capture')
    
// }, {capture: true})

// document.addEventListener('click', (e)=>{
//     console.log("document bubble")
// })


/* ||||||||||||||||||||  Stopping Event Propagation  |||||||||||||||||||||||||| */


// document.addEventListener('click', (e)=>{
//     console.log('document captue')
// }, {capture:true})

// grandparent.addEventListener('click', (e)=>{
//     console.log('grandparent bubble')
// },)


// parent.addEventListener('click', (e)=>{
//     // e.stopPropagation()
//     console.log('parent capture')
// }, {capture: true})


// child.addEventListener('click', (e)=>{
//     console.log('child bubble')
// })

// grandparent.addEventListener('click', (e)=>{
//     console.log('grandparent capture')
// }, {capture: true})

// parent.addEventListener('click', (e)=>{
//     console.log('parent buble')
// })

// child.addEventListener('click', (e)=>{
//     console.log('child capture')
//     e.stopPropagation()
// }, {capture: true})

// document.addEventListener('click', (e)=>{
//     console.log("document bubble")
// })


/* ||||||||||||||||||||  Run Event only ONCE |||||||||||||||||||||||||| */


// grandparent.addEventListener('click', ()=>{
//     console.log('grandparent-1')
// })

// parent.addEventListener('click', ()=>{
//     console.log('parent-1')
// },{once: true})

// child.addEventListener('click', ()=>{
//     console.log('child-1')
// })

// document.addEventListener('click', ()=>{
//     console.log("document")
// })



/* ||||||||||||||||||||  remove Evemnt Listener |||||||||||||||||||||||||| */

// grandparent.addEventListener('click', ()=>{
//     console.log('grandparent-1')
// })

// parent.addEventListener('click', hi)

// setTimeout(()=>{
// parent.removeEventListener('click', hi)
// },2000)

// child.addEventListener('click', ()=>{
//     console.log('child-1')
// })

// document.addEventListener('click', ()=>{
//     console.log("document")
// })

// function hi(){
//     console.log("Hello")
// }

// // console.log(hi)

// // console.log(hi)
// // // var hi = 'varr'


/* ||||||||||||||||||||  Event Delegation |||||||||||||||||||||||||| */

// const divs = document.querySelectorAll('div')

// divs.forEach(value =>{
//     value.addEventListener('click', ()=>{
//         console.log("clicked")
//     })
// })


// const newDiv = document.createElement('div')
// newDiv.style.width = "250px"
// newDiv.style.height = "250px"
// newDiv.style.backgroundColor = 'purple'
// document.body.append(newDiv)


/* ================================================================= */

// document.addEventListener('click', (e)=>{
//     if(e.target.matches('div')) console.log("specified")
// })


// const newDiv = document.createElement('div')
// newDiv.style.width = "250px"
// newDiv.style.height = "250px"
// newDiv.style.backgroundColor = 'purple'
// document.body.append(newDiv)


/* ================================================================= */
/* in function */

// function global(type, selector, callback){
// document.addEventListener(type,(element)=>{
//     if (element.target.matches(selector)) callback(element) /* what is purpose of element   */
// })
// }

// global('click', 'div', ()=> console.log('function'))

// const newDiv = document.createElement('div')
// newDiv.style.width = "250px"
// newDiv.style.height = "250px"
// newDiv.style.backgroundColor = 'purple'
// document.body.append(newDiv)