import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { CurrencyComponent } from './currency/currency.component';
import { AppRoutingModule } from './app.routing';
import { CurrencyService } from './services/currency.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'currency',
    component: CurrencyComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    // RouterModule.forRoot(ROUTES)
  ],
  providers: [
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
