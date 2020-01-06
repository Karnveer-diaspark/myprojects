import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'popup', component: PopupComponent
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
