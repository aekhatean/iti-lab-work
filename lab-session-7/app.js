// Globals
let fullNameValidated = undefined,
  passwordValidated = undefined;

function mBorderBlue(element) {
  element.style.border = "1px solid blue";
}

function mBorderDisappear(element) {
  element.style.border = 0;
}

function validateFullName(fname) {
  const value = fname.value;

  if (!(value.length >= 3 && value.trim().length)) {
    fname.style.backgroundColor = "#80808045";
    document.getElementById("fname-status").innerHTML =
      "<font color='red'>Inavlid Name.<font>";
  } else {
    fname.style.backgroundColor = "white";
  }
  fullNameValidated = Boolean(value.length >= 3 && value.trim().length);
}

function validatePassword(rePass) {
  const password = document.getElementById("password").value;

  if (rePass.value !== password) {
    rePass.style.backgroundColor = "#80808045";
    document.getElementById("pass-matching-status").innerHTML =
      "<font color='red'>Password and repeat password should match<font>";
  } else {
    rePass.style.backgroundColor = "white";
    document.getElementById("pass-matching-status").innerHTML = "";
  }
  passwordValidated = Boolean(rePass.value === password);
}

function displayThanks() {
  const nameCookie = document.cookie.split(",")[0].split("=")[1];
  document.getElementById(
    "thanks"
  ).innerHTML = `Thank you, <b>${nameCookie}</b> for registering in our website!`;
}

function validateForm(ev, form) {
  const name = form[0].value;
  const afterSession = new Date("10-10-2010");
  if (fullNameValidated && passwordValidated) {
    document.cookie = `name=${name}, expires=${afterSession}`;
  } else {
    ev.preventDefault();
    alert("Please, correct the validation error");
  }
}

// Gallery player
let currImageIndex = 0;

function createImagesList() {
  let newImage = undefined;
  const displayingList = document.getElementById("images-list");

  // Images are named by numbers from 1 to 8
  for (let imageElemIndex = 1; imageElemIndex <= 8; imageElemIndex++) {
    newImage = document.createElement("img");
    newImage.setAttribute("src", `./res/${imageElemIndex}.jpg`);
    newImage.classList.add("image-list-element");
    displayingList.appendChild(newImage);
  }
}

function hideButton() {
  const btns = document.getElementsByClassName("player-control");
  const arrows = document.getElementsByClassName("arrow");

  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.toggle("hidden");
  }

  // remove arrow buttons if images slider is autoplaying
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].classList.toggle("hidden");
  }
}

let autoPlay = 0;
const disImage = document.getElementById("img-container");
const imagesList = document.getElementById("images-list");
function playGallery() {
  autoPlay = setInterval(() => {
    disImage.innerHTML = `<img src=${imagesList.children[currImageIndex].src} />`;
    currImageIndex++;
    if (currImageIndex >= imagesList.children.length) {
      currImageIndex = 0;
    }
  }, 500);
}

// Returns interval id but does not clear it
function pauseGallery() {
  clearInterval(autoPlay);
}

function nextImage() {
  currImageIndex++;
  disImage.innerHTML = `<img src=${imagesList.children[currImageIndex].src} />`;
}

function prevImage() {
  currImageIndex--;
  disImage.innerHTML = `<img src=${imagesList.children[currImageIndex].src} />`;
}

/**
 * Bonus assignments starting from page 3
 */
// -----------------
// Rating stars page
// -----------------

const stars = document.getElementsByClassName("star");
let shinyStars = undefined;
let dullStats = undefined;
for (let starIndex = 0; starIndex < stars.length; starIndex++) {
  // make stars shine on mouse over (in)
  stars[starIndex].addEventListener("mouseover", function () {
    shinyStars = [].slice.call(stars, 0, starIndex + 1);
    for (shinyStarIndex in shinyStars) {
      shinyStars[shinyStarIndex].src = "/res/Filled_star.png";
    }
    console.log(shinyStars);
  });

  // make stars go dull on mouse leave (out)
  stars[starIndex].addEventListener("mouseleave", function () {
    dullStars = [].slice.call(stars, starIndex, stars.length);
    for (dullStarIndex in dullStars) {
      dullStars[dullStarIndex].src = "/res/empty_star.png";
    }
    console.log(dullStars);
  });
}
