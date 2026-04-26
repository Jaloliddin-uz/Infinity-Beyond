var recent_movies = [{
    id: "1",
    title: "Jupiter - The Gas Giant",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/Jupiter.mp4",
    overview: "Season 01 - Episode 03",
    info: "Jupiter is the largest planet in our solar system and is classified as a gas giant. It is the fifth planet from the Sun and has a mass that is more than twice that of all the other planets combined. Jupiter is primarily composed of hydrogen and helium, with trace amounts of other gases. The planet has a strong magnetic field and is known for its prominent bands of clouds, which are made up of ammonia crystals. Jupiter also has a Great Red Spot, which is a massive storm that has been raging for centuries. The planet has at least 79 moons, including the four largest known as the Galilean moons: Io, Europa, Ganymede, and Callisto."
},
{
    id: "2",
    title: "Earth exploration",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/Yer.mp4",
    overview: "Season 02 - Episode 01",
    info: "Earth is the third planet from the Sun and the only known astronomical object to harbor life. It has a diverse range of ecosystems, including forests, deserts, oceans, and polar regions. Earth has a diameter of about 12,742 kilometers and a mass of approximately 5.97 x 10^24 kilograms. The planet's atmosphere is composed primarily of nitrogen and oxygen, with trace amounts of other gases. Earth has one natural satellite, the Moon, which orbits the planet at an average distance of about 384,400 kilometers. The planet's surface is constantly changing due to geological processes such as plate tectonics, erosion, and volcanic activity."
},
{
    id: "3",
    title: "Mars the fourth planet",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/mars.mp4",
    overview: "Season 01 - Episode 02",
    info: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet' because the iron oxide prevalent on its surface gives it a reddish appearance. Mars is a terrestrial planet with a thin atmosphere, composed primarily of carbon dioxide. The planet's surface features include impact craters, valleys, dunes, and polar ice caps. Mars has two moons, Phobos and Deimos, which are thought to be captured asteroids. The planet has been a target for exploration due to its potential for past or present life and its suitability for future human colonization."
},
{
    id: "4",
    title: "Green Aurora",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/yashil.mp4",
    overview: "Season 03 - Episode 02",
    info: "The green aurora, also known as the aurora borealis in the northern hemisphere and aurora australis in the southern hemisphere, is a natural light display that occurs in the polar regions. It is caused by the interaction of charged particles from the solar wind with the Earth's magnetic field and atmosphere. When these particles collide with atoms and molecules in the Earth's atmosphere, they excite them, causing them to emit light. The green color of the aurora is primarily due to the excitation of oxygen atoms at altitudes of around 100-150 kilometers. The intensity and shape of the aurora can vary greatly, creating stunning displays of light that dance across the night sky."
},
{
    id: "5",
    title: "Big Earth Moon",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/Big-moon.mp4",
    overview: "Season 01 - Episode 01",
    info: "The Moon is Earth's only natural satellite and is the fifth largest moon in the Solar System. It has a diameter of about 3,474 kilometers and a mass of approximately 7.35 x 10^22 kilograms. The Moon's surface is covered with craters, mountains, and plains, and it has a very thin atmosphere called an exosphere. The Moon orbits Earth at an average distance of about 384,400 kilometers and takes about 27.3 days to complete one orbit. The Moon's gravitational influence on Earth is responsible for the tides in the oceans. The Moon has been a subject of human fascination for centuries and has been explored by various space missions, including the Apollo program, which successfully landed astronauts on its surface."
},
{
    id: "6",
    title: "What Nasa says about Earth",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/Nasa2.mp4",
    overview: "Season 03 - Episode 04",
    info: "NASA, the National Aeronautics and Space Administration, is a United States government agency responsible for the nation's civilian space program and for aeronautics and aerospace research. NASA conducts various missions to explore Earth and its environment from space. Through satellites and other space-based instruments, NASA monitors Earth's climate, weather patterns, land use, and natural disasters. The agency also studies Earth's atmosphere, oceans, and ecosystems to better understand the planet's processes and how they are changing over time. NASA's Earth science missions provide valuable data that helps scientists and policymakers make informed decisions about environmental issues and the future of our planet."
}
];

