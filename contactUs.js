document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector(".name").value.trim();
        const email = form.querySelector(".email").value.trim();
        const message = form.querySelector(".textarea").value.trim();

        // Telegram API uchun kerakli ma’lumotlar
        const token = "8680820440:AAE1mvLQmgidp3A6MHBIuSsayACG8yl-ffo";
        const chat_id = "6125481136";
        const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

        const text = `
📩 *Yangi ariza!*
👤 Ismi: *${name}*
✉️ Email: *${email}*
💬 Izoh: ${message}
    `;
        console.log(text);

        // API orqali yuborish
        fetch(telegramUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: text,
            }),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.ok) {
                    Swal.fire({
                        title: "Yuborildi",
                        text: "Xabar muvaffaqiyatli jo'natildi",
                        icon: "success"
                    });
                    form.reset();
                } else {
                    Swal.fire({
                        title: "Xatolik",
                        text: data.description || "Xatolik yuz berdi",
                        icon: "error"
                    });
                }
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: "Xatolik",
                    text: "Server bilan ulanishda muammo",
                    icon: "error"
                });
            });
    });
});


const usersJSON = localStorage.getItem('user');
const users = usersJSON ? JSON.parse(usersJSON) : null;

const nameLabel = document.querySelector('.username');

const del = document.querySelector('.btn3');

del.addEventListener('click', function () {

    localStorage.clear()
    window.location.href = "index.html";
})

const accgmail = document.querySelector('.gmail');
const pass = document.querySelector('.passw');
const namee = document.querySelector('.name');
const profilePic = document.querySelector('.image img');
const headerAvatar = document.querySelector('.header__avatar');
const userFile = document.querySelector('.user-file');

if (users && users[0]) {
    const currentUser = users[0];
    nameLabel.textContent = currentUser.name || 'User';
    namee.textContent += currentUser.name || '';
    accgmail.textContent += currentUser.email || '';
    pass.textContent += currentUser.pass || '';
} else {
    nameLabel.textContent = 'Guest';
    namee.textContent += 'Unknown';
    accgmail.textContent += 'unknown';
    pass.textContent += '******';
}



const DEFAULT_AVATAR = 'src/default.png';
const storedAvatar = localStorage.getItem('profileImage');

const initialAvatar = storedAvatar || DEFAULT_AVATAR;
if (profilePic) {
    profilePic.src = initialAvatar;
}
if (headerAvatar) {
    headerAvatar.src = initialAvatar;
}

if (userFile) {
    userFile.addEventListener('change', function () {
        const file = userFile.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            const base64 = event.target.result;
            if (profilePic) {
                profilePic.src = base64;
            }
            if (headerAvatar) {
                headerAvatar.src = base64;
            }
            localStorage.setItem('profileImage', base64);
        };
        reader.readAsDataURL(file);
    });
}