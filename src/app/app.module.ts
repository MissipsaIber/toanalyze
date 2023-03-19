import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { SubscriptionSuccessComponent } from './modules/subscription-success/subscription-success.component';
import { SubscriptionComponent } from './modules/subscription/subscription.component';
import { SubscriptionParametersComponent } from './modules/subscription/subscription-parameters/subscription-parameters.component';
import { PaymentDataComponent } from './modules/subscription/payment-data/payment-data.component';
import { SubscriptionConfirmationComponent } from './modules/subscription/subscription-confirmation/subscription-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SubscriptionParametersComponent,
    PaymentDataComponent,
    SubscriptionConfirmationComponent,
    SubscriptionSuccessComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class AppModule { }
