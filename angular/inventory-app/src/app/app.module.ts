import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormWithBuilderComponent } from './form-with-builder/form-with-builder.component';
import { FormWithNgModelComponent } from './form-with-ng-model/form-with-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    FormWithBuilderComponent,
    FormWithNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
