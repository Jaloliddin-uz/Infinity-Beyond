let kozcha = document.querySelector(".kozcha")
let icon = document.querySelector(".icon")
let form = document.querySelector("#form")
let error1 = document.querySelector(".error1")
let error2 = document.querySelector(".error2")
let error = document.querySelector(".error")
const email = document.querySelector("#email")
const namee = document.querySelector("#name")
const password = document.querySelector("#password")
const submitButton = document.querySelector(".btn")

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

const users = JSON.parse(localStorage.getItem('user')) || []




form.addEventListener('submit', function (e) {
    e.preventDefault()


    if (localStorage.getItem('user') === null) {
        showErrorToast("Hali ro'yhatdan o'tmagansiz!")
        return
    }

    users.forEach(user => {

        if (namee.value.trim() == user.name) {

        } else {

            showErrorToast("Ism mos tushmayapti!")
            return
        }



        if (email.value.trim() == user.email) {

        } else {

            showErrorToast("Email mos tushmayapti!")
            return
        }


        if (password.value.trim() === user.pass) {



        } else {

            showErrorToast("Parol mos tushmayapti!")
            return

        }





        if (namee.value.trim() == user.name && email.value.trim() == user.email && password.value.trim() == user.pass) {
            showSuccessToast("Tizimga muvaffaqiyatli kirdingiz")
            setTimeout(() => {
                window.location.href = "./accaunt.html"
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
