
function togglePlay() {
  if (this.clip.hold === false) {
    this.clip.hold = true;
  } else {
    this.clip.hold = false;
    this.clip.pause();
    this.style.backgroundColor = "transparent";
  };
};

function playClip() {
  this.style.backgroundColor = "#ecc666";
  this.clip.load();
  this.clip.play();
};

function stopClip() {
  if (this.clip.hold === false) {
    this.clip.pause();
    this.style.backgroundColor = "transparent";
    
  };
}

function defineClip(note) {
  note.clip = document.getElementById(`clip-${note.id}`);
  note.clip.hold = false
}

function attachEventListeners(note) {
  note.addEventListener("mouseenter", playClip);
  note.addEventListener("mouseout", stopClip);
  note.addEventListener("click", togglePlay);
  note.addEventListener("touchstart", playClip);
  note.addEventListener("touchend", stopClip);
}

function removeLoadingMask() {
  
}

const notes = document.getElementsByClassName("note");

Array.from(notes).forEach(note => {
  defineClip(note)
  attachEventListeners(note);
})

const loadingMask = document.getElementById("loading-mask")
loadingMask.addEventListener("canplaythrough", removeLoadingMask)