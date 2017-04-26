import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
//import "libs/jsme"


@Component({
  selector: 'app-jsme',
  templateUrl: './jsme.component.html',
  styleUrls: ['./jsme.component.css']
})
export class JsmeComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() elementId: string;
  @Output() onEditorContentChange = new EventEmitter();
  applet;
  jsmeOnLoad() {}
  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    JSApplet.JSME(this.elementId, "380px", "340px", {
      options: "query, hydrogens"
    })
  }

  ngOnDestroy() {

  }
}
