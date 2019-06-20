import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewPdfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
