import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '@app/@core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  isAuthenticated: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated = authService.isAuthenticated$;
  }

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  login() {
    this.authService.login();
  }

  logout() {
    //this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
    this.authService.logout();
  }

  // get username(): string | null {
  //   this.profileData$ = this.authService.;
  //   this.profileData$.subscribe((data) => {
  //     this.name = data.name;
  //     //console.log (this.name)
  //   });
  //   return this.name ? this.name : null;
  // }

  get username(): string | null {
    return this.authService.identityClaims ? (this.authService.identityClaims as any)['email'] : null;
  }
}
