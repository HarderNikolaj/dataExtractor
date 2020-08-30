import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  @Input() text:string;
  @ViewChild("textArea") textArea: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  copyText(inputElement){
    inputElement.select()
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
