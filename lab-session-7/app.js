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
const imagesArr = [""];

function getGalleryDimensions(child) {
  const { offsetWidth: width, offsetHeight: height } = child.parentElement;
  return {
    width,
    height,
  };
}

function togglePlayGallery(button) {
  const { width, height } = getGalleryDimensions(button);
  console.log(width, height);
  const gallery = document.getElementById("img-container");
  if (button.innerHTML === "Play") {
    setInterval(function () {
      for (image in imagesArr) {
        gallery.innerHTML = `<img src=${image}/>`;
      }
    }, 500);
    button.innerHTML = "Pause";
  } else {
    button.innerHTML = "Play";
  }
}
