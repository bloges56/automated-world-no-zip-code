import {useLandmarks} from './LandmarkDataProvider.js';
import {Landmark} from './Landmark.js';

export const LandmarkList = () => {
    const contentElement = document.querySelector(".LandmarkList")
    const landmarks = useLandmarks();
    let landmarkHTMLRepresentation = "";
    for(const landmark of landmarks){
        landmarkHTMLRepresentation += Landmark(landmark);
    }
    
    contentElement.innerHTML += `
        ${landmarkHTMLRepresentation}
    `
}
