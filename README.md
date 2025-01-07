# Keycloak Single Sign-On Demo

This project demonstrates Single Sign-On (SSO) using Keycloak. It includes multiple applications that authenticate users via Keycloak and display a welcome message upon successful login.

## Features

- Redirects users to the Keycloak login page.
- Displays a welcome message after successful login.
- Provides a logout option.
- Uses PKCE (Proof Key for Code Exchange) for enhanced security.
- Supports multiple applications with individual configurations.

## Prerequisites

- Python installed (for running the HTTP server).
- Keycloak server set up with the following configurations:
  - Realm: Realm name. (e.g., `sso-poc`)
  - Clients: Clients (e.g., `app1`, `app2`, `app3`)

## Configuration

Update the configuration properties in the `config.js` file in the root directory:
    - url: '<https://your-keycloak-server-url>'
    - realm: 'sso-poc'
    - app1_client_id: 'app1'
    - app2_client_id: 'app2'
    - app3_client_id: 'app3'

## How to Run

- Go to the keycloak-sso-demo directory.
- Run the following command to start the HTTP server:
- Replace `port` with the desired port number (e.g., 8000).
    `python -m http.server <port>`
- Access the home page at <http://127.0.0.1:`port`/home.html>.