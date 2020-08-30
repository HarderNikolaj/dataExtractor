import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-input-field',
  templateUrl: './data-input-field.component.html',
  styleUrls: ['./data-input-field.component.scss']
})
export class DataInputFieldComponent implements OnInit {

@Output() dataEmit = new EventEmitter<string>();
text: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  exportData(){
    // console.log(this.text)
    this.dataEmit.emit(this.text)
  }

}
