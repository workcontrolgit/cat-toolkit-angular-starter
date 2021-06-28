import { OAuthModuleConfig } from 'angular-oauth2-oidc';
import { environment } from '@env/environment';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: [environment.Api_Endpoint, environment.Api_Mock_Endpoint],
    sendAccessToken: true,
  },
};
