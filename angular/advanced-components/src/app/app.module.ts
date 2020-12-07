import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleEncapsulationComponent } from './style-encapsulation/style-encapsulation.component';
import { NativeEncapsulationComponent } from './native-encapsulation/native-encapsulation.component';
import { PopupDirective } from './popup.directive';
import { PopupDemoComponent } from './popup-demo/popup-demo.component';
import { PopupDemo2Component } from './popup-demo2/popup-demo2.component';
import { PopupDemo3Component } from './popup-demo3/popup-demo3.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { MessageComponent } from './content-projection/message.component';
import { ContentTabsDemoComponent } from './content-tabs-demo/content-tabs-demo.component';
import { ContentTabComponent } from './content-tabs-demo/content-tab.component';
import { ContentTabsetComponent } from './content-tabs-demo/content-tabset.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleEncapsulationComponent,
    NativeEncapsulationComponent,
    PopupDirective,
    PopupDemoComponent,
    PopupDemo2Component,
    PopupDemo3Component,
    ContentProjectionComponent,
    MessageComponent,
    ContentTabComponent,
    ContentTabsDemoComponent,
    ContentTabsetComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
