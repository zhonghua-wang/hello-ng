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
    this.applet = new JSApplet.JSME(this.elementId, "380px", "340px", {
      options: "query, hydrogens"
    });
    console.log(this.applet);
    var mol = "O=C(O)c4cn(C1CC1)c3cc(N2CCNCC2)c(F)cc3c4=O |JME 2000.10 Mon Nov 06 13:13:26 GMT+01:00 2000 || 24 27                            V2000 |    3.9755   -8.0947    0.0000 O                               |    7.6150  -10.1944    0.0000 O                               |    5.1953  -10.1944    0.0000 O                               |   12.4643   -8.7946    0.0000 F                               |   10.0346   -8.7946    0.0000 C                               |   10.0346   -5.9950    0.0000 C                               |    6.4051   -6.6949    0.0000 C                               |   13.6741   -3.8953    0.0000 C                               |   14.8839   -5.9950    0.0000 C                               |    6.9151   -3.3754    0.0000 C                               |    8.3149   -3.3754    0.0000 C                               |   12.4643   -4.5952    0.0000 C                               |   13.6741   -6.6949    0.0000 C                               |   14.8839   -4.5952    0.0000 N                               |    5.1953   -8.7946    0.0000 C                               |   11.2544   -8.0947    0.0000 C                               |    6.4051   -8.0947    0.0000 C                               |   11.2544   -6.6949    0.0000 C                               |    7.6150   -8.7946    0.0000 C                               |    8.8248   -8.0947    0.0000 C                               |    8.8248   -6.6949    0.0000 C                               |    7.6150   -4.5952    0.0000 C                               |   12.4643   -5.9950    0.0000 N                               |    7.6150   -5.9950    0.0000 N                               |  1 15  2  0         |  2 19  2  0         |  3 15  1  0         |  4 16  1  0         |  5 16  1  0         |  5 20  2  0         |  6 18  1  0         |  6 21  2  0         |  7 17  2  0         |  7 24  1  0         |  8 12  1  0         |  8 14  1  0         |  9 13  1  0         |  9 14  1  0         | 10 11  1  0         | 10 22  1  0         | 11 22  1  0         | 12 23  1  0         | 13 23  1  0         | 15 17  1  0         | 16 18  2  0         | 17 19  1  0         | 18 23  1  0         | 19 20  1  0         | 20 21  1  0         | 21 24  1  0         | 22 24  1  0         |M  END ";

    this.applet.readMolFile(mol)
  }

  ngOnDestroy() {

  }
}
