const countryData = [
    {cities: ["Tokyo", "Osaka", "Kyoto", "Sapporo"]},
    {landmarks: ["Mt. Fuji", "Tokyo Tower", "Shibuya Crossing", "Fushimi Inari Taisha"]},
    {people: ["Hayao Miyazaki", "Takeshi Kitano", "Masahiro Sakurai", "Shigeru Miyamoto"]}
]

export const useCountryData = () => {
    return countryData.slice();
}
