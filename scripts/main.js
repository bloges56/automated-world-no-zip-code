var countryName = "";
console.log("test");
const storePageID = (country) => {
    countryName = country;
    debugger;
}

//Brazil
const btnBrazil = document.querySelector('#BrazilButton');

btnBrazil.addEventListener('click', () => {
    storePageID("Brazil");
    window.location.href='brazil.html';
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


