import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { DetailComponent } from './detail/detail.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AuthGuardWithForcedLogin } from '@app/@core/auth/auth-guard-with-forced-login.service';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    canActivate: [AuthGuardWithForcedLogin],
    data: { title: marker('Employee'), role: 'Employee' },
  },
  {
    path: 'detail',
    component: DetailComponent,
    canActivate: [AuthGuardWithForcedLogin],
    data: { title: marker('Employee Detail'), role: 'Employee' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
