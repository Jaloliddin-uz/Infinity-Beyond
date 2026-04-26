

const path = new URLSearchParams(window.location.search)

let id = path.get("id")
let movie = null

for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === id) {
        movie = movies[i]
    }
}

if (!movie) {
    movie = movies[0]; 
}

document.body.innerHTML +=

    `    <div class="movie-page">

        <div class="mid">
            <div class="video-container">
                <iframe src="${movie.video}" width="640"
                    height="480" allow="autoplay" allow ></iframe>
            </div>

            <div class="right">
                <h1 class="title">${movie.title}</h1>
                <p>${movie.overview}</p>
            </div>
        </div>

    </div >`



