import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsWidgetsRoutingModule } from './js-widgets-routing.module';
import { JsWidgetsComponent } from './js-widgets/js-widgets.component';
import {TinymceModule} from "./tinymce/tinymce.module";
import {ImportMdModule} from "../import-md/import-md.module";

@NgModule({
  imports: [
    CommonModule,
    ImportMdModule,
    JsWidgetsRoutingModule,
    TinymceModule
  ],
  declarations: [JsWidgetsComponent]
})
export class JsWidgetsModule { }
