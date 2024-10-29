const photos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
const quotes = [
  "ini adalh tempat kalimat",
  "ini adalah tempat kalimat",
  "kalimat disini"
];

let currentIndex = 0;
const music = document.getElementById("background-music");

document.getElementById("start-button").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
  document.getElementById("content").style.display = "block";
  music.play();
  showContent();
});

document.getElementById("next-button").addEventListener("click", function () {
  currentIndex++;
  if (currentIndex < photos.length) {
    showContent();
  } else {
    alert("Semua quotes sudah ditampilkan!");
  }
});

function showContent() {
  document.getElementById("photo").src = photos[currentIndex];
  document.getElementById("quote").innerText = quotes[currentIndex];
}