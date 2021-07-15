import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionComponent } from './position.component';
import { DetailComponent } from './detail/detail.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AuthGuard } from '@app/@core/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: PositionComponent,
    canActivate: [AuthGuard],
    data: { title: marker('Position') },
  },
  {
    path: 'detail',
    component: DetailComponent,
    canActivate: [AuthGuard],
    data: { title: marker('Position Detail') },
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [AuthGuard],
    data: { title: marker('Position Detail') },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PositionRoutingModule {}
