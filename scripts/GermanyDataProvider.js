const countryData = [
    {cities: ["Berlin", "Hamburg", "Potsdam", "Kiel"]},
    {landmarks: ["Neuschwanstein Castle", "Brandenburn Gate", "Reichstag Building", "Cologne Cathedral"]},
    {people: ["Ludwig van Beethoven", "Johannes Brahms", "Johann Sebastian Bach", "Albert Einstein"]}
]

export const useCountryData = () => {
    return countryData.slice();
}
