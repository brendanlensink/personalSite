function tap(img) {
  img.src = img.src.replace("up", "down")

  setTimeout(function() {
      img.src = img.src.replace("down", "up")
  }, 250);
  
  let audio = new Audio(`canthresh/${img.id}.mp3`);
  audio.play();
}

function actually(img) {
  img.src = img.src.replace("up", "down")

  setTimeout(function() {
      img.src = img.src.replace("down", "up")
  }, 250);
  
  const options = ["jeff_dragons.mp3", "jeff_loch.mp3"]
  let audio = new Audio(`canthresh/${options[Math.floor(Math.random()*options.length)]}.mp3`);
  audio.play();
}
