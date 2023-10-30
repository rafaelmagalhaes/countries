import citiesFile from "./data/cities.json"
import {City} from "./types.ts";


export const cities = citiesFile as City[]
export const findCity = (name:string) => {
    const cityName = name.toLowerCase()
    return cities.filter(city => city.name.toLowerCase().includes(cityName))
}

export const getAllCitiesByCountry = (countryCode:string) =>{
    return cities.filter(city => city.country === countryCode)
}
 
