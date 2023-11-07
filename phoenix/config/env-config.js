const oidcConfig = {
    authority: "https://rpi.local:5000",
    client_id: "phoenix.oauth2.client.interactive.front-end",
    redirect_uri: "http://rpi.local:3000/login-redirect",
    post_logout_redirect_uri: "http://rpi.local:3000",
    scope: "openid profile offline_access phoenix.oauth2.scope.api.auth phoenix.oauth2.scope.api.app",
};
const apiAddress = "https://rpi.local:5000";

const appApiAddress = "https://rpi.local:5001";

export { oidcConfig, apiAddress, appApiAddress };