import citiesFile from "./data/cities.json"
import { City } from "./types.ts"
import { findCountry } from "./countries.ts"

export const cities = citiesFile as City[]

const findCitiesFilter = {
  withCountry: false,
}
export const findCities = (
  name: string,
  options: { withCountry?: boolean } = findCitiesFilter
) => {
  const cityName = name.toLowerCase()
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(cityName)
  )

  if (options?.withCountry) {
    return filteredCities.map((city: City) => ({
      ...city,
      country: findCountry(city.country),
    }))
  } else {
    return filteredCities
  }
}
export const getAllCitiesByCountry = (countryCode: string) => {
  return cities.filter((city) => city.country === countryCode)
}
