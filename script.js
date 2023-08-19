const genreSelect = document.getElementById("genreSelect");
const randomizeButton = document.getElementById("randomizeButton");
const player = document.getElementById("player");

const genreToQuery = {
  pop: "Pop",
  rock: "Rock",
  hiphop: "Hip-hop",
  rnb: "R&B (Rhythm and Blues)",
  electronic: "Eletrônica",
  jazz: "Jazz",
  blues: "Blues",
  reggae: "Reggae",
  country: "Country",
  classical: "Clássica",
  folk: "Folk",
  indie: "Indie",
  metal: "Metal",
  funk: "Funk",
  soul: "Soul",
  punk: "Punk",
  rap: "Rap",
  dance: "Dance",
  sertanejo: "Sertanejo",
  gospel: "Gospel",
  edm: "Eletrônica Dance Music (EDM)",
  instrumental: "Instrumental",
  dubstep: "Dubstep",
  reggaeton: "Reggaeton",
  flamenco: "Flamenco",
  ska: "Ska",
  techno: "Techo",
  newage: "New Age",
  ambient: "Ambient",
  opera: "Opera"
};

randomizeButton.addEventListener("click", () => {
  const selectedGenre = genreSelect.value;
  const searchQuery = genreToQuery[selectedGenre];

  if (searchQuery) {
    searchRandomVideo(searchQuery);
  }
});

function searchRandomVideo(query) {
  const apiKey = "AIzaSyBpTqKmdsMwlhCdgTFWsJm60OIE6Jo8P8c";
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${query}&type=video&maxResults=10`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.items.length);
      const videoId = data.items[randomIndex].id.videoId;
      const videoUrl = `https://www.youtube.com/embed/${videoId}`;

      player.innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    })
    .catch(error => console.error("Error fetching data:", error));
}
