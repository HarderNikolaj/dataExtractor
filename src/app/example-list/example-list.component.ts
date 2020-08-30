import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent implements OnInit {
  examples: string[] = [
    'adresse søgårdsvej 22 adresse godt gemt 5 email lars@lars.dk reference carsten kage ja tak slut',

    'email peter@peter.dk reference carsten kage ja tak slut'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
