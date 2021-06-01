"use strict";
import "./sass/main.scss";
import {active_keg_information_app} from "./js/components/ative_keg_information_app.js";
import {current_que_app} from "./js/components/current_que_app.js";
import {storage_amount_app} from "./js/components/storage_amount_app.js";
import {top_5_beers_app} from "./js/components/top_5_beers_app.js";
import {worker_status_app} from "./js/components/worker_status_app.js";

window.addEventListener("DOMContentLoaded", init);

let currentData = {};

async function init() { // async so apps doesnt run before the information they require is available
  console.log("initializing...");
  await fetchData(); 
  active_keg_information_app();
  current_que_app();
  storage_amount_app();
  top_5_beers_app();
  worker_status_app();

  console.log("initialization complete!");
}

async function fetchData() {
  const response = await fetch('https://foobar-jearasfix.herokuapp.com/');
  const jsonData = await response.json();
  globalData.barData = jsonData; // global variable "globalData" is stated in an inline script in index.html
  
  setTimeout(fetchData, 1000);
}