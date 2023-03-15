export const oktaConfig = {
    clientId:'0oa8qb37vjJY9VBay5d7',
    issuer:'https://dev-53781385.okta.com/oauth2/default',
    redirectUri:'http://localhost:3000/login/callback',
    scopes:['openid', 'profile', 'email'],
    pkce:true,
    disableHttpsCheck: true,
}