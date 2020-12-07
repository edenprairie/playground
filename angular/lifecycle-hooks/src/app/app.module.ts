import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { OnInitComponent } from './on-init/on-init.component';

@NgModule({
  declarations: [
    AppComponent,
    OnInitComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
