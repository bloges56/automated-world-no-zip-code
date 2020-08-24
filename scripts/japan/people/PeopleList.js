import {usePeople} from './PeopleDataProvider.js';
import {Person} from './People.js';

export const PeopleList = () => {
    const contentElement = document.querySelector(".PeopleList")
    const people = usePeople();
    let peopleHTMLRepresentation = "";
    for(const person of people){
        peopleHTMLRepresentation += Person(person);
    }
    
    contentElement.innerHTML += `
        ${peopleHTMLRepresentation}
    `
}
