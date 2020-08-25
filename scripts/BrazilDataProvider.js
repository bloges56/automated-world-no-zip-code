const countryData = [
    {cities: ["Brasilia", "Rio de Janeiro", "Salvador da Bahia", "São Paulo"]},
    {landmarks: ["Christ the Redeemer", "Cathedral Basilica of Salvador", "Escardia Selarón", "Jardim Botânico do Rio de Janeiro"]},
    {people: ["Adriana Lima", "Gisele Bündchen", "Pelé", "Silvio Santos"]}
]

export const useCountryData = () => {
    return countryData.slice();
}
