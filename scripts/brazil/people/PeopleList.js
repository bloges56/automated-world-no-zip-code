import {usedPeople} from './PeopleDataProvider.js';
import {People} from './People.js';

export const PeopleList = () => {
    const contentElement = document.querySelector(".PeopleList")
    const person = usedPeople();
    let peopleHTMLRepresentation = "";
    for(const individual of person){
        peopleHTMLRepresentation += People(individual);
    }
    
    contentElement.innerHTML += `
        ${peopleHTMLRepresentation}
    `
}