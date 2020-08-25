const countryData = [
    {cities: ["Tokoyo", "Osaka", "Kyoto", "Sapporo", "São Paulo"]},
    {landmarks: ["Mt. Fuji", "Tokyo Tower", "Shibuya Crossing", "Fushimi Inari Taisha"]},
    {people: ["Hayao Miyazaki", "Takeshi Kitano", "Masahiro Sakurai", "Shigeru Miyamoto"]}
]

export const useCountryData = () => {
    return countryData.slice();
}
