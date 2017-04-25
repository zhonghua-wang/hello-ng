import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdButtonToggleModule, MdGridListModule, MdMenuModule, MdSidenavModule, MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule,
    MdSidenavModule,
    MdGridListModule,
    MdTooltipModule,
    MdButtonToggleModule,

  ],
  exports:[
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdSidenavModule,
    MdGridListModule,
    MdTooltipModule,
    MdButtonToggleModule
  ],
  declarations: []
})
export class ImportMdModule { }
