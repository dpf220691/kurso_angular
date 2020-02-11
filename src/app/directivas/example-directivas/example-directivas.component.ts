import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-directivas',
  templateUrl: './example-directivas.component.html',
  styleUrls: ['./example-directivas.component.css']
})
export class ExampleDirectivasComponent implements OnInit {

  colors: string[];

  show: boolean;

  constructor() { }

  ngOnInit(): void {
    this.colors = ['red', 'blue', 'orange', 'pink', 'green', 'black', 'yellow'];
    this.show = true;
  }

}
