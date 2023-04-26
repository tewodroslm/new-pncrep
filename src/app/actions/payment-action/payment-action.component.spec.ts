import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentActionComponent } from './payment-action.component';

describe('PaymentActionComponent', () => {
  let component: PaymentActionComponent;
  let fixture: ComponentFixture<PaymentActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
