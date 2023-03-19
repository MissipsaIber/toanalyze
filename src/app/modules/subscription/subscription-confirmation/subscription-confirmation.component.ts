import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SubscriptionPlan } from '@app/core/modeles/subscription-plan';
import { PaymentData } from '@app/core/modeles/payment-data';
import { SubscriptionParams } from '@app/core/modeles/subscription-params';
import { SubscriptionService } from '@app/core/services/subscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription-confirmation',
  templateUrl: './subscription-confirmation.component.html',
  styleUrls: ['./subscription-confirmation.component.scss']
})
export class SubscriptionConfirmationComponent implements OnInit {
  @Output() actionStat: EventEmitter<any> = new EventEmitter<any>()

  subscriptionParams: SubscriptionParams;
  paymentData: PaymentData;
  subscriptionPlan: SubscriptionPlan;
  totalPrice: number=0;
  termsAndConditions: boolean = false;
  email:string="asmajawadi123@gmail.com"

  constructor(private router: Router,private subscriptionService: SubscriptionService) {
    this.subscriptionParams = this.subscriptionService.getSubscriptionParams();
    this.paymentData = this.subscriptionService.getPaymentData();
    this.subscriptionPlan = this.subscriptionService.getSelectedSubscriptionPlan();
   }

  ngOnInit(): void {
    this.calculateCosts();
  }

  // calcule total Price
  calculateCosts(): void {
    this.totalPrice = this.subscriptionService.getTotalPrice();

  }
  onConfirm() {
    // Navigate to the success Subscription
    this.router.navigate(['/subscription-success']);
  }
// go back to payment section
  back(){
    this.actionStat.emit({selectedIndex:1,section:"payment"})
  }
}
