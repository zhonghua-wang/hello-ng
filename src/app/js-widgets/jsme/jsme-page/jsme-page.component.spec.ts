import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsmePageComponent } from './jsme-page.component';

describe('JsmePageComponent', () => {
  let component: JsmePageComponent;
  let fixture: ComponentFixture<JsmePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsmePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
