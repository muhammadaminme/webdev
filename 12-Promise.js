// let P = new Promise((resolve, reject) =>{
//     let a= 1+2
//     if(a == 2){
//         resolve("Success")
//     }
//     else{
//         reject("Fail")
//     }
// })
// P.then( message =>{console.log('This is in THEN '+message)}).catch(error => console.log('This is in CATCH '+error))


/* =========================================================================================== */

// const userLeft = false
// const userCat = false

// function callingBack(callback, errorCallback){
//     if(userLeft){
//         errorCallback({
//             name: "User Left",
//             message: ':('
//         })
//     }
//     else if(userCat){
//         errorCallback({
//             name: 'Watching cat',
//             message: 'WebDev < Cat'
//         })
//     }
//     else{
//         callback('THumbs up and Subscribe')
//     }
// }

// callingBack((any)=>{console.log('Success: ' + any)},(any)=>{console.log(any.name + " " + any.message)} )



/* |||||||||||||||||| IN PROMISE ||||||||||||||||||||||||||||||||| */

// const userLeft = false
// const userCat = true

// function callingPromise(){
//  return  new Promise((resolve, reject) =>{
//         if(userLeft){
//             reject({
//                 name: "User Left",
//                 message: ':('
//             })
//         }
//         else if(userCat){
//             reject({
//                 name: 'Watching cat',
//                 message: 'WebDev < Cat'
//             })
//         }
//         else{
//             resolve('THumbs up and Subscribe')
//         }
//     })
// }
 
// callingPromise().then( message => { console.log('Success: ' + message)})
// .catch( message => {console.log(message.name + ' ' + message.message)})


/* |||||||||||||||||| IN PROMISE ALL ||||||||||||||||||||||||||||||||| */

// const recorded_one = new Promise((resolve, reject) => {
//     resolve(' Video 1 Recorded')
// })

// const recorded_two = new Promise((resolve, reject) => {
//     resolve(' Video 2 Recorded')
// })

// const recorded_three = new Promise((resolve, reject) => {
//     resolve(' Video 3 Recorded')
// })

// Promise.all([
//     recorded_one,
//     recorded_two,
//     recorded_three
// ]).then( res => {console.log(res)})