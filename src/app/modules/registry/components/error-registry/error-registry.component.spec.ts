import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRegistryComponent } from './error-registry.component';

describe('ErrorRegistryComponent', () => {
  let component: ErrorRegistryComponent;
  let fixture: ComponentFixture<ErrorRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
