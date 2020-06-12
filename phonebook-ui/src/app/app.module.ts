import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AuthLayoutComponent} from "./common/layout/auth-layout/auth-layout.component";
import {LoginPageComponent} from "./auth/login-page/login-page.component";
import {ActivationComponent} from "./auth/activation/activation.component";
import {PendingComponent} from "./auth/pending/pending.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthLayoutComponent,
    LoginPageComponent,
    ActivationComponent,
    PendingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
