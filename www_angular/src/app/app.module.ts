import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GummiAddComponent } from './gummi-add/gummi-add.component';
import { GummiGetComponent } from './gummi-get/gummi-get.component';
import { GummiMergeComponent } from './gummi-merge/gummi-merge.component';
import { GummiGrindComponent } from './gummi-grind/gummi-grind.component';

@NgModule({
  declarations: [
    AppComponent,
    GummiAddComponent,
    GummiGetComponent,
    GummiMergeComponent,
    GummiGrindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
