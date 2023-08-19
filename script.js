const genreSelect = document.getElementById("genreSelect");
const randomizeButton = document.getElementById("randomizeButton");
const player = document.getElementById("player");

const genreToQuery = {
    rock: "Rock Music",
    pop: "Pop Music",
    hiphop: "Hip Hop Music",
    electronic: "Electronic Music",
    jazz: "Jazz Music",
    lofi: "Lofi Music",
    trap: "Trap Music",
    

};

randomizeButton.addEventListener("click", () => {
  const selectedGenre = genreSelect.value;
  const searchQuery = genreToQuery[selectedGenre];

  if (searchQuery) {
    searchRandomVideo(searchQuery);
  }
});

function searchRandomVideo(query) {
  const apiKey = "AIzaSyC7fxxtdfTL62IwJUC3y9K_gMiN4Nv9tSc";
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
