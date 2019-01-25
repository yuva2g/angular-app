import { Injectable } from '@angular/core';
import { Issue } from './Issue';

@Injectable()
export class CsvToJsonService {

  constructor() { }

  csvToJSON = function (content) {
    let lines = content.csv.split(new RegExp('\n'));    
    let issues: Issue[] = [];
    let start = 0;
    let columnCount = lines[0].split(content.separator).length;

    let headers = [];
    if (content.header) {
      headers = lines[0].split(content.separator);
      start = 1;
    }

    for (let i = start; i < lines.length; i++) {
      let obj = {};
      let fields: string[] = [];
      let currentline = lines[i].split(new RegExp(content.separator));
      if (currentline.length === columnCount) {
        if (content.header) {
          for (let j = 0; j < headers.length; j++) {
            fields[j] = this.cleanCsvValue(currentline[j])
           
          }
        } 
        issues.push(new Issue(fields));
       
      }
    }
    return issues;
  };

  cleanCsvValue = function (value) {
    return value
      .replace(/^\s*|\s*$/g, "") // remove leading & trailing space
      .replace(/^"|"$/g, "") // remove " on the beginning and end
      .replace(/""/g, '"'); // replace "" with "
  };
}
