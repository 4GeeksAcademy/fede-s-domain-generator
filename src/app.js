/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronouns = ["the", "our", "your", "my", "only"];
  let adjs = ["great", "big", "best", "longest", "awsome", "boring", "happy"];
  let nouns = ["jogger", "racoon", "coder", "website", "app", "hamburger"];
  let domains = [".com", ".es", ".uy", ".net"];

  // function generateDomain() {
  //   let newPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  //   let newAdj = adj[Math.floor(Math.random() * adj.length)];
  //   let newNoun = noun[Math.floor(Math.random() * noun.length)];
  //   let newDomain = domains[Math.floor(Math.random() * domains.length)];

  //   return `${newPronoun}${newAdj}${newNoun}${newDomain}`;
  // }

  function generateDomain(pronouns, adjs, nouns, domains) {
    let generatedDomains = [];
    for (let i = Math.floor(Math.random() * pronouns.length); i < pronouns.length;i++) {
      for (let j = Math.floor(Math.random() * adjs.length); j < adjs.length; j++) {
        for (let x = Math.floor(Math.random() * nouns.length); x < nouns.length; x++) {
          for (let y = Math.floor(Math.random() * domains.length); y < domains.length; y++) {
            generatedDomains.push(`${pronouns[i]}${adjs[j]}${nouns[x]}${domains[y]}`);
          }
        }
      }
    }

    return generatedDomains[Math.floor(Math.random() * generatedDomains.length)];
  }

  document.getElementById("btn").onclick = function() {
    document.getElementById("domain").innerHTML = generateDomain(pronouns, adjs, nouns, domains);
  };

  console.log("Hello Domain Generator from the console!");
};
