import { useCountryData as useBrazilData } from "./BrazilDataProvider.js";
import { Country } from "./Country.js"




export const List = (countryName) => {
    const contentElement = document.querySelector(".country-details");
    if(countryName === "brazil"){
        var country = useBrazilData();
    }
    else if(countryName === "japan"){
        countryData = useJapanData();
    }
    else {
        countryData = useGermanyData();
    }

    console.log(country);
    contentElement.innerHTML = Country(country);

}

