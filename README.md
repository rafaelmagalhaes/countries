# Countries and Cities 

This node package provides functions for working with countries and cities data.

## Installation

```bash
pnpm i @rrrm/countries
```

## Usage

- `countries`: An array of countries.
- `cities`: An array of cities.
- `findCountry(countryCode: string, {withCity:false //default})`: Find a country by its country code.
- `findCities(cityName: string, {withCountry:false //default})`: Find cities by name.
- `getAllCitiesByCountry(countryCode: string)`: Get all cities in a specific country.


```javascript

import { findCities, findCountry, getAllCitiesByCountry } from "@rrrm/countries"

// find cities with country information
const bissau = findCities("bissau", { withCountry: true })
console.log("findCities-> ", bissau)

// find a country with all cities
const gw = findCountry("GW", { withCity: true })
console.log("findCountry-> ", gw)

// get all cities for a country
const citiesBycountry = getAllCitiesByCountry("GW")
console.log("getAllCitiesByCountry-> ", citiesBycountry)

```

## Utilities

this is helpful if you want to import the data into your own database.

- `convertJson(fileName: string, data: any | Country[] | City[])`: Convert data to JSON format and save it to a file.
- `convertCSV(fileName: string, data: any | Country[] | City[])`: Convert data to CSV format and save it to a file.


```javascript
import { convertJson, convertCSV } from './convert.ts';

const data = [{ /* Your data here */ }];
convertJson('data.json', data);
convertCSV('data.csv', data);
```

### Data Files

This utility assumes the presence of data files in JSON format. Ensure you have the required data files in the specified locations before using the utility.

- `countries.json`: Country data file.
- `cities.json`: City data file.

There is also csv files of both countries and cities this is to make it easier to import data to any database as the package size is quite large.


### Schema

schema folder will contain sql files so data can be added to a database

## License

This utility is provided under the [MIT License](LICENSE).

## Credits
this package is a comnbination of both [restcountries](https://gitlab.com/restcountries/restcountries) and [cities.json](https://github.com/lutangar/cities.json/tree/master)