/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronouns = ["the", "our", "your", "my", "only", "for", "until"];
  let adjs = ["great", "big", "best", "longest", "awsome", "boring", "happy"];
  let nouns = ["jogger", "racoon", "coder", "website", "app", "hamburger", "shark"];
  let domains = [".com", ".es", ".uy", ".net", ".ar", ".org", "del"];

  function generateDomain(pronouns, adjs, nouns, domains) {
    
    let generatedDomains = [];

    for (const pronoun of pronouns) {
      for (const adj of adjs) {
        for (const noun of nouns) {
          for (const domain of domains) {
            generatedDomains.push(`${pronoun}${adj}${noun}${domain}</br>`);
          }
        }
      }
    }
    return generatedDomains;
  }

  document.getElementById("btn").onclick = function() {
    document.getElementById("domain").innerHTML = generateDomain(pronouns, adjs, nouns, domains);
  };
  console.log("Hello Domain Generator from the console!");
};
