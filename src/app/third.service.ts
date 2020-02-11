import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ThirdService {

  constructor(private router: Router, @Inject('configuration') private config: any) { }

  redirectToDirectivas() {
    this.router.navigate([this.config.directivasPath]);
  }

}
