import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import {AppComponent} from './app.component';
import {ImportMdModule} from "./import-md/import-md.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    ImportMdModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
