import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { AuthGuardWithForcedLogin } from '@app/@core/auth/auth-guard-with-forced-login.service';

const routes: Routes = [
  { path: '', component: ManagerComponent, canActivate: [AuthGuardWithForcedLogin], data: { role: 'Manager' } },
  //{ path: '', component: ManagerComponent, data: { role: 'Manager' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
