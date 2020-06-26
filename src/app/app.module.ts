import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';
import { LedListComponent } from './led-list/led-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LedComponent,
    LedListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
