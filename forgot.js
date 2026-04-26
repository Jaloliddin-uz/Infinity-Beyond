let kozcha = document.querySelector(".kozcha")
let conkozcha = document.querySelector(".conkozcha")
let icon = document.querySelector(".icon")
let icon2 = document.querySelector(".icon2")
let form = document.querySelector("#form")
let error1 = document.querySelector(".error1")
let error2 = document.querySelector(".error2")
let error3 = document.querySelector(".error3")
let error = document.querySelector(".error")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const namee = document.querySelector("#name")




const users = JSON.parse(localStorage.getItem('user')) || []

iziToast.settings({
    timeout: 4000,
    position: 'topRight',
    close: true,
    displayMode: 2,
    resetOnHover: true,
    layout: 2,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp'
})

function showErrorToast(message) {
    iziToast.error({
        title: 'Xato',
        message,
        class: 'custom-toast'
    })
}

function showSuccessToast(message) {
    iziToast.success({
        title: 'Muvaffaqiyat',
        message,
        class: 'custom-toast'
    })
}






let arr = []

form.addEventListener('submit', function (e) {

    e.preventDefault()

    users.forEach(user => {



        if (email.value.trim() == user.email) {

        } else {

            showErrorToast("Email mos tushmayapti!")
            return
        }


        if (kozcha.value.length >= 8) {

        } else {

            showErrorToast("Yangi parol 8 ta dan ko'p bo'lishi kerak!")
            return
        }



        if (conkozcha.value == kozcha.value) {

        } else {

            showErrorToast("Parollar mos tushmayapti!")
            return
        }





        if (conkozcha.value == kozcha.value && email.value == user.email && kozcha.value.length >= 8) {
            arr.push({
                name: user.name,
                email: user.email,
                pass: kozcha.value
            })

            localStorage.setItem('user', JSON.stringify(arr))
            showSuccessToast("Parolingiz muvaffaqiyatli yangilandi")
            setTimeout(() => {
                window.location.href = "./sign-out.html"
            }, 2000)
        }



    });
})



icon.addEventListener('click', function () {

    icon.classList.toggle('fa-eye-slash')
    icon.classList.toggle('fa-eye')

    if (kozcha.type === "password") {
        kozcha.type = "text"
    }
    else {
        kozcha.type = "password"
    }
})



icon2.addEventListener('click', function () {

    icon2.classList.toggle('fa-eye-slash')
    icon2.classList.toggle('fa-eye')

    if (conkozcha.type === "password") {
        conkozcha.type = "text"
    }
    else {
        conkozcha.type = "password"
    }
})



