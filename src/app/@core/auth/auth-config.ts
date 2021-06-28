import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '@env/environment';

export const authConfig: AuthConfig = {
  issuer: environment.Oidc_Issuer,
  clientId: environment.Oidc_ClientId,
  responseType: environment.Oidc_responseType,
  redirectUri: environment.Oidc_redirectUri,
  postLogoutRedirectUri: environment.Oidc_postLogoutRedirectUri,
  silentRefreshRedirectUri: environment.Oidc_silentRefreshRedirectUri,
  scope: environment.Oidc_scope,
  useSilentRefresh: environment.Oidc_useSilentRefresh,
  silentRefreshTimeout: environment.Oidc_silentRefreshTimeout,
  timeoutFactor: environment.Oidc_timeoutFactor,
  sessionChecksEnabled: environment.Oidc_sessionChecksEnabled,
  showDebugInformation: environment.Oidc_showDebugInformation,
  clearHashAfterLogin: environment.Oidc_clearHashAfterLogin,
  nonceStateSeparator: environment.Oidc_nonceStateSeparator,
};
