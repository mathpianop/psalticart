
  for (i = 0; i < notes.length; i++) {
    console.log(notes);
    let noteId = notes[i].id;
    notes[i].clip = document.getElementById(`clip-${noteId}`);
    notes[i].clip.hold = false
    notes[i].addEventListener("mouseenter", playit);
    notes[i].addEventListener("mouseout", stopit);
    notes[i].addEventListener("click", togglePlay);
  };

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
