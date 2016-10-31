"use strict";

document.getElementById("dark_theme")
  .addEventListener("click", dark_theme);

function dark_theme() {

  var dark = document.getElementById("dark_theme").value;
  // console.log(dark);
  var chatDesign = document.getElementById("chat_design");
  var body = document.getElementById("bodyYo");

  if (dark === "darkTheme") {
    chatDesign.classList.toggle("dark");
    chatDesign.classList.toggle("norm");
    body.classList.toggle("darkToo");
  } else {
    return;
  }
}

document.getElementById("large_text")
  .addEventListener("click", large_text);

function large_text() {

  var large = document.getElementById("large_text").value;
  // console.log(large);
  var chatDesign = document.getElementById("chat_design");

  if (large === "largeText") {
    chatDesign.classList.toggle("large");
  } else {
    return;
  }
}

// document.getElementById("clear_button")
// 	.addEventListener("click", clearFunc);

// function clearFunc () {
// 	if (document.getElementById("chat_window").value)
// 		document.getElementById("clear_button").disabled = false;
// } else {
// 	document.getElementById("clear_button").disabled = true;	
// }