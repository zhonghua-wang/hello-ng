import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import 'tinymce';
import 'tinymce/themes/modern';
import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/paste';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css']
})
export class TinymceComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() elementId: string = 'jsme-demo-id';
  @Input() height: number = 300;
  @Output() OnEditorKeyup = new EventEmitter<any>();

  editor;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      height: this.height,
      plugins: ['link', 'paste', 'table'],
      skin_url: '/assets/skins/lightgray',
      // setup: editor => {
      //   this.editor = editor;
      //   editor.on('keyup change', () => {
      //     const content = editor.getContent();
      //     this.OnEditorKeyup.emit(content);
      //   })
      //
      // }
    })
  }
  ngOnDestroy() {
    tinymce.remove(this.editor);
  }


}
