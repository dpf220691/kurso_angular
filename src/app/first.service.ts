import { Inject, Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private secondService: SecondService, @Inject('configuration') private config: any) { }

  getMessage(): string {
    return  this.config.api + 'Ordena la habitación ' + this.secondService.getMessage();
  }

}
