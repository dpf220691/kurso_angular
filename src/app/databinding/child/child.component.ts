import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() message: string;
  @Output() reply = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.reply.emit('Me has dicho: ' + this.message);
  }

}
