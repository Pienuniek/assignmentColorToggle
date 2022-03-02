const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const parent = document.querySelector(".parent");
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
  if (body.classList.contains("bgGreen")) {
    body.classList.replace("bgGreen", "bgGrey");
    defaultRadioBtn.checked = true;
    colorText.innerHTML = "Grey";
    menu.style.left = "";
  } else if (body.classList.contains("bgPurple")) {
    body.classList.replace("bgPurple", "bgGrey");
    defaultRadioBtn.checked = true;
    colorText.innerHTML = "Grey";
    menu.style.left = "";
  } else if (body.classList.contains("bgOrange")) {
    body.classList.replace("bgOrange", "bgGrey");
    defaultRadioBtn.checked = true;
    colorText.innerHTML = "Grey";
    menu.style.left = "";
  } else if (body.classList.contains("bgRed")) {
    body.classList.replace("bgRed", "bgGrey");
    defaultRadioBtn.checked = true;
    colorText.innerHTML = "Grey";
    menu.style.left = "";
  } else {
    defaultRadioBtn.checked = true;
    colorText.innerHTML = "Grey";
    menu.style.left = "";
  }
}
//change the background to red and set the radiobutton on checked
//The text on the page is 'Red'
function backgroundRed() {
  if (body.classList.contains("bgGreen")) {
    body.classList.replace("bgGreen", "bgRed");
    colorText.innerHTML = "Red";
    redRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgPurple")) {
    body.classList.replace("bgPurple", "bgRed");
    colorText.innerHTML = "Red";
    redRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgOrange")) {
    body.classList.replace("bgOrange", "bgRed");
    colorText.innerHTML = "Red";
    redRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgGrey")) {
    body.classList.replace("bgGrey", "bgRed");
    colorText.innerHTML = "Red";
    redRadioBtn.checked = true;
    menu.style.left = "";
  } else {
    colorText.innerHTML = "Red";
    redRadioBtn.checked = true;
    menu.style.left = "";
  }
}
//change the background to orange and set the radiobutton on checked
//The text on the page is 'Orange'
function backgroundOrange() {
  if (body.classList.contains("bgGreen")) {
    body.classList.replace("bgGreen", "bgOrange");
    colorText.innerHTML = "Orange";
    orangeRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgPurple")) {
    body.classList.replace("bgPurple", "bgOrange");
    colorText.innerHTML = "Orange";
    orangeRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgGrey")) {
    body.classList.replace("bgGrey", "bgOrange");
    colorText.innerHTML = "Orange";
    orangeRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgRed")) {
    body.classList.replace("bgRed", "bgOrange");
    colorText.innerHTML = "Orange";
    orangeRadioBtn.checked = true;
    menu.style.left = "";
  } else {
    orangeRadioBtn.checked = true;
    colorText.innerHTML = "Orange";
    menu.style.left = "";
  }
}
//change the background to purple and set the radiobutton on checked
//The text on the page is 'Purple
function backgroundPurple() {
  if (body.classList.contains("bgGreen")) {
    body.classList.replace("bgGreen", "bgPurple");
    colorText.innerHTML = "Purple";
    purpleRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgGrey")) {
    body.classList.replace("bgGrey", "bgPurple");
    colorText.innerHTML = "Purple";
    purpleRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgOrange")) {
    body.classList.replace("bgOrange", "bgPurple");
    colorText.innerHTML = "Purple";
    purpleRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgRed")) {
    body.classList.replace("bgRed", "bgPurple");
    colorText.innerHTML = "Purple";
    purpleRadioBtn.checked = true;
    menu.style.left = "";
  } else {
    purpleRadioBtn.checked = true;
    colorText.innerHTML = "Purple";
    menu.style.left = "";
  }
}
//change the background to green and set the radiobutton on checked
//The text on the page is 'Green'
function backgroundGreen() {
  if (body.classList.contains("bgGrey")) {
    body.classList.replace("bgGrey", "bgGreen");
    colorText.innerHTML = "Green";
    greenRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgPurple")) {
    body.classList.replace("bgPurple", "bgGreen");
    colorText.innerHTML = "Green";
    greenRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgOrange")) {
    body.classList.replace("bgOrange", "bgGreen");
    colorText.innerHTML = "Green";
    greenRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgRed")) {
    body.classList.replace("bgRed", "bgGreen");
    colorText.innerHTML = "Green";
    greenRadioBtn.checked = true;
    menu.style.left = "";
  } else {
    greenRadioBtn.checked = true;
    colorText.innerHTML = "Green";
    menu.style.left = "";
  }
}
