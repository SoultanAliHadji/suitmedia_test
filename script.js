const nama = document.getElementById("nama")
const email = document.getElementById("email")
const textareaMessage = document.getElementById("textareaMessage")
const form = document.getElementById("form")
const labelNama = document.getElementById("labelNama")
const labelEmail = document.getElementById("labelEmail")
const labelTextareaMessage = document.getElementById("labelTextareaMessage")
const errorElement = document.getElementById("error")

form.addEventListener("submit", (e) => {
    let message = []
    if (nama.value === "" || null) {
        labelNama.innerHTML = "This field is required."
        message.push("")
    }
    else {
        labelNama.innerHTML = ""
    }
    if (email.value === "" || null) {
        labelEmail.innerHTML = "This field is required."
        message.push("")
    }
    else {
        labelEmail.innerHTML = ""
    }
    if (textareaMessage.value === "" || null) {
        labelTextareaMessage.innerHTML = "This field is required."
        message.push("")
    }
    else {
        labelTextareaMessage.innerHTML = ""
    }
    if (message.length > 0) {
        e.preventDefault()
        errorElement.innerText = message.join("")
    }
})