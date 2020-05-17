document.onkeydown = (e) => {
  if (e.keyCode === 32 || e.keyCode === 13) {
    changeMask();
  }
};

document.onclick = () => {
  changeMask();
};

let changeMask = () => {
  let num = Number(document.getElementById('mask').src.substr(-5, 1));
  if (num == 9) {
    document.getElementById('mask').src = `images/mask1.png`;
  } else {
    num++;
    document.getElementById('mask').src = `images/mask${num}.png`;
  }
}
