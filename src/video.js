// // Videojs

let myPlayer = document.querySelector(".video-js");
        
console.log(myPlayer);

videojs(myPlayer, {
  controls: true,
  autoplay: false,
  liveui: true,
  preload: "auto",
  poster: "",
});