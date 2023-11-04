import { findCities, findCountry, getAllCitiesByCountry } from "@rrrm/countries"

// find cities with country information
const bissau = findCities("bissau", { withCountry: true })
console.log("findCities-> ", bissau)

// find a country with all cities
const gw = findCountry("GW", { withCity: true })
console.log("findCountry-> ", gw)

// get all cities for  a country
const citiesBycountry = getAllCitiesByCountry("GW")
console.log("getAllCitiesByCountry-> ", citiesBycountry)
