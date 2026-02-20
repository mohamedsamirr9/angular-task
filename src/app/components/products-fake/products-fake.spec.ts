import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFake } from './products-fake';

describe('ProductsFake', () => {
  let component: ProductsFake;
  let fixture: ComponentFixture<ProductsFake>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsFake]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsFake);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
