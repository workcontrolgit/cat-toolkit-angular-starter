import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ToastService } from '@app/services/toast.service';

@Injectable()
export class RoleGuard implements CanActivate {
  userProfile: any;

  constructor(private authService: AuthService, private toastService: ToastService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.canActivateProtectedRoutes$.pipe(
      map((canActivateProtectedRoutes: boolean) => {
        if (canActivateProtectedRoutes) {
          // role check only if route contain data.role
          // https://javascript.plainenglish.io/4-ways-to-check-whether-the-property-exists-in-a-javascript-object-20c2d96d8f6e
          if (!!route.data.role) {
            const routeRoles = route.data.role;

            this.userProfile = this.authService.identityClaims;
            if (!!this.userProfile.role) {
              const userRoles = this.userProfile.role;

              if (userRoles.includes(routeRoles)) {
                // user's roles contains route's role
                return true;
              } else {
                // toaster-display role user needs to have to access this route;
                this.showToaster('Access denied', 'You do not have role ' + routeRoles);
              }
            }
          }
        }
        return false;
      })
    );
  }

  // ngbmodal service
  showToaster(title: string, message: string) {
    this.toastService.show(message, {
      classname: 'bg-danger text-light',
      delay: 2000,
      autohide: true,
      headertext: title,
    });
  }
}
