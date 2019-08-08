import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRegistryComponent } from './success-registry.component';

describe('SuccessRegistryComponent', () => {
  let component: SuccessRegistryComponent;
  let fixture: ComponentFixture<SuccessRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
