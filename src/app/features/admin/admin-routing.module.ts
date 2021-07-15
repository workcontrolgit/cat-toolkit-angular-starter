import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AuthGuardWithForcedLogin } from '@app/@core/auth/auth-guard-with-forced-login.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardWithForcedLogin],
    data: {
      title: marker('Admin'),
      role: 'HrAdmin',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
