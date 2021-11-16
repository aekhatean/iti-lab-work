let repeatTime = undefined;
let adWindow = undefined;

document.getElementById("detect").addEventListener("keydown", function (event) {
  console.log(event.key);
});

function displayClock() {
  let currTime = new Date().getTime();
  currTime = new Date(currTime).toString();
  repeatTime = setInterval(
    () => (document.getElementById("txtboxid").value = currTime),
    1000
  );
}

document.addEventListener("keydown", function (event) {
  if (event.key == "s") {
    clearInterval(repeatTime);
  }
});

function openAd() {
  adWindow = open("", "_blank", "height=500px", "width=300px");
  adWindow.focus();
}

function closeAd() {
  adWindow.close();
}

// Smiley face page
function changeExp() {
  document.getElementById("sm-sa").src =
    "https://ih1.redbubble.net/image.1849445138.4826/st,small,845x845-pad,1000x1000,f8f8f8.jpg"; //Sad face img
}

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  const userName = document.getElementById("username"),
    password = document.getElementById("password");
  localStorage.setItem("username", userName.value);
  localStorage.setItem("password", password.alue);
  getUserData();
});

function getUserData() {
  console.log(`userName: ${localStorage.getItem("username")}`);
  console.log(`Password: ${localStorage.getItem("password")}`);
}
