const rolldice = document.getElementById("butt");
rolldice.onclick = function () {
  let input = document.getElementById("no");
  let ans = document.getElementById("value");
  let random1;
  let random2;
  let values = [];
  let images = [];
  let diceimages = document.getElementById("diceimages");
  for (let i = 0; i < input.value; i++) {
    random1 = Math.random() * 6;
    random2 = Math.floor(random1) + 1;
    values.push(random2);
    images.push(
      `<img src="dice${random2}no.png" alt="this is a image" width="250" height="250">`
    );
  }
  if (
    input.value != 1 &&
    input.value != 2 &&
    input.value != 3 &&
    input.value != 4 &&
    input.value != 5 &&
    input.value != 6
  ) {
    ans.textContent = `Sorry,Dice has only 6 faces`;
  } else {
    ans.textContent = `Dice:${values.join(", ")}`;
    diceimages.innerHTML = images.join(" ");
  }
};
