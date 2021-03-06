import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmService } from '../auth/confirm.service';
import { SecondService } from '../second.service';
import { SecondServiceFake } from '../secondfake.service';
import { ChildComponent } from './child/child.component';
import { FatherComponent } from './father/father.component';

const ROUTES: Routes = [
  { path: '', component: FatherComponent},
  { path: ':id', component: ChildComponent, canDeactivate: [ConfirmService]}
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
