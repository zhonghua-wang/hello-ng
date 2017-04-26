import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinymceComponent } from './tinymce/tinymce.component';
import { TinymcePageComponent } from './tinymce-page/tinymce-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TinymceComponent, TinymcePageComponent]
})
export class TinymceModule { }
