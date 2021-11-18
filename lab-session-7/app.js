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

function togglePlayGallery(button) {
  const disImage = document.getElementById("img-container");
  const imagesList = document.getElementById("images-list");
  let counter = 0,
    autoPlay = undefined,
    shouldStop = false;

  if (button.innerHTML === "Play") {
    autoPlay = setInterval(() => {
      disImage.innerHTML = `<img src=${imagesList.children[counter].src} />`;
      counter++;
      if (counter >= imagesList.children.length) {
        counter = 0;
      }
      if (shouldStop) {
        console.log(shouldStop);
        clearInterval(autoPlay);
      }
    }, 500);
    button.innerHTML = "Pause";
  } else {
    button.innerHTML = "Play";
    shouldStop = true;
  }
  // console.log(shouldStop);
}
