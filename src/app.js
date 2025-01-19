/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "best", "longest", "awsome", "boring", "happy"];
  let noun = ["jogger", "racoon", "coder", "website", "app", "hamburger"];
  let domains = [".com", ".es", ".uy", ".net"];

  function generateDomain() {
    let newPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    let newAdj = adj[Math.floor(Math.random() * adj.length)];
    let newNoun = noun[Math.floor(Math.random() * noun.length)];
    let newDomain = domains[Math.floor(Math.random() * domains.length)];

    return `${newPronoun}${newAdj}${newNoun}${newDomain}`;
  }

  document.getElementById("btn").onclick = function() {
    document.getElementById("domain").innerHTML = generateDomain();
  };

  console.log("Hello Domain Generator from the console!");
};
