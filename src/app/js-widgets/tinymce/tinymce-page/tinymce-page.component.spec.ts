import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinymcePageComponent } from './tinymce-page.component';

describe('TinymcePageComponent', () => {
  let component: TinymcePageComponent;
  let fixture: ComponentFixture<TinymcePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinymcePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinymcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
