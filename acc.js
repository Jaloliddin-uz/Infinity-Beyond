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
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalVideo = document.getElementById('modal-video');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.getElementsByClassName('close')[0];

const categoryInfo = {
    'Earth': {
        description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth\'s surface is land consisting of continents and islands.',
        video: 'https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/Yer.mp4'
    },
    'Stars': {
        description: 'A star is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity. The nearest star to Earth is the Sun.',
        video: 'https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/stars.mp4'
    },
    'NASA': {
        description: 'NASA is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and aerospace research.',
        video: 'https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/nasa.mp4'
    },
    'Supernovas': {
        description: 'A supernova is a powerful and luminous stellar explosion. This transient astronomical event occurs during the last evolutionary stages of a massive star or when a white dwarf is triggered into runaway nuclear fusion.',
        video: 'https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/supernova.mp4'
    },
    'Astronauts': {
        description: 'An astronaut is a person trained, equipped, and deployed by a human spaceflight program to serve as a commander or crew member aboard a spacecraft.',
        video: 'https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/Astronaut.mp4'
    },
    'Cosmos': {
        description: 'The cosmos is another name for the Universe. Using the word cosmos implies viewing the universe as a complex and orderly system or entity.',
        video: 'https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/cosmos.mp4'
    },
    'History of space': {
        description: 'The history of space exploration includes the significant events and people in the exploration of the space above Earth\'s atmosphere.',
        video: 'https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/History.mp4'
    },
    'Solar system': {
        description: 'The Solar System is the gravitationally bound system of the Sun and the objects that orbit it, either directly or indirectly.',
        video: 'https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/solar.mp4'
    },
    'Via Láctea': {
        description: 'The Milky Way is the galaxy that contains our Solar System. Its name "milky" is derived from its appearance as a dim glowing band arching across the night sky.',
        video: 'https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/milky.mp4'
    },
    'Moon': {
        description: 'The Moon is Earth\'s only natural satellite. It is the fifth-largest satellite in the Solar System and the largest among planetary satellites relative to the size of the planet that it orbits.',
        video: 'https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/moonlandscape.mp4'
    }
};

const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', function () {
        const title = this.querySelector('.category-card__title').textContent;
        const info = categoryInfo[title];
        if (info) {
            modalTitle.textContent = title;
            modalDescription.textContent = info.description;
            modalVideo.src = info.video;
            modal.style.display = 'block';
        }
    });
});

closeBtn.onclick = function () {
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.src = '';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        modalVideo.pause();
        modalVideo.src = '';
    }
}
















render(recent_movies);



function render(array) {
    const sec_recent = document.querySelector(".recent__cards");
    sec_recent.innerHTML = "";

    array.forEach(function (element) {



        sec_recent.innerHTML +=
            `            <div class="card">
                <a class="more" href="acc-detail.html?id=${element.id}">
                        <video src="${element.video}" autoplay muted loop></video>
                        <h3 class="card__title">${element.title}</h3>
                        <p class="card__overview">${element.overview}</p>
                </a>
                    </div>

`
    });
}












render2(award1);



function render2(array) {
    const sec_award1 = document.querySelectorAll(".award__imgs")[0];
    sec_award1.innerHTML = "";

    array.forEach(function (element) {



        sec_award1.innerHTML +=
            `


            <div class="award__img" >
                <a class="more" href="award1.html?id=${element.id}">
                    <video src="${element.video}" autoplay muted loop></video>
                    <p class="award__img__text">${element.title}</p>
                </a>
            </div>



        `
    });
}



render3(award2);



function render3(array) {
    const sec_award2 = document.querySelectorAll(".award__imgs")[1];
    sec_award2.innerHTML = "";

    array.forEach(function (element) {



        sec_award2.innerHTML +=
            `


            <div class="award__img" >
                <a class="more" href="award2.html?id=${element.id}">
                    <video src="${element.video}" autoplay muted loop></video>
                    <p class="award__img__text">${element.title}</p>
                </a>
            </div>



        `
    });
}

