import { List } from "./List.js";

// Grabs main element and stores its id in countryName
var countryName = document.getElementsByTagName("main")[0].id;


// Set id of each main of page to country name
//get the name using query select

//Brazil
const btnBrazil = document.querySelector('#BrazilButton');

btnBrazil.addEventListener('click', () => {
    window.location.href='brazil.html';
    
});

//Japan
const btnJapan = document.querySelector('#JapanButton');

btnJapan.addEventListener('click', () => {
    window.location.href='japan.html';
});


//Germany
const btnGermany = document.querySelector('#GermanyButton');

btnGermany.addEventListener('click', () => {
    window.location.href='germany.html';
});


 if(countryName !== ""){
    List(countryName);
 }
