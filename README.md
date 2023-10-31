# Countries and Cities 

This package provides functions for working with countries and cities data.

## Installation

```bash
pnpm i @rrrm/countries
```

## Usage

```javascript
import {
  countries,
  countriesWithCities,
  findCountry,
  cities,
  findCity,
  getAllCitiesByCountry,
} from '@rrrm/countries';
```
- `countries`: An array of countries.
- `findCountry(countryCode: string)`: Find a country by its country code.
- `cities`: An array of cities.
- `findCity(cityName: string)`: Find cities by name.
- `getAllCitiesByCountry(countryCode: string)`: Get all cities in a specific country.
- `countriesWithCities`: returns an array of countries with cities as array of strings


example of `findCountry`

```javascript
import { findCountry} from '@rrrm/countries';

const country =  findCountry('PT')

// country will output this object
{
    "flag": "🇵🇹",
    "flags": {
        "png": "https://flagcdn.com/w320/pt.png",
        "svg": "https://flagcdn.com/pt.svg",
        "alt": "The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3, with the coat of arms of Portugal centered over the two-color boundary."
    },
    "name": "Portugal",
    "code": "PT",
    "idd": {
        "root": "+3",
        "suffixes": [
            "51"
        ]
    }
}
```
### convert.ts

> [!NOTE]  
> Need to clone project and run locally


The `convert.ts` module allows you to convert data to different formats.

- `convertJson(fileName: string, data: any | Country[] | City[])`: Convert data to JSON format and save it to a file.
- `convertCSV(fileName: string, data: any | Country[] | City[])`: Convert data to CSV format and save it to a file.

```javascript
import { convertJson, convertCSV } from './convert.ts';

const data = [{ /* Your data here */ }];
convertJson('data.json', data);
convertCSV('data.csv', data);
```

## Data Files

This utility assumes the presence of data files in JSON format. Ensure you have the required data files in the specified locations before using the utility.

- `countries.json`: Country data file.
- `cities.json`: City data file.

There is also csv files of both countries and cities this is to make it easier to import data to any database as the package size is quite large.


## Todo

- better types
- unit test
- docs

## License

This utility is provided under the [MIT License](LICENSE).

## Credits
this package is a comnbination of both [restcountries](https://gitlab.com/restcountries/restcountries) and [cities.json](https://github.com/lutangar/cities.json/tree/master)