import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user-authentication/login/login.component';
import { PollFromComponent } from './pollform/poll-from/poll-from.component';
import { AuthGuard } from './service/auth.guard';
import { ErrorPopupComponent } from './user-authentication/error-popup/error-popup.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "login", component: LoginComponent},
  { path: "poll-form", component: PollFromComponent, canActivate: [AuthGuard]},
  {path:"error-popup", component:ErrorPopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
