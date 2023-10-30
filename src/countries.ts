import countryFile from './data/countries.json'
import { cities } from './cities.ts';
import {Country} from "./types.ts";

export const countries = countryFile as  Country[];

export const findCountry = (countryCode:string) =>{
  return countries.find(country => country.code === countryCode)
}
//
const citiesByCountry = cities.reduce((acc, city) => {
  const countryCode = city.country;
  if (!acc[countryCode]) {
    acc[countryCode] = [];
  }
  acc[countryCode].push(city.name);
  return acc;
}, {} as { [key: string]: string[] });

export const countriesWithCities = countries.map(country => ({
  ...country,
  cities: citiesByCountry[country.code] || []
}));
