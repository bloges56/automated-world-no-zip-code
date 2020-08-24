import {usedCities} from './CityDataProvider.js';
import {City} from './City.js';

export const CityList = () => {
    const contentElement = document.querySelector(".CitiesList")
    const cities = usedCities();
    let cityHTMLRepresentation = "";
    for(const city of cities){
        cityHTMLRepresentation += City(city);
    }
    
    contentElement.innerHTML += `
        ${cityHTMLRepresentation}
    `
}
