import { auth } from "express-openid-connect";
import { Auth0Config } from "./auth0-config.js";

/**
 * Auth0 Service - Core authentication logic
 */
export class Auth0Service {
    /**
     * Auth0Service constructor
     * @param {Auth0Config} config - Auth0 configuration
     */
    constructor(config) {
        this.config = config;
        this._validateConfig();
    }

    /**
     * Get Auth0 middleware instance
     */
    getMiddleware() {
        return auth(this.config);
    }

    /**
     * Extract user from request
     * @param {import('express').Request} req - Express request
     */
    getUser(req) {
        return req.oidc?.user || null;
    }

    /**
     * Get Auth0 configured routes
     * @returns {object} Routes object with login, logout, and callback paths
     */
    getRoutes() {
        return {
            login: this.config.routes?.login || '/login',
            logout: this.config.routes?.logout || '/logout',
            callback: this.config.routes?.callback || '/callback'
        };
    }

    /**
     * Check if user is authenticated
     * @param {import('express').Request} req - Express request
     * @returns 
     */
    isAuthenticated(req) {
        return Boolean(req.oidc?.isAuthenticated());
    }

    _validateConfig() {
        const required = ['secret', 'baseURL', 'clientID', 'issuerBaseURL'];
        const missing = required.filter(key => !this.config[key]);

        if (missing.length > 0) {
            throw new Error(`Missing Auth0 configuration: ${missing.join(', ')}`);
        }
    }
}