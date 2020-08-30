import { Component } from '@angular/core';
import { Order } from './order';
import { FieldDescriptor } from './field-descriptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataExtractor';

  order: Order= { };

  fieldList: FieldDescriptor[] =
  [{
    "fieldName": 'email',
    "fieldStart": 'email',
    "fieldOccurrence": 1,
    "fieldNumberOfOccurrences": 1,
    "fieldEnd": "reference",
    "fieldEndOccurrence": 1,
    "fieldEndNumberOfOccurrences": 1
   },
   {
    "fieldName": 'reference',
    "fieldStart": 'reference',
    "fieldOccurrence": 1,
    "fieldNumberOfOccurrences": 1,
    "fieldEnd": "kage",
    "fieldEndOccurrence": 1,
    "fieldEndNumberOfOccurrences": 1
   },
   {
    "fieldName": 'kage',
    "fieldStart": 'kage',
    "fieldOccurrence": 1,
    "fieldNumberOfOccurrences": 1,
    "fieldEnd": "slut",
    "fieldEndOccurrence": 1,
    "fieldEndNumberOfOccurrences": 1
   },
   {
    "fieldName": 'leveringsadresse',
    "fieldStart": 'adresse',
    "fieldOccurrence": 1,
    "fieldNumberOfOccurrences": 2,
    "fieldEnd": "adresse",
    "fieldEndOccurrence": 2,
    "fieldEndNumberOfOccurrences": 2
   },
   {
    "fieldName": 'faktureringsadresse',
    "fieldStart": 'adresse',
    "fieldOccurrence": 2,
    "fieldNumberOfOccurrences": 2,
    "fieldEnd": "email",
    "fieldEndOccurrence": 1,
    "fieldEndNumberOfOccurrences": 1
   }
  ]

  extractData(text: string): void{
    this.fieldList.forEach((field)=>{
      if(this.checkOccurrences(field, text)){
        let fieldIndex = this.indexOfNth(field.fieldStart, text, field.fieldOccurrence) + field.fieldStart.length;
        let endIndex = this.indexOfNth(field.fieldEnd, text, field.fieldEndOccurrence)
        this.order[field.fieldName] = text.substring(fieldIndex, endIndex).trim();
      }
      else this.order[field.fieldName] = "Error - Unexpected number of occurrences";
    })
  }

  indexOfNth(keyword: string, text: string, n: number): number{
    var L= text.length, i= -1;
    while(n-- && i++<L){
        i= text.indexOf(keyword, i);
        if (i < 0) break;
    }
    return i;
  }

  checkOccurrences(field: FieldDescriptor, text: string): boolean{
    let fieldRegex: RegExp = new RegExp(field.fieldStart, 'gi');
    let fieldCount: number = (text.match(fieldRegex) || []).length;

    let endRegex: RegExp = new RegExp(field.fieldEnd, 'gi');
    let endCount: number = (text.match(endRegex) || []).length;



    if(fieldCount == field.fieldNumberOfOccurrences && endCount == field.fieldEndNumberOfOccurrences) return true;
    else {
      console.log(field.fieldName + " - ERROR: Number of occurrences didn't match: \nfieldCount: \nexpected: " + field.fieldNumberOfOccurrences + '\nactual: ' + fieldCount + '\nendCount:  \nexpected: ' + field.fieldEndNumberOfOccurrences + '\nactual: ' + endCount)
      return false;
    }
  }
}
