import { NgModule } from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';

import { JsWidgetsRoutingModule } from './js-widgets-routing.module';
import { JsWidgetsComponent } from './js-widgets/js-widgets.component';
import {TinymceModule} from "./tinymce/tinymce.module";
import {ImportMdModule} from "../import-md/import-md.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { JsmeComponent } from './jsme/jsme.component';
import {JsmePageComponent} from "./jsme/jsme-page/jsme-page.component";


@NgModule({
  imports: [
    CommonModule,
    ImportMdModule,
    FlexLayoutModule,
    JsWidgetsRoutingModule,
    TinymceModule
  ],
  declarations: [JsWidgetsComponent, JsmeComponent, JsmePageComponent]
})
export class JsWidgetsModule { }
