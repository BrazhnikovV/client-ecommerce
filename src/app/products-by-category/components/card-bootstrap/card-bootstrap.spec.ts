import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProductByCategoryComponent } from './card-bootstrap';

describe('ItemProductByCategoryComponent', () => {
  let component: ItemProductByCategoryComponent;
  let fixture: ComponentFixture<ItemProductByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemProductByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProductByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
