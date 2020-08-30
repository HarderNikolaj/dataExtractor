import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-data-output-field',
  templateUrl: './data-output-field.component.html',
  styleUrls: ['./data-output-field.component.scss']
})
export class DataOutputFieldComponent implements OnInit {

  order: Order = { "kage": "ja tak", "email": "nej" }

  @Input() dataOutput
  set(value: Order){
    this.order = value;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
