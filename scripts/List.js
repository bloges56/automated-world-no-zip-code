import { useCountryData as useBrazilData } from "./BrazilDataProvider.js";
import { useCountryData as useGermanyData } from "./GermanyDataProvider.js";
import { useCountryData as useJapanData } from "./JapanDataProvider.js";
import { Country } from "./Country.js"




export const List = (countryName) => {
    const contentElement = document.querySelector(".country-details");
    if(countryName === "brazil"){
        var country = useBrazilData();
    }
    else if(countryName === "japan"){
        var country = useJapanData();
    }
    else {
        var country = useGermanyData();
    }

    contentElement.innerHTML = Country(country);

}

