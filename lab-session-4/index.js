if (window.location.href.indexOf("index.html") !== -1) {
  alert("Welcome to my site");
  const username = prompt("Enter your name");
  document.write("Welcome " + username);
}

function sumOfNumbers(operand1, operand2) {
  return operand1 + operand2;
}

function numPrompt() {
  const userFirstNumInput = prompt("Enter first number:");
  const userSecondNumInput = prompt("Enter second number:");
  alert(
    sumOfNumbers(parseInt(userFirstNumInput), parseInt(userSecondNumInput))
  );
}

function expressionPrompt() {
  const expression = prompt("Enter a math expression");
  const result = eval(expression);
  alert(`You entered: ${expression}, and the result is: ${result}`);
}

/**
 * This is contact page JavaScripting
 */
const welcomeToPage = () => {
  for (let i = 1; i <= 6; i++) {
    document.writeln(`<h${i}>Welcome to my page</h${i}>`);
  }
};

const outPutUserData = (name, birthYear, age) => {
  document.writeln(`
    <table cellspacing="2">
        <thead>
            <tr>
                <th>Name</th>
                <th>Birth Year</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${name}</td>
                <td>${birthYear}</td>
                <td>${age}</td>
            </tr>
        </tbody>
    </table>`);
};

if (window.location.href.indexOf("contact.html") !== -1) {
  let contactUserName = undefined,
    contactUserBY = undefined;

  // Keep prompting user for his/her name till they enter it.
  do {
    contactUserName = String(prompt("Enter Your Name:"));
  } while (!contactUserName);

  // Do not let the user to this step unless they entered a valid name
  if (isNaN(contactUserName)) {
    // Keep prompting user for his/her birth year till they enter it.
    do {
      contactUserBY = Number(prompt("Enter Your Birth Year:"));
    } while (!contactUserBY);

    // Calculate user age
    if (!isNaN(contactUserBY) && contactUserBY < 2010) {
      const currYear = new Date().getFullYear();
      userAge = currYear - contactUserBY;

      // Output user data in a table
      outPutUserData(contactUserName, contactUserBY, userAge);
    } else {
      alert("You should have been earlier, GO AWAY KID!");
    }
  } else {
    alert(
      `Enter a valid name, if you parents named you ${contactUserName}, sue them!`
    );
  }
  welcomeToPage();
}
