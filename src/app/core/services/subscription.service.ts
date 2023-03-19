import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentData } from '../modeles/payment-data';
import { SubscriptionPlan } from '../modeles/subscription-plan';
import { SubscriptionParams } from '../modeles/subscription-params';



@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  subscriptionParams:SubscriptionParams = {
    duration: 12,
    storage: 5,
    upfrontPayment: false
  };
  paymentData: PaymentData = { creditCardNumber: '', expirationDate: '', securityCode: '' };
  selectedSubscriptionPlan: SubscriptionPlan= {
    duration_months: 12,
    price_usd_per_gb: 2
  };
  constructor(private http: HttpClient) { }

  // get list subscriptionPlan
  getSubscriptionPlan(): Observable<any> {
    return this.http.get('assets/subscriptionPlan.json');
  }
  // get subscriptionParams
  getSubscriptionParams(): SubscriptionParams {
   return this.subscriptionParams
  }
  // update subscriptionParams
  setSubscriptionParams(params: SubscriptionParams): void {
    this.subscriptionParams.duration = params.duration;
    this.subscriptionParams.storage = params.storage;
    this.subscriptionParams.upfrontPayment = params.upfrontPayment;
  }
  //get paymentData
  getPaymentData():PaymentData {
   return this.paymentData;
  }
  // update paymentData
  setPaymentData(paymentData: PaymentData) {
    this.paymentData = paymentData;
  }
  // get selectedSubscriptionPlan
  getSelectedSubscriptionPlan(): SubscriptionPlan {
    return this.selectedSubscriptionPlan;
  }
  // update selectedSubscriptionPlan
  setSelectedSubscriptionPlan(plan: SubscriptionPlan): void {
    this.selectedSubscriptionPlan = plan;
  }
  // calcule total price
  getTotalPrice(): number {
    let totalPrice =
    this.selectedSubscriptionPlan.price_usd_per_gb * this.subscriptionParams.storage * this.selectedSubscriptionPlan.duration_months;
    if (this.subscriptionParams.upfrontPayment) {
      totalPrice = totalPrice * 0.9;
    }
    return totalPrice;
  }
}
