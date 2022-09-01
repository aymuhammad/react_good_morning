import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import greeting from './App';
// import reportWebVitals from './reportWebVitals';

const time = new Date().getHours();
let greeting;
const customStyle = {
  color: ""
};
if (time < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);