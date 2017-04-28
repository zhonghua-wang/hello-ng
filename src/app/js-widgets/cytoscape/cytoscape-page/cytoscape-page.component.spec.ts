import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CytoscapePageComponent } from './cytoscape-page.component';

describe('CytoscapePageComponent', () => {
  let component: CytoscapePageComponent;
  let fixture: ComponentFixture<CytoscapePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CytoscapePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CytoscapePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
