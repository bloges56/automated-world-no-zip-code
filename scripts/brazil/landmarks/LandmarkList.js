import {usedLandmarks} from './LandmarkDataProvider.js';
import {Landmark} from './Landmark.js';

export const LandmarkList = () => {
    const contentElement = document.querySelector(".LandmarksList")
    const landmarks = usedLandmarks();
    let landmarkHTMLRepresentation = "";
    for(const landmark of landmarks){
        landmarkHTMLRepresentation += Landmark(landmark);
    }
    
    contentElement.innerHTML += `
        ${landmarkHTMLRepresentation}
    `
}