import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppSecondRoutingModule } from './app-second-routing.module';
import { AppSecondComponent } from './app-second.component';

@NgModule({
  declarations: [
    AppSecondComponent
  ],
  imports: [
    BrowserModule,
    AppSecondRoutingModule
  ],
  providers: [],
  bootstrap: [AppSecondComponent]
})
export class AppSecondModule { }
