import { Routes, Route, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '@app/@core/auth/auth-guard.service';
import { AuthGuardWithForcedLogin } from '@app/@core/auth/auth-guard-with-forced-login.service';
import { ShellComponent } from './shell.component';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  // pageTitle: string;
  // constructor(
  //   private route: ActivatedRoute
  // ) {}
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
    };
  }
}
