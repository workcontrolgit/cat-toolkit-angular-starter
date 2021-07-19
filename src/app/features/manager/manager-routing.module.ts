import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { AuthGuard } from '@app/@core/auth/auth-guard.service';
import { RoleGuard } from '@app/@core/auth/role-guard.service';
const routes: Routes = [
  //{ path: '', component: ManagerComponent, canActivate: [AuthGuard] },
  { path: '', component: ManagerComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Manager' } },
  //{ path: '', component: ManagerComponent, data: { role: 'Manager' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
