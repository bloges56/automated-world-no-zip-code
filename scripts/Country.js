//
export const Country = (country) => {
    return `
    <div class="cities">
            <h3>Cities to Visit</h3>
            <ul class="CitiesList">
                ${makeList(country[0], "cities")}
            </ul>
        </div>
        <div class="landmarks">
            <h3>Landmarks to See</h3>
            <ul class="LandmarkList">
                ${makeList(country[1], "landmarks")}
            </ul>
        </div>
        <div class="citizens">
            <h3>Famous Citizens</h3>
            <ul class="PeopleList">
                ${makeList(country[2], "people")}
            </ul>
        </div> 
    `
}

//Gets object and corresponding key and iterates through list that is paired with the key
//example:  listItem is set to country[0], which equals the cities object
//keyItem is set to cities, thus listItem.keyItem will equal the list of cities
const makeList = (listItem, keyItem) => {
    var html = "";
    for(const item of listItem[keyItem]){
        html += `<li>${item}</li>`;
    }
    return html;
}