import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { RouteReusableStrategy } from './route-reusable-strategy';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';

import { Constants } from '../config/constants';

import { AuthConfig, OAuthModule, OAuthModuleConfig, OAuthStorage } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';
import { AuthGuardWithForcedLogin } from './auth-guard-with-forced-login.service';
import { AuthGuard } from './auth-guard.service';
import { authModuleConfig } from './auth-module-config';
import { AuthService } from './auth.service';

// We need a factory since localStorage is not available at AOT build time
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function storageFactory(): OAuthStorage {
  return localStorage;
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    TranslateModule,
    RouterModule],
  providers: [
    AuthService,
    AuthGuard,
    AuthGuardWithForcedLogin,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
    Constants,
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: AuthConfig, useValue: authConfig },
        { provide: OAuthModuleConfig, useValue: authModuleConfig },
        { provide: OAuthStorage, useFactory: storageFactory },
      ]
    };
  }
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
