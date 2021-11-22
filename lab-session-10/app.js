/**
 * circle button svg
 *
 */
const svg = document.getElementById("svg");
const svgBtn = document.getElementById("svg-btn");
const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

text.setAttribute("x", "45");
text.setAttribute("y", "135");
text.setAttribute("fill", "#000");
text.setAttribute("id", "svg-txt");
text.textContent = "show location";

svgBtn.onmouseover = function () {
  this.style.fill = "#396EB0";
  this.style.stroke = "#DADDFC";
  this.style.addColorStop;
  this.style.strokeWidth = "16";
  svg.appendChild(text);
};

function position(pos) {
  var crd = pos.coords;

  alert(`
  Your current position is:
  Latitude : ${crd.latitude}
  Longitude: ${crd.longitude}
  More or less ${crd.accuracy} meters.
  `);
}

svgBtn.onmousedown = function () {
  this.style.fill = "#DADDFC";
  this.style.stroke = "#FC997C";
  text.textContent = "location again";
};

svgBtn.onmouseup = function () {
  navigator.geolocation.getCurrentPosition(position);
};

/**
 *Smiley face canvas
 *
 */

// face shape
const c = document.getElementById("face-canvas");
const ctx = c.getContext("2d");
ctx.fillStyle = "#FDD365";
ctx.strokeStyle = "#FDD365";
ctx.beginPath();
ctx.arc(200, 100, 99, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

// Eyes Shape
// Right
ctx.fillStyle = "#33313B";
ctx.beginPath();
ctx.arc(240, 70, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Left
ctx.fillStyle = "#33313B";
ctx.beginPath();
ctx.arc(160, 70, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Mouth curve
//mouth

ctx.strokeStyle = "#33313B";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(200, 160, 50, 3, 1.99 * Math.PI);
ctx.stroke();
ctx.closePath();

c.onmousedown = function () {
  // clear face
  ctx.clearRect(80, 100, 400, 200);

  //   redraw face
  ctx.fillStyle = "#FDD365";
  ctx.strokeStyle = "#FDD365";
  ctx.beginPath();
  ctx.arc(200, 100, 99, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Eyes Shape
  // Right
  ctx.fillStyle = "#33313B";
  ctx.beginPath();
  ctx.arc(240, 70, 15, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  // Left
  ctx.fillStyle = "#33313B";
  ctx.beginPath();
  ctx.arc(160, 70, 15, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.strokeStyle = "#33313B";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(200, 120, 50, 0, 1 * Math.PI);
  ctx.stroke();
  ctx.closePath();
};

/**
 * tranparent circle
 */

const tc = document.getElementById("circle-canvas");
const tctx = tc.getContext("2d");
tctx.fillStyle = "rgba(98, 55, 78, 0.6)";
tctx.strokeStyle = "#62374E";
tctx.beginPath();
tctx.arc(200, 100, 99, 0, 2 * Math.PI);
tctx.stroke();
tctx.fill();
tctx.closePath();

// Draw text
var gradient = tctx.createLinearGradient(0, 0, 150, 100);
gradient.addColorStop(0, "rgb(255, 0, 128)");
gradient.addColorStop(1, "rgb(255, 153, 51)");
tctx.fillStyle = gradient;
tctx.font = "30px arial";
tctx.fillText("Adham Essam", 100, 110);

/**
 * Loading canvas
 *
 */
const canvas = document.getElementById("loading-canvas");
const numberOfrects = 16;
let currRect = 1;

if (canvas.getContext) {
  // rectangle's width and height
  const width = 150,
    height = 60;

  // canvas center X and Y
  const centerX = canvas.width / 2,
    centerY = canvas.height / 2;

  const context = canvas.getContext("2d");

  // move the origin to the canvas' center
  context.translate(centerX, centerY);

  const loadingRect = () => {
    // add 45 degrees rotation
    context.rotate((45 * currRect * Math.PI) / 180);

    // draw the second rectangle
    context.fillStyle = "rgba(0,0,255,0.5)";
    context.fillRect(0, 0, width, height);
    currRect++;
  };

  const keepPlayingRects = () => {
    const playRects = setInterval(function () {
      loadingRect();
      // pause before the next one
      if (currRect > numberOfrects) {
        clearInterval(playRects);
        context.clearRect(-160, -160, canvas.width, canvas.height);
        currRect = 1;
        keepPlayingRects();
      }
    }, 70);
  };

  canvas.onload = keepPlayingRects();
}

/**
 * Moving chart bars
 *
 */
const board = document.getElementById("chart-svg");
const text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
const text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
const text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");

const indicator1 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "rect"
);

const indicator2 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "rect"
);

const indicator3 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "rect"
);

const getCharts = () => {
  indicator1.setAttributeNS(null, "x", 150);
  indicator1.setAttributeNS(null, "y", 100);
  indicator1.setAttributeNS(null, "width", Math.random() * (700 - 150));
  indicator1.setAttributeNS(null, "height", "50");
  indicator1.setAttributeNS(
    null,
    "fill",
    "#" + Math.round(0xffffff * Math.random()).toString(16)
  );

  text1.setAttribute("x", "45");
  text1.setAttribute("y", "125");
  text1.setAttribute("fill", "#000");
  text1.setAttribute("id", "svg-txt");
  text1.textContent = "indicator 1";

  indicator2.setAttributeNS(null, "x", 150);
  indicator2.setAttributeNS(null, "y", 160);
  indicator2.setAttributeNS(null, "width", Math.random() * (700 - 150));
  indicator2.setAttributeNS(null, "height", "50");
  indicator2.setAttributeNS(
    null,
    "fill",
    "#" + Math.round(0xffffff * Math.random()).toString(16)
  );

  text2.setAttribute("x", "45");
  text2.setAttribute("y", "185");
  text2.setAttribute("fill", "#000");
  text2.setAttribute("id", "svg-txt");
  text2.textContent = "indicator 2";

  indicator3.setAttributeNS(null, "x", 150);
  indicator3.setAttributeNS(null, "y", 220);
  indicator3.setAttributeNS(null, "width", Math.random() * (700 - 150));
  indicator3.setAttributeNS(null, "height", "50");
  indicator3.setAttributeNS(
    null,
    "fill",
    "#" + Math.round(0xffffff * Math.random()).toString(16)
  );

  text3.setAttribute("x", "45");
  text3.setAttribute("y", "245");
  text3.setAttribute("fill", "#000");
  text3.setAttribute("id", "svg-txt");
  text3.textContent = "indicator 3";

  board.appendChild(indicator1);
  board.appendChild(text1);
  board.appendChild(indicator2);
  board.appendChild(text2);
  board.appendChild(indicator3);
  board.appendChild(text3);
};

board.onload = getCharts();

setInterval(() => {
  getCharts();
}, 500);
