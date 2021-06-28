import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '@app/@core/auth/auth.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-should-login',
  templateUrl: './should-login.component.html',
  styleUrls: ['./should-login.component.scss'],
})
export class ShouldLoginComponent {
  version: string | null = environment.version;
  constructor(private authService: AuthService, private oAuthService: OAuthService) {}

  public login($event: any) {
    $event.preventDefault();
    this.oAuthService.initLoginFlow();
  }
}
