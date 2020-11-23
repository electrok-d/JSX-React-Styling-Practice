// Create a React app from scratch.
// Show a single h1 that says "Good morning" if between midnight and 12PM.
// or "Good Afternoon" if between 12PM and 6PM.
// or "Good evening" if between 6PM and midnight.
// Apply the "heading" style in the styles.css
// Dynamically change the color of the h1 using inline css styles.
// Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

// var d = new Date().getHours();
// var d = new Date();

var greeting = undefined;
const customColor = {
  color: ""
};

const time = new Date(2020, 11, 22, 14);
const time2 = time.getHours();

if (time2 === 24 || time2 < 12) {
  greeting = "Good Morning";
  customColor.color = "red";
} else if (time2 === 12 || time2 <= 18) {
  greeting = "Good Afternoon";
  customColor.color = "green";
} else {
  greeting = "Good Evening";
  customColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customColor}>
    {greeting}!
  </h1>,

  document.getElementById("root")
);
