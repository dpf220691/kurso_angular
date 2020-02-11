import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const config = {
  api: 'http://back',
  directivasPath: 'directivas',
  databindingPath: 'databinding'
};

const ROUTES: Routes = [
  { path: '', redirectTo: 'directivas', pathMatch: 'full'},
  { path: config.directivasPath, loadChildren: () => import('./directivas/directivas.module').then(m => m.DirectivasModule)},
  { path: config.databindingPath, loadChildren: () => import('./databinding/databinding.module').then(m => m.DatabindingModule)},
  { path: '**', redirectTo: 'directivas'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {
      provide : 'configuration',
      useValue: config
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
