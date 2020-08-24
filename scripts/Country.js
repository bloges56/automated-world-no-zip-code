export const Country = (country) => {
    return `
    <div class="cities">
            <h3>Cities to Visit</h3>
            <ul class="CitiesList">
                ${makeList(country.cities)}
            </ul>
        </div>
        <div class="landmarks">
            <h3>Landmarks to See</h3>
            <ul class="LandmarkList">
                ${makeList(country.landmarks)}
            </ul>
        </div>
        <div class="citizens">
            <h3>Famous Citizens</h3>
            <ul class="PeopleList">
                ${makeList(country.people)}
            </ul>
        </div> 
    `
}

const makeList = (listItem) => {
    var html = "";
    for(const item of listItem){
        html += `<li>${item}</li>`;
    }
    return html;
}