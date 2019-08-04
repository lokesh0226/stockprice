import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';

import {StockPredictionService} from './stock-prediction.service';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StockPredictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
