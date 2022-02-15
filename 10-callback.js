/* |||||||||||||||Understanding what A Function Is ||||||||||||||||||||||||| */
// function print(value){
//     console.log(value)
// }

// console.dir(print)
// console.log(print)
// console.log({name:"me", age: 26})
// print("Hi Js")


/* ||||||||||||||| Callback example||||||||||||||||||||||||| */

function print(value){
    console.log(value)
}

function useCallback(callback) {
    callback(" Bye ")
}
useCallback(print)



// function print(value){
//     console.log(value)

// }

// function useCallback() {
//    print(" Bye ")
// }
// useCallback()




// function print(value){
//     console.log(value)
// }
// const callback = print
// callback("Bye")



/* ||||||||||||||| Functions Vs Objects ||||||||||||||||||||||||| */

// print.hi = "test"
// console.log(print.hi);
// console.dir(print);



// function print(value){
//     console.log(value)
//     // return undefined
// }

// function useCallback(callback) {
//     callback("Hello")
// }
// useCallback(print())





// function printPerson(person) {
//     console.log(person)
// }

// const smb = { name: "Muhammadamin"}
// printPerson(smb)



/* ||||||||||||||| Anonymous Functions ||||||||||||||||||||||||| */

// function useCallback(callback) {
//     callback("Hello")
//     // console.log(callback)
// }
// useCallback( value => console.log(value))


