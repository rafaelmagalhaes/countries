import  fs from 'fs';
import {Country, City} from './types.ts'
export const convertJson = (fileName:string, data: any | Country[] | City[]) =>{
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(fileName, jsonData);
}

export const convertCSV = (fileName:string, data: any | Country[] | City[]) =>{
    function escapeQuotes(value: string) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      
      function objectToCSV(obj:any) {
        const keys = Object.keys(obj);
        const values = keys.map(key => {
          if (typeof obj[key] === 'object') {
            return escapeQuotes(JSON.stringify(obj[key]));
          }
          return escapeQuotes(obj[key]);
        });
        return values.join(',');
      }
      
      const csvArray = data.map((item: any) => objectToCSV(item));
      
      const header =  Object.keys(data[0]);
      const csv = [header, ...csvArray].join('\n');
      fs.writeFileSync(fileName, csv);

}