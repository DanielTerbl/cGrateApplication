import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCapturePageComponent } from './emp-capture-page.component';

describe('EmpCapturePageComponent', () => {
  let component: EmpCapturePageComponent;
  let fixture: ComponentFixture<EmpCapturePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCapturePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCapturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
