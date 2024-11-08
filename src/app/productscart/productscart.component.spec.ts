import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscartComponent } from './productscart.component';

describe('ProductscartComponent', () => {
  let component: ProductscartComponent;
  let fixture: ComponentFixture<ProductscartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductscartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductscartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
