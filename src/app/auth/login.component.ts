import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@core';
//import { AuthenticationService } from './authentication.service';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;
  userData$: Observable<any>;
  isAuthenticated$: Observable<boolean>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    //private authenticationService: AuthenticationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // this.userData$ = this.authService.userData;
    // this.isAuthenticated$ = this.authService.isLoggedIn;
  }

  login() {
    log.debug('doLogin');
    this.authService.doLogin();
  }

  logout() {
    this.authService.signOut();
  }
}
