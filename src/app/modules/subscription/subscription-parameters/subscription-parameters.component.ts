import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SubscriptionService } from '@app/core/services/subscription.service';
import { SubscriptionPlan } from '@app/core/modeles/subscription-plan';

@Component({
  selector: 'app-subscription-parameters',
  templateUrl: './subscription-parameters.component.html',
  styleUrls: ['./subscription-parameters.component.scss']
})
export class SubscriptionParametersComponent implements OnInit {
  @Output() actionStat: EventEmitter<any> = new EventEmitter<any>()
  subscriptionForm=this.createSubscriptionForm();
  subscriptionPlans:any = [];
  storageOptions = [5, 10, 50];


  constructor(private formBuilder: FormBuilder,
     private subscriptionService: SubscriptionService
     ) { }

  ngOnInit(): void {
     this.subscriptionService.getSubscriptionPlan().subscribe((res:{subscription_plans: SubscriptionPlan[]})=>{
      this.subscriptionPlans=res.subscription_plans as SubscriptionPlan[]
      this.setSubscriptionPlan()
    })
  }
  // generate form subscription params
  createSubscriptionForm():FormGroup{
    return this.formBuilder.group({
      duration:  [12, Validators.required],
      storage: [5, Validators.required],
      upfrontPayment: [false, Validators.required],
    })
  }
// set data selectedSubscriptionPlan in service
  setSubscriptionPlan():void{
    const selectedSubscriptionPlan=this.subscriptionPlans.find((item:SubscriptionPlan)=> item.duration_months==this.subscriptionForm.value.duration)
    this.subscriptionService.setSelectedSubscriptionPlan(selectedSubscriptionPlan)
  }
  // set data subscriptionParams in service
  setSubscriptionParams():void{
    this.subscriptionService.setSubscriptionParams(this.subscriptionForm.value);

  }
  // go to the next step 'payment data subscription
  next(): void {
    if (this.subscriptionForm.valid) {
      this.setSubscriptionPlan();
      this.setSubscriptionParams()
      this.actionStat.emit({selectedIndex:1,section:"payment"})
    }
  }
}
