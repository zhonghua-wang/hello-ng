import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JsWidgetsComponent} from "./js-widgets/js-widgets.component";
import {TinymceComponent} from "./tinymce/tinymce/tinymce.component";

const routes: Routes = [
  {
    path: '',
    component: JsWidgetsComponent,
    children: [
      {
        path: 'tinymce',
        component: TinymceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsWidgetsRoutingModule { }
