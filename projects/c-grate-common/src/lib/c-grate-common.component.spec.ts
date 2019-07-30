import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CGrateCommonComponent } from './c-grate-common.component';

describe('CGrateCommonComponent', () => {
  let component: CGrateCommonComponent;
  let fixture: ComponentFixture<CGrateCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CGrateCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CGrateCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
