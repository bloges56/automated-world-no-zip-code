import { useCountryData as useBrazilData } from "./BrazilDataProvider.js";
import { Country } from "./Country.js"




export const List = (countryName) => {
    const contentElement = document.querySelector(".country-details");
    debugger;
    if(countryName === "Brazil"){
        var country = useBrazilData();
        debugger;
    }
    // else if(countryName === "Japan"){
    //     countryData = useJapanData();
    // }
    // else {
    //     countryData = useGermanyData();
    // }

    console.log(country);
    contentElement.innerHTML = Country(country);

}

