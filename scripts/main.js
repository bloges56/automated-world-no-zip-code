import { List } from "./List.js";

var countryName = "";
console.log("test");
const storePageID = (country) => {
    countryName = country;
}

// Set id of each main of page to country name
//get the name using query select

//Brazil
const btnBrazil = document.querySelector('#BrazilButton');

btnBrazil.addEventListener('click', () => {
    // storePageID("Brazil");
    // countryName = "Brazil";
    window.location.href='brazil.html';
    debugger;
    countryName = "Brazil"
});

//Japan
const btnJapan = document.querySelector('#JapanButton');

btnJapan.addEventListener('click', () => {
    storePageID("Japan");
    window.location.href='japan.html';
});


//Germany
const btnGermany = document.querySelector('#GermanyButton');

btnGermany.addEventListener('click', () => {
    storePageID("Germany");
    window.location.href='germany.html';
});

// debugger;
// List(countryName);