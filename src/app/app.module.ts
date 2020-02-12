import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/authservice.service';
import { LoginComponent } from './auth/login/login.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LayoutModule } from './layout/layout.module';
import { SimpleComponent } from './layout/simple/simple.component';

const config = {
  api: 'http://back',
  directivasPath: 'directivas',
  databindingPath: 'databinding'
};

const ROUTES: Routes = [
  { path: '', redirectTo: 'directivas', pathMatch: 'full'},
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: config.directivasPath,
        loadChildren: () => import('./directivas/directivas.module').then(m => m.DirectivasModule)
      },
      {
        path: config.databindingPath,
        canActivate: [AuthService],
        loadChildren: () => import('./databinding/databinding.module').then(m => m.DatabindingModule)
      }
    ]
  },
  {
    path: 'login',
    component: SimpleComponent,
    children: [
      { path: '',
        component: LoginComponent
      },
    ]
  },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AuthModule,
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
