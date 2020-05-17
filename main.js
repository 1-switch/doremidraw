document.onkeydown = (e) => {
  if (e.keyCode === 32 || e.keyCode === 13) {
    stepAction();
  }
};

document.onclick = () => {
  stepAction();
};

let stepAction = () => {
  let num = Number(document.getElementById('mask').src.substr(-5, 1));
  if (num == 9) {
    document.getElementById('mask').src = `images/mask1.png`;
  } else {
    music = new Audio(`sounds/sound${num}.wav`);
    music.play();
    num++;
    document.getElementById('mask').src = `images/mask${num}.png`;
  }
}
