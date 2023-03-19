import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '@app/core/services/subscription.service';

@Component({
  selector: 'app-payment-data',
  templateUrl: './payment-data.component.html',
  styleUrls: ['./payment-data.component.scss']
})
export class PaymentDataComponent implements OnInit {
  @Output() actionStat: EventEmitter<any> = new EventEmitter<any>()
  paymentForm: FormGroup=this.createPaymentForm();

  constructor(
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService,
  ) { }
  ngOnInit(): void {

  }
  //generate Form Payment
  createPaymentForm(){
   return this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expirationDate: ['', [Validators.required]],
      securityCode: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }
// set data subscription in service && go to the next step 'confirmation
  next(): void {
    if (this.paymentForm.valid) {
      this.subscriptionService.setPaymentData(this.paymentForm.value);
      this.actionStat.emit({selectedIndex:2,section:"confirmation"})
    }
  }
  //go back to parameters subscription
  back(){
    this.actionStat.emit({selectedIndex:0,section:"parameters"})
  }
}
