import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondServiceFake {

  constructor() { }

  getMessage(): string {
    return 'soy el fake segundo servicio';
  }

}
