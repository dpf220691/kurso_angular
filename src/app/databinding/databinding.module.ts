import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondService } from '../second.service';
import { SecondServiceFake } from '../secondfake.service';
import { ChildComponent } from './child/child.component';
import { FatherComponent } from './father/father.component';

const ROUTES: Routes = [
  { path: '', component: FatherComponent}
];

@NgModule({
  declarations: [FatherComponent, ChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    FatherComponent
  ],
  providers: [
    {
      provide: SecondService, useClass: SecondServiceFake
    }
  ]
})
export class DatabindingModule { }
