import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/auth/confirm.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, CanComponentDeactivate {

  saved: boolean;
  queryParams: ParamMap;
  id: string;
  @Input() message: string;
  @Output() reply = new EventEmitter<string>();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.saved = false;
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });
    this.activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      this.queryParams = queryParamMap;
    });
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.reply.emit('Me has dicho: ' + this.message);
  }

  canDeactivate(): boolean {
    return this.saved ? true : confirm('Seguro que quieres salir sin guardar');
  }

  onSave() {
    this.saved = true;
  }

}
