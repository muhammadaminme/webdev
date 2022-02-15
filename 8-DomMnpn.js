/* |||||||||||||||||| Adding Elements ||||||||||||||||||||||||||||| */
// const body = document.body
// body.append("World war 3 ", "Hello")

/* |||||||||||||||||| Creating Elements  ||||||||||||||||||||||||||||| */

// const body = document.body
// const div = document.createElement('div')
// body.append(div)

/* |||||||||||||||||| Modifying Elements Text ||||||||||||||||||||||||||||| */
// const body = document.body
// const div = document.createElement('div')


// div.innerHTML = "Hello2"
// /* or */
// div.innerText = "Hello1"

// div.append("Hello3")

// body.append(div)


/* |||||||||||||||||| 2 - Modifying Elements Text ||||||||||||||||||||||||||||| */

// const body = document.body
// const div = document.createElement('div')
// body.append(div)
// div.textContent= "Text  Content"
// div.innerText= "Inner Text"


/* |||||||||||||||||| 3 - Modifying Elements Text ||||||||||||||||||||||||||||| */

/* Comment section in Html */

// const div = document.querySelector("div")
// console.log(div.textContent)
// console.log(div.innerText)
// console.log(div.innerHTML)


/* |||||||||||||||||| 3 - Modifying Elements HTML ||||||||||||||||||||||||||||| */

// const body = document.body
// const div = document.createElement("div")
// const strong = document.createElement('strong')
// body.append(div)


// div.append(strong)
// strong.innerText = "Ar-Rohman"


// div.innerHTML = "<strong> Allohu Akbar </strong>"
// div.innerText = "<strong> Allohu Akbar </strong>"

/* |||||||||||||||||| Removing Elements ||||||||||||||||||||||||||||| */

// // const body  = document.body
// const div = document.querySelector('#div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#bye')

// spanHi.remove()
// div.append(spanHi)

// spanBye.remove()
// div.append(spanBye)

// div.removeChild(spanHi)

/* |||||||||||||||||| Modifying ELEMENT ATTRIBUTES ||||||||||||||||||||||||||||| */

// const div = document.querySelector('#div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#bye')

// console.log(spanHi.getAttribute("id"))
// console.log(spanHi.getAttribute("title"))
// console.log(spanHi.id)

// spanBye.setAttribute("id", "Torent")
// spanBye.setAttribute("new", "Torent")

// console.log(spanBye.setAttribute("new", "Torent"))


// spanHi.id = "asdf"
// spanHi.removeAttribute("title")


/* |||||||||||||||||| Modifying DATA ATTRIBUTE ||||||||||||||||||||||||||||| */

// const div = document.querySelector('#div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#bye')

// console.log(spanHi.dataset)
// console.log(spanHi.dataset.longerName)
// spanHi.dataset.newName = "Something new"
// console.log(spanHi.dataset.newName)

/* |||||||||||||||||| Modifying Element classes ||||||||||||||||||||||||||||| */

// const div = document.querySelector('#div')
// const spanHi = document.querySelector('.num1')
// const spanBye = document.querySelector('#bye')


// spanHi.classList.add("num3")
// spanHi.classList.remove("num1")
// spanHi.classList.toggle("num2" )

// spanHi.classList.toggle("num3", true)
// spanHi.classList.toggle("num2", false)


/* |||||||||||||||||| Modifying Element STYLE ||||||||||||||||||||||||||||| */

// div.style.backgroundColor = "red"
// spanHi.style.backgroundColor ="yellow"
// spanBye.style.backgroundColor ="green"
// div.style.backgroundColor = "blue"





const buttons = document.querySelectorAll("[data-modal-id]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modalId
    const modal = document.getElementById(modalId)
    modal.classList.add("show")
  })
})