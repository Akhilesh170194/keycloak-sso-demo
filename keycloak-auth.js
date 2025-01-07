import { keycloakConfig } from 'config.js';

export function initializeKeycloak(clientId, document) {
    const keycloak = new Keycloak({
        url: keycloakConfig.url, // Keycloak server URL
        realm: keycloakConfig.realm, // Realm name
        clientId: clientId // Client ID
    });

    keycloak.init({
        checkLoginIframe: false, // Disables iframe silent token refresh
        onLoad: 'login-required', // Check if the user is already logged in
        pkceMethod: 'S256' // Enable PKCE for security
    }).then(authenticated => {
        if (authenticated) {
            // Set the username after successful login
            document.getElementById('username').innerText = keycloak.tokenParsed ? keycloak.tokenParsed.preferred_username : 'Unknown User';
        } else {
            // Redirect to home page if not authenticated
            window.location.href = 'home.html';
        }
    }).catch(error => {
        console.error('Keycloak initialization error:', error);
        document.getElementById('welcome-message').innerText = 'Error initializing Keycloak!';
    });
    return keycloak;
}

export function logoutKeycloak(keycloak, document) {
    document.getElementById('logout').addEventListener('click', () => {
        keycloak.logout({
            redirectUri: 'http://127.0.0.1:8000/home.html' // Redirect to home page after logout
        });
    });
}
