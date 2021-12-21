function tap(img) {
  img.src = img.src.replace("up", "down")

  setTimeout(function() {
      img.src = img.src.replace("down", "up")
  }, 250);
  
  let audio = new Audio(`canthresh/${img.id}.mp3`);
  audio.play();
}