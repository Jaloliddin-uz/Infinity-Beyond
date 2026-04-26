const path = new URLSearchParams(window.location.search)

let id = path.get("id")
let award = null
let data = award2
for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
        award = data[i]
    }
}

document.body.innerHTML +=
    `
    <div class="movie">


        <div class="vido-container">
            <video src="${award.video}" autoplay loop controls></video>

        </div>

        <div class="right">


            <h1 class="title">${award.title}</h1>

            <p class="info">${award.info}</p>

        </div>
    </div>



`



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
