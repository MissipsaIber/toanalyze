import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionParametersComponent } from './subscription-parameters.component';

describe('SubscriptionParametersComponent', () => {
  let component: SubscriptionParametersComponent;
  let fixture: ComponentFixture<SubscriptionParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
