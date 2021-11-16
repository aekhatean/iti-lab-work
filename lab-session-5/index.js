"use strict";

const jsTips = [
  "Get your foundations right.",
  "Don’t forget var keyword when assigning a variable’s value for the first time.",
  "use === instead of ==",
  "undefined, null, 0, false, NaN, '' (empty string) are all falsy.",
  "Use Semicolons for line termination",
  "Don’t use delete to remove an item from array, use splice() instead.",
  "You can empty an array by setting its length to 0.",
  "Use map() to perform a function over array elements",
  "Use try {}... catch {} whenever possible, and put it to a good use to not confuse your users",
  "Check the properties of an object when using a for-in loop to avoid unexpected errors.",
];

const colorPal = Array();
colorPal["r"] = "red";
colorPal["g"] = "green";
colorPal["b"] = "blue";

const boilerPlate = {
  a: "character",
  b: "also a character",
  c: "still a character",
  d: "what do think?",
};

const generateRandomNumberInRange = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const showRandomJsTip = () => {
  const luckyWheel = generateRandomNumberInRange(jsTips.length - 1);
  const randomTip = jsTips[luckyWheel];
  alert(randomTip);
};

const showDateInLocalFormat = () => {
  let output = undefined;
  const currDate = new Date().toLocaleDateString();
  const color = prompt(
    "Select a color yoy want to see your date in: (r) red, (b) blue, (g) green"
  );
  const cdt = "Current Date:".bold();
  output = colorPal[color]
    ? `${cdt} ${currDate.fontcolor(colorPal[color])}`
    : `${cdt} ${currDate}`.fontcolor("black");
  document.write(output);
};

const intentionallyWrong = () => {
  try {
    alert(boilerPlate.f.desc);
  } catch {
    alert("This character is out of range");
  }
};

showRandomJsTip();
intentionallyWrong();

/**
 * Bonus Task
 */

// Prompt user for Date and handle wrong formats
const checkUserDateInput = (date) => {
  if (date.length === 10 && date[2] === "-" && date[5] === "-") {
    const [d, m, y] = date.split("-");
    const userDate = new Date(y, m, d).toLocaleDateString();
    alert(userDate);
    return userDate;
  } else {
    try {
      alert("Error: Wrong Date Format");
      throw "Wrong Date Format";
    } catch (error) {
      console.error(error);
      promptUserForDate();
    }
  }
};

const promptUserForDate = () => {
  const userDate = prompt(
    "Enter today's date in this format (DD – MM – YYYY):"
  );
  checkUserDateInput(userDate);
};

// Create a function to sort an array of numbers
const promptForNumbers = () => {
  const numbersString = prompt(
    "Enter numbers to be sorted seperated spaces, like 1,2,4,5,6:"
  );
  let numbersInt = Array();
  const numbers = numbersString.split(" ");
  numbers.map((number) => {
    numbersInt.push(parseInt(number));
  });
  console.log(numbersInt);

  numbersInt.forEach((number) => {
    if (isNaN(number)) {
      numbersInt.splice(numbersInt.indexOf(number), 1);
    }
  });
  numbersInt.sort((a, b) => a - b);
  console.log(numbersInt);
};

promptUserForDate();
