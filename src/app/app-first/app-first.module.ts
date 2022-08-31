import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppFirstRoutingModule } from './app-first-routing.module';
import { AppFirstComponent } from './app-first.component';

@NgModule({
  declarations: [
    AppFirstComponent
  ],
  imports: [
    BrowserModule,
    AppFirstRoutingModule
  ],
  providers: [],
  bootstrap: [AppFirstComponent]
})
export class AppFirstModule { }
