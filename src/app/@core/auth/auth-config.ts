import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  //issuer: 'https://localhost:44354', //this is for IdentityServer4 running on localhost
  //issuer: 'https://localhost:44310', //this is for IdentityServer4 Admin UI running on localhost
  issuer: 'https://cat-token-identity.azurewebsites.net',  //demo identityserver4 in Azure
  clientId: 'AngularStarterKit', // client id setup in IdentityServer4
  responseType: 'code', //code flow PKCE
  redirectUri: window.location.origin + '/auth-callback',
  postLogoutRedirectUri: window.location.origin,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  // scope: 'openid profile email roles', // Ask offline_access to support refresh token refreshes
  scope: 'openid profile email roles app.api.employeeprofile.read', // Ask offline_access to support refresh token refreshes
  useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  nonceStateSeparator : 'semicolon' // Real semicolon gets mangled by IdentityServer's URI encoding
};
