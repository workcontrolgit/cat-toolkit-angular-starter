import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { MasterComponent } from './master.component';
import { Shell } from '@app/shell/shell.service';

// const routes: Routes = [
//   Shell.childRoutes([
//     { path: '', redirectTo: '/master', pathMatch: 'full' },
//     { path: 'master', component: MasterComponent, data: { title: marker('Master') } },
//   ]),
// ];
const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: MasterComponent, data: { title: marker('Master') } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MasterRoutingModule {}
