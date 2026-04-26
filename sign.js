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
const namee = document.querySelector("#name")
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
        timeout: 4000,
        position: 'topRight',
        class: 'custom-toast'
    })
}

function showSuccessToast(message) {
    iziToast.success({
        title: 'Muvaffaqiyat',
        message,
        timeout: 4000,
        position: 'topRight',
        class: 'custom-toast'
    })
}

let arr = []


form.addEventListener('submit', function (e) {

    e.preventDefault()





    if (!(namee.value.trim() == '')) {

    } else {


        showErrorToast("Ism kiriting!")
        return
    }



    if ((email.value.endsWith("@gmail.com"))) {

    } else {

        showErrorToast("Email '@gmail.com' bilan tugashi kerak.")
        return

    }


    if (kozcha.value.length >= 8) {

    } else {

        showErrorToast("Parol kamida 8 ta belgidan iborat bo'lishi kerak.")
        return
    }




    if (conkozcha.value == kozcha.value) {


    } else {

        showErrorToast("Parollar mos tushmayapti!")
        return

    }

    if (kozcha.value.length >= 8 && (email.value.endsWith("@gmail.com")) && conkozcha.value == kozcha.value && namee.value.trim().length > 0) {




        arr.push(
            {
                name: namee.value,
                email: email.value,
                pass: kozcha.value
            }
        )

        localStorage.setItem('user', JSON.stringify(arr))

        submitButton.disabled = true
        submitButton.style.opacity = '0.5'
        submitButton.style.cursor = 'not-allowed'
        submitButton.textContent = 'Kutilmoqda...'

        showSuccessToast("Ro'yxatdan o'tdingiz")
        setTimeout(() => {
            window.location.href = "./accaunt.html"
        }, 2000)
    } else {
        console.log("error");
    }



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

