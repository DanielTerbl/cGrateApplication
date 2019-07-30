import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewerComponent } from './employee-viewer.component';

describe('EmployeeViewerComponent', () => {
  let component: EmployeeViewerComponent;
  let fixture: ComponentFixture<EmployeeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
