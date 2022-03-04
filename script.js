const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const parent = document.querySelector(".parent");
const bgrGrey = document.querySelector(".bgGrey");
const bgrRed = document.querySelector(".bgRed");
const bgrOrange = document.querySelector(".bgOrange");
const bgrPurple = document.querySelector(".bgPurple");
const bgrGreen = document.querySelector(".bgGreen");
const defaultRadioBtn = document.getElementById("Grey");
const redRadioBtn = document.getElementById("Red");
const orangeRadioBtn = document.getElementById("Orange");
const purpleRadioBtn = document.getElementById("Purple");
const greenRadioBtn = document.getElementById("Green");
const colorText = document.querySelector(".colorName");

defaultRadioBtn.checked = true;

//click on hamburger to open menu
hamburger.addEventListener("click", () => (menu.style.left = 0));

//press 1 through 5 to get the collored backgrounds
document.addEventListener("keyup", (e) => {
  if (e.key === "1") {
    backgroundGrey();
  } else if (e.key === "2") {
    backgroundRed();
  } else if (e.key === "3") {
    backgroundOrange();
  } else if (e.key === "4") {
    backgroundPurple();
  } else if (e.key === "5") {
    backgroundGreen();
  }
});

//open menu on hover over hamburger
parent.addEventListener("mouseover", () => (menu.style.left = 0));
parent.addEventListener("mouseout", () => (menu.style.left = ""));

//change the background to grey and set the radiobutton on checked
//The text on the page is 'Grey'
function backgroundGrey() {
  body.classList = "bgGrey";
  defaultRadioBtn.checked = true;
    colorText.innerHTML = "Grey";
    menu.style.left = "";
}

//change the background to red and set the radiobutton on checked
//The text on the page is 'Red'
function backgroundRed() {
  body.classList = "bgRed";
  redRadioBtn.checked = true;
    colorText.innerHTML = "Red";
    menu.style.left = "";
}

//change the background to orange and set the radiobutton on checked
//The text on the page is 'Orange'
function backgroundOrange() {
  body.classList = 'bgOrange';
  orangeRadioBtn.checked = true;
    colorText.innerHTML = "Orange";
    menu.style.left = "";
}

//change the background to purple and set the radiobutton on checked
//The text on the page is 'Purple
function backgroundPurple() {
  body.classList = 'bgPurple';
  purpleRadioBtn.checked = true;
    colorText.innerHTML = "Purple";
    menu.style.left = "";
}

//change the background to green and set the radiobutton on checked
//The text on the page is 'Green'
function backgroundGreen() {
  body.classList = 'bgGreen';
  greenRadioBtn.checked = true;
    colorText.innerHTML = "Green";
    menu.style.left = "";
}

