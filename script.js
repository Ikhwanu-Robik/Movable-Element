let divElm = document.getElementById('player')

let xNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("left"));

let yNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("top"));

function up() {
  let moveBy = yNow - 50;
  divElm.style["top"] = moveBy + "px";

  divElm = document.getElementById('player')

  xNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("left"));

  yNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("top"));
}

function left() {
  let moveBy = xNow - 50;
  divElm.style["left"] = moveBy + "px";

  divElm = document.getElementById('player')

  xNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("left"));

  yNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("top"));
}

function right() {
  let moveBy = xNow + 50;
  divElm.style["left"] = moveBy + "px";
  divElm = document.getElementById('player')

  xNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("left"));

  yNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("top"));
}

function down() {
  let moveBy = yNow + 50;
  divElm.style["top"] = moveBy + "px";

  divElm = document.getElementById('player')

  xNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("left"));

  yNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("top"));
}