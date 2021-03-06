import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginModule } from '../common/login/login.module';
import { SignupModule } from '../common/signup/signup.module';
import { DashboardModule } from '../common/dashboard/dashboard.module';
import { AuthGuard } from '../_helpers/auth-guard/auth-guard.service';
import { EditUserModule } from '../common/edit-user/edit-user.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => DashboardModule, canActivate: [AuthGuard] },
      { path: 'edit-user', loadChildren: () => EditUserModule, canActivate: [AuthGuard] },
      { path: 'account-settings', loadChildren: '../account-settings/account-settings.module#AccountSettingsModule' },
    ]
  },
  {
    path: '',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: 'login', loadChildren: () => LoginModule },
      { path: 'signup', loadChildren: () => SignupModule }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
