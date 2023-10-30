# Countries and Cities Utility

This utility module provides functions for working with countries and cities data in various formats. It includes functions for finding countries and cities, as well as converting data to JSON and CSV formats.

## Installation

To use this utility, you need to include the provided TypeScript modules in your project and ensure you have the required data files in the specified locations.

## Usage

### countries.ts

The `countries.ts` module allows you to work with country data.

- `countries`: An array of countries.
- `findCountry(countryCode: string)`: Find a country by its country code.

```javascript
import { countries, findCountry } from './countries.ts';

const allCountries = countries;
const specificCountry = findCountry('US');
```

### cities.ts

The `cities.ts` module provides functionality for working with city data.

- `cities`: An array of cities.
- `findCity(cityName: string)`: Find cities by name.
- `getAllCitiesByCountry(countryCode: string)`: Get all cities in a specific country.

```javascript
import { cities, findCity, getAllCitiesByCountry } from './cities.ts';

const allCities = cities;
const specificCity = findCity('New York');
const citiesInCountry = getAllCitiesByCountry('US');
```

### convert.ts

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

## License

This utility is provided under the [MIT License](LICENSE).

```

This README provides an overview of the functionality, usage, and data requirements for your utility module. Please make sure to include the necessary data files (countries.json and cities.json) as described in the README before using the utility.