var award1 = [{
    id: "1",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/asteroid.mp4",
    title: "Meteorites & Asteroids: What If?",
    info: "Explore the fascinating world of meteorites and asteroids. Discover what would happen if a massive asteroid collided with Earth, and learn about the different types of asteroids that orbit our solar system. Scientists use this knowledge to better understand the formation of our planet and to predict potential threats. From the impact that led to the extinction of the dinosaurs to the ongoing efforts to track near-Earth objects, this documentary delves into the science and history of these celestial bodies and their significance to our planet's past and future."
},
{
    id: "2",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/Star-wars.mp4",
    title: "Wars Of The Stars: The Galetrooper",
    info: "An epic documentary exploring space battles throughout history and the imagined future conflicts in space. From early space race rivalries to fictional space warfare scenarios, this documentary examines humanity's fascination with cosmic conflict and interstellar exploration. Through expert interviews, historical footage, and stunning visual effects, it delves into the strategic, technological, and ethical implications of space warfare, while also celebrating the enduring allure of the stars as a backdrop for human drama and adventure."
},
{
    id: "3",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/Raketa.mp4",
    title: "Space Shuttle Launches",
    info: "Experience the thrilling moments of space shuttle launches and the incredible technology that makes them possible. Learn about the engineering marvels that have enabled human space exploration for decades. From the iconic Space Shuttle program to the latest advancements in rocket technology, this documentary takes you on a journey through the history and future of space travel. Witness the awe-inspiring power of rocket engines, the precision of launch sequences, and the dedication of astronauts and engineers who have made space exploration a reality. Whether it's the excitement of liftoff or the challenges of reaching orbit, this documentary celebrates the human spirit of exploration and innovation that continues to push the boundaries of what is possible in space."
},
{
    id: "4",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/Atmosfera.mp4",
    title: "What is atmosphere",
    info: "Learn about Earth's atmosphere, its layers, composition, and its vital role in sustaining life on our planet. Discover how atmospheric dynamics shape our weather and climate. Explore the interactions between the atmosphere and space, including phenomena like auroras and the impact of solar radiation. This documentary delves into the science of the atmosphere, its importance for life, and the challenges we face in understanding and protecting this crucial component of our planet."
},
{
    id: "5",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/redmars.mp4",
    title: "Red Mars appearance",
    info: "Discover why Mars appears red and explore the unique geological features that make the Red Planet so fascinating. Understand the iron oxide composition that gives Mars its distinctive color. Learn about the planet's surface, including its vast deserts, towering volcanoes, and deep canyons. This documentary delves into the science behind Mars' appearance and its significance in our quest to understand the solar system and the potential for life beyond Earth."
},
{
    id: "6",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/moonlandscape.mp4",
    title: "Earth Moon landscape",
    info: "Explore the stunning landscapes of Earth's Moon and understand its geological composition and formation. Discover the craters, mountains, and valleys that make our satellite unique. Learn about the Moon's history, including its formation from a giant impact and its influence on Earth's tides and rotation. This documentary takes you on a visual journey through the Moon's surface, revealing its beauty and scientific significance in our understanding of the solar system."
}
];


var award2 = [{
    id: "1",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/oddisey.mp4",
    title: "Cosmos: A Spacetime Odyssey",
    info: "Cosmos: A Spacetime Odyssey is a documentary series that explores the wonders of the universe, from the origins of life on Earth to the vastness of space. Hosted by astrophysicist Neil deGrasse Tyson, the series takes viewers on a journey through time and space. It covers a wide range of topics, including the history of scientific discovery, the nature of the cosmos, and the potential for life beyond Earth. With stunning visuals and engaging storytelling, Cosmos inspires curiosity and a deeper understanding of our place in the universe."
},
{
    id: "2",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/Planets.mp4",
    title: "The Planets",
    info: "The Planets is a documentary series that explores the unique characteristics and mysteries of each planet in our solar system. From the scorching surface of Mercury to the icy rings of Saturn, this series takes viewers on a journey through the diverse worlds. It delves into the geology, atmosphere, and potential for life on each planet, while also examining the history of space exploration and the scientific discoveries that have shaped our understanding of these celestial bodies. With stunning visuals and expert insights, The Planets offers a captivating look at the wonders of our solar system."
},
{
    id: "3",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/alien.mp4",
    title: "Alien Worlds",
    info: "Alien Worlds explores the possibilities of extraterrestrial life and examines exoplanets that could harbor life. Discover the scientific methods used to search for life beyond Earth. Learn about the conditions necessary for life and the potential diversity of alien ecosystems. This documentary combines scientific research with imaginative storytelling to explore the fascinating question of whether we are alone in the universe."
},
{
    id: "4",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/Astronaut.mp4",
    title: "The Last Man on the Moon",
    info: "The Last Man on the Moon tells the remarkable story of the final Apollo mission and the incredible achievements of lunar exploration. Experience the history of human space travel. Learn about the challenges and triumphs of the Apollo program. This documentary offers a poignant look at the legacy of space exploration and the enduring human spirit of discovery."
},
{
    id: "5",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/blackhole1.mp4",
    title: "NOVA: Blackhole Apocalypse",
    info: "NOVA: Blackhole Apocalypse uncovers the mysteries of black holes and their role in shaping the universe. Learn about the physics that governs these cosmic phenomena. Discover how black holes form, their effects on surrounding space, and the groundbreaking research that continues to reveal their secrets. This documentary delves into the science of black holes and their significance in our understanding of the cosmos." 
},
{
    id: "6",
    video: "https://lmdghnkgapqakojdrpfi.supabase.co/storage/v1/object/public/Infinity&videos/blackhole2.mp4",
    title: "Black Holes: The Edge Of All We Know",
    info: "A deep dive into the physics of black holes and the groundbreaking discoveries that revolutionized our understanding. Explore the cutting-edge research that continues to reveal black hole secrets. Discover how black holes challenge our understanding of space, time, and the nature of reality. This documentary offers a captivating look at the mysteries of black holes and their profound implications for our understanding of the universe."
}
];



