document.onkeydown = (e) => {
  if (e.keyCode === 32 || e.keyCode === 13) {
    stepAction();
  }
};

document.onclick = () => {
  stepAction();
};

let stepAction = () => {
  let mask_num = Number(document.getElementById('mask').src.substr(-5, 1));
  let image_num = Number(document.getElementById('image').src.substr(-5, 1));

  if (mask_num == 9) {
    document.getElementById('mask').src = `images/mask1.png`;
    if (image_num == 9) {
      document.getElementById('image').src = `images/image1.png`;
    } else {
      image_num++;
      document.getElementById('image').src = `images/image${image_num}.png`;
    }
  } else {
    sound = new Audio(`sounds/sound${mask_num}.wav`);
    sound.play();
    mask_num++;
    document.getElementById('mask').src = `images/mask${mask_num}.png`;
  }
}
