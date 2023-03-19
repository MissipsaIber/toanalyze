import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from './modules/subscription/subscription.component';
import { SubscriptionSuccessComponent } from './modules/subscription-success/subscription-success.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'subscription',
        pathMatch: 'full'
      },
      {
        path: 'subscription',
        component:SubscriptionComponent
      },
      {
        path: 'subscription-success',
        component:SubscriptionSuccessComponent
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
