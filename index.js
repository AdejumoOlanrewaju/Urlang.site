console.log("Hello World")

const openModal = document.querySelector(".open-modal")
const closeModal = document.querySelector(".close-modal")
const Modal = document.querySelector(".modal")
// let word = "response"
// console.log(word)
// Modal.innerHTML = `<p>${word}</p>`

openModal.addEventListener("click", ()=> {
    Modal.showModal()
})

closeModal.addEventListener("click", () => {
    Modal.close()
})