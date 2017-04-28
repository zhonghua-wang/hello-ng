import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JsWidgetsComponent} from "./js-widgets/js-widgets.component";

import {TinymcePageComponent} from "./tinymce/tinymce-page/tinymce-page.component";
import {JsmePageComponent} from "./jsme/jsme-page/jsme-page.component";
import {CytoscapePageComponent} from './cytoscape/cytoscape-page/cytoscape-page.component';
const routes: Routes = [
  {
    path: '',
    component: JsWidgetsComponent,
    children: [
      {
        path: 'tinymce',
        component: TinymcePageComponent
      },
      {
        path: 'jsme',
        component: JsmePageComponent
      },
      {
        path: 'cytoscape',
        component: CytoscapePageComponent
      },
      {
        path: '',
        redirectTo: 'tinymce',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsWidgetsRoutingModule { }
