// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`Making Request to ${location}`)
//         if(location === "Google") {
//             resolve('Google say hi')
//         } 
//         else{
//             reject('We can only talk to Google')
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log('Processing response')
//         resolve(`Extra Information + ${response}`)
//     })
// }

// makeRequest('FaceBook').then(response => {
//     console.log('Responce Received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch( err => {console.log(err)})



/* ||||||||||||||||||||||| Traversy Media |||||||||||||||||||||||||||| */
/* CALLBACK */

// const posts = [
//     { title: "Post One", body: 'This is Post One'},
//     { title: "Post Two", body: 'This is Post Two'}
// ]

// function getPosts(){
//     let output = ''
//     setTimeout( ()=>{
//         posts.forEach(post => {
//         output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
    
// }

// function CrearePosts(post, callback){
//     setTimeout( ()=> {
//     posts.push(post)
//     callback()
//     }, 2000)
// }



// CrearePosts({ title: "Post Three", body: 'This is Post Three'}, getPosts)

/* ================================================================================ */
/* Promise */

// const posts = [
//     { title: "Post One", body: 'This is Post One'},
//     { title: "Post Two", body: 'This is Post Two'}
// ]

// function getPosts(){
//     let output = ''
//     setTimeout( ()=>{
//         posts.forEach(post => {
//         output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
    
// }

// function CrearePosts(post){
//     return new Promise((resolve, reject)=> {
//         setTimeout( ()=> {
//         posts.push(post)
//         let bool = true
//         if(!bool){
//         resolve()
//         }
//         else{
//         reject("Ooops SomeThing Went Wrong")
//         }
//         }, 2000)
        
//     })
    
// }


// CrearePosts({ title: "Post Three", body: 'This is Post Three'})
// .then(getPosts)
// .catch(res =>{console.log(res)})


/* ================================================================================ */
/* fetch*/

// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve,2000, "GoodBye")
// })

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())


// Promise.all([promise1, promise2, promise3, promise4]).then(value => console.log(value))

/* ================================================================================ */
/* Async Await */

const posts = [
    { title: "Post One", body: 'This is Post One'},
    { title: "Post Two", body: 'This is Post Two'}
]

function getPosts(){
    let output = ''
    setTimeout( ()=>{
        posts.forEach(post => {
        output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
    
}

function CreatePosts(post){
    return new Promise((resolve, reject)=> {
        setTimeout( ()=> {
        posts.push(post)
        let bool = false
        if(!bool){
        resolve()
        }
        else{
        reject("Ooops SomeThing Went Wrong")
        }
        }, 2000)
        
    })
    
}


async function init(){
    await CreatePosts({ title: "Post Three", body: 'This is Post Three'})
    getPosts()
}
init()


/* ===========================================================================*/


// async function fetchUsers(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
    
//     const data = await res.json()

//     console.log(data)
// }
// fetchUsers()