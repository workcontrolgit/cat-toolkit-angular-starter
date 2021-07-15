import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardWithForcedLogin implements CanActivate {
  profile: any;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isDoneLoading$.pipe(
      filter((isDone) => isDone),
      switchMap((_) => this.authService.isAuthenticated$),
      tap(
        (isAuthenticated) => this.checkUserLogin(route, state.url, isAuthenticated) || this.authService.login(state.url)
      )
    );
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any, isAuthenticated: boolean): boolean {
    if (isAuthenticated) {
      this.profile = this.authService.identityClaims;
      const userRoles = this.profile.role;
      //console.log (userRoles)
      const routeRole = route.data.role;
      //console.log (routeRole)
      //console.log(userRoles.includes(routeRole));
      if (userRoles.includes(routeRole)) {
        return true;
      } else {
        //TODO redirect to autothorization error page
        return false;
      }
    }
    return false;
  }
}
