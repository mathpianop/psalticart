/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/javascript/scales.js ***!
  \**********************************/
const notes = document.getElementsByClassName("note");

Array.from(notes).forEach(note => {
  note.clip = document.getElementById(`clip-${note.id}`);
  note.clip.hold = false
  note.addEventListener("mouseenter", playit);
  note.addEventListener("mouseout", stopit);
  note.addEventListener("click", togglePlay);
  note.addEventListener("touchstart", playit);
  note.addEventListener("touchend", stopit);
})



function togglePlay() {
  if (this.clip.hold === false) {
    this.clip.hold = true;
  } else {
    this.clip.hold = false;
    this.clip.pause();
    this.style.backgroundColor = "transparent";
  };
};

function playit() {
  this.style.backgroundColor = "#ecc666";
  this.clip.load();
  this.clip.play();
};

function stopit() {
  if (this.clip.hold === false) {
    this.clip.pause();
    this.style.backgroundColor = "transparent";
    
  };
}

/******/ })()
;
//# sourceMappingURL=scales.js.map