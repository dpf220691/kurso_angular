import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/first.service';
import { ThirdService } from 'src/app/third.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  messageToChild: string;
  messageFromChild: string;

  constructor(private firstService: FirstService, private thirdService: ThirdService) { }

  ngOnInit(): void {

  }

  onClick() {
    this.messageToChild = this.firstService.getMessage();
  }

  onClickRedirect() {
    this.thirdService.redirectToDirectivas();
  }

  responseFromChild(e: string) {
    this.messageFromChild = e;
  }

}
