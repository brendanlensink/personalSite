window.onload = (event) => {
  const containers = document.getElementsByClassName("head-container")

  let positions = []
  for (const container of containers) {
    const newPos = getRandom(positions)
    container.style.position = "absolute"
    container.style.left = `${newPos[0]}px`
    container.style.bottom = `${newPos[1]}px`

    positions.push(newPos)
  }
};

function tap(img) {
  img.src = img.src.replace("up", "down")

  setTimeout(function() {
      img.src = img.src.replace("down", "up")
  }, 250);
  
  let audio = new Audio(`canthresh/${img.id}.mp3`);
  audio.play();
}

function getRandom(positions) {
  const self = this;
  const left = (Math.random() * (window.innerWidth - 400) + 200)
  const bottom = (Math.random() * (window.innerHeight - 400) + 200)

  for (const position of positions) {
    const xDiff = Math.abs(position[0] - left)
    const yDiff = Math.abs(position[1] - bottom)

    const xSq = Math.pow(xDiff, 2)
    const ySq = Math.pow(yDiff, 2)

    const dist = Math.sqrt(xSq + ySq)

    if (dist <= 200) {
      return (getRandom(positions))
    }
  }

  return [left, bottom]
}