import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthLayoutComponent} from "./common/layout/auth-layout/auth-layout.component";
import {LoginPageComponent} from "./auth/login-page/login-page.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ActivationComponent} from "./auth/activation/activation.component";
import {PendingComponent} from "./auth/pending/pending.component";



const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'user/register', component: RegisterComponent },
      { path: 'user/activation', component: ActivationComponent },
      { path: 'user/pending/:token', component: PendingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
