import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionComponent } from './master/position.component';
import { DetailComponent } from './detail/detail.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  { path: '', component: PositionComponent, data: { title: marker('Position') } },
  { path: 'detail', component: DetailComponent, data: { title: marker('Position Detail') } },
  { path: 'detail/:id', component: DetailComponent, data: { title: marker('Position Detail') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PositionRoutingModule {}
