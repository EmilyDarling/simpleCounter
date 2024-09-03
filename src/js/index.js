//import react into the bundle
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { number } from "prop-types";


var timer = 1;

setInterval(() =>{
    timer++;
    let timerString = "000000" + timer;
    let trimTimerStr = timerString.substring(timerString.length-6, timerString.length);
    ReactDOM.createRoot(document.getElementById('app')).render(<Home time={trimTimerStr}/>)
}, 1000) ;





