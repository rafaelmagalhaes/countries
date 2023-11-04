import { findCities, findCountry, getAllCitiesByCountry } from "@rrrm/countries"

// find cities with country information
const lisbon = findCities("lisbon", { withCountry: true })
console.log("findCities-> ", lisbon)

// find a country with all cities
const pt = findCountry("PT", { withCity: true })
console.log("findCountry-> ", pt)

// get all cities for  a country
const citiesBycountry = getAllCitiesByCountry("PT")
console.log("getAllCitiesByCountry-> ", citiesBycountry)
