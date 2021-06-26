import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: ['https://cat-netcore-api.azurewebsites.net/api'],
    sendAccessToken: true,
  }
};
