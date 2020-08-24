import {usedPeople} from './PeopleDataProvider.js';
import {Person} from './Person.js';

export const PeopleList = () => {
    const contentElement = document.querySelector(".PeopleList")
    const people = usedPeople();
    let peopleHTMLRepresentation = "";
    for(const person of people){
        peopleHTMLRepresentation += Person(person);
    }
    
    contentElement.innerHTML += `
        ${peopleHTMLRepresentation}
    `
}