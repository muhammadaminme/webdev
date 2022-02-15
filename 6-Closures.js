let name = "Muhamadamin"

function func(){
    console.log(name)
}

// name = "Abror"
// func()

// name = "Ibn ToshPo'lat"
// func()


/* ============================================ */

function outerFunc(outervar){
    return function innerFunc(innervar){
        console.log("outervar: " + outervar)
        console.log("innervar: " + innervar)
    }

}

// const newFunc = outerFunc("OUTSIDE")
// newFunc("INSIDE")

// outerFunc("outside")("inside")



// const newFunc = outerFunc("OUTSIDE")
// newFunc()

// outerFunc("outside")()



// const newFunc = outerFunc("OUTSIDE")
// newFunc

// outerFunc("outside")


/* |\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/| */

// function outerFunc(outervar){
//     let NextName = "Ar-Rohman"
//     return function innerFunc(innervar){
//         console.log(outervar)
//         console.log(NextName)
//         console.log(innervar)
//     }

// }

// outerFunc("Alloh")("Ar-Rohim")


/* |\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/\|/| */

// function outerFunc(url){
//    fetch(url).then((res)=>{
//     console.log(res)})
// }

//  outerFunc("outside")
