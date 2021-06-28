import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { ShouldLoginComponent } from './should-login.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
    //{ path: 'detail', loadChildren: () => import('./features/position/detail/detail.module').then((m) => m.DetailModule) },
    { path: 'position/master', loadChildren: () => import('./features/position/master/master.module').then((m) => m.MasterModule) },
    { path: 'position/detail', loadChildren: () => import('./features/position/detail/detail.module').then((m) => m.DetailModule) },
    { path: 'employee', loadChildren: () => import('./features/employee/employee.module').then(m => m.EmployeeModule) },
  ]),
  { path: 'should-login', component: ShouldLoginComponent },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
