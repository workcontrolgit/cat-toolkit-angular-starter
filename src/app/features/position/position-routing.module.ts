import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionComponent } from './position.component';
import { DetailComponent } from './detail/detail.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AuthGuardWithForcedLogin } from '@app/@core/auth/auth-guard-with-forced-login.service';

const routes: Routes = [
  {
    path: '',
    component: PositionComponent,
    canActivate: [AuthGuardWithForcedLogin],
    data: { title: marker('Position'), role: 'Employee' },
  },
  {
    path: 'detail',
    component: DetailComponent,
    canActivate: [AuthGuardWithForcedLogin],
    data: { title: marker('Position Detail'), role: 'Employee' },
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [AuthGuardWithForcedLogin],
    data: { title: marker('Position Detail'), role: 'Employee' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PositionRoutingModule {}
