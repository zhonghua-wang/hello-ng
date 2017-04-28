import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CytoscapeComponent } from './cytoscape.component';
import { CytoscapePageComponent } from './cytoscape-page/cytoscape-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CytoscapeComponent,
    CytoscapePageComponent
  ]
})
export class CytoscapeModule { }
