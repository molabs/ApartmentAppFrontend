import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListApartmentsComponent } from './components/list-apartments/list-apartments.component';
import { FormApartmentsComponent } from './components/form-apartments/form-apartments.component';

import { RestService } from './services/rest.service';

const appRoutes: Routes = [
  { path: 'apartment/:id/:token',      component: ListApartmentsComponent },
  { path: 'home/:id/:token',
    redirectTo: '/apartment/:id/:token',
    pathMatch: 'full'
  },
  { path: 'home',      component: ListApartmentsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/home',
    pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListApartmentsComponent,
    FormApartmentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
