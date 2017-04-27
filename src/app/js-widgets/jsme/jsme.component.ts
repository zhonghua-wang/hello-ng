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
  @Input() width: number = 380;
  @Input() height: number = 340;
  @Input() molString: string;
  @Input() showDemo: boolean = true;

  applet;
  smiles: string;
  _demoSmiles = "CC1([C@@H](N2[C@H](S1)[C@@H](C2=O)NC(=O)CC3=CC=CC=C3)C(=O)O)C"
  constructor() {
  }

  ngOnInit() {

  }

  readMolString(molString: String){
    this.applet.readGenericMolecularInput(molString);
  }

  ngAfterViewInit() {
    this.applet = new JSApplet.JSME(
      this.elementId,
      this.width.toString() + 'px',
      this.height.toString() + 'px', {
      options: "query, hydrogens"
    });
    if (this.showDemo){
      this.readMolString(this._demoSmiles);
    }
    this.applet.setAfterStructureModifiedCallback(() => {
      this.smiles = this.applet.smiles();
      console.log('structure modified! current smiles: ' + this.smiles);

    })

  }

  ngOnDestroy() {

  }
}
