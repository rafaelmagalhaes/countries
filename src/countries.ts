import countryFile from "./data/countries.json"
import citiesFile from "./data/cities.json"
import { City, Country } from "./types.ts"

const cities: City[] = citiesFile

export const countries = countryFile as Country[]

const citiesByCountry = cities.reduce(
  (acc, city) => {
    const countryCode = city.country
    if (!acc[countryCode]) {
      acc[countryCode] = []
    }
    acc[countryCode].push(city.name)
    return acc
  },
  {} as { [key: string]: string[] }
)

export const findCountry = (
  countryCode: string,
  options: { withCity?: boolean } = { withCity: false }
) => {
  const filteredCountries = countries.filter(
    (country) => country.code === countryCode
  )
  if (options?.withCity) {
    return filteredCountries.map((country) => ({
      ...country,
      cities: citiesByCountry[country.code] || [],
    }))[0]
  } else {
    return filteredCountries[0]
  }
}
