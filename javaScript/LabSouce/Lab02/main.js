import {randomColorString} from "./func.js";


document.write("<h2>I'm here !</h2>");

let myDiv = document.querySelector("#myDiv");
myDiv.innerHTML = "<h2>Hellow</h2>";
myDiv.setAttribute(
  "style",
  "width:100%;height:20vh;background-color:rgb(244,244,244)"
);
myDiv.innerHTML += "<p>Yo Yo</p>";
myDiv.setAttribute(
    "style",
    `background-color:${randomColorString()}`
);

