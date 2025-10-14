import { Auth0Service } from "./auth0-service.js";

/**
 * Auth0Guard - protecting routes logic
 */
export class Auth0Guard {
    /**
     * Auth0Guard constructor
     * @param {Auth0Service} auth0Service
     */
    constructor(auth0Service) {
        this.auth0Service = auth0Service;
    }

    /**
     * Protect routes with authentication
     * @param {(req: import('express').Request, res: import('express').Response, next: import('express').NextFunction) => Promise<any> | any} handler - Route handler function
     * @returns {(req: import('express').Request, res: import('express').Response, next: import('express').NextFunction) => Promise<void>} Express middleware function
     */
    protected(handler) {
        /**
         * @param {import('express').Request} req
         * @param {import('express').Response} res
         * @param {import('express').NextFunction} next
         */
        return async (req, res, next) => {
            try {
                if (!this.auth0Service.isAuthenticated(req)) {
                    res.status(401).json({
                        error: 'Authentication required'
                    });
                }

                req.user = this.auth0Service.getUser(req);
                return await handler(req, res, next);
            } catch (error) {
                next(error);
            }
        }
    }

    /**
     * Protect routes with role-based access
     * @param {string} role - Required role
     * @param {(req: import('express').Request, res: import('express').Response, next: import('express').NextFunction) => Promise<any> | any} handler - Route handler function
     * @returns {(req: import('express').Request, res: import('express').Response, next: import('express').NextFunction) => Promise<void>} Express middleware function
     */
    withRole(role, handler) {
        return this.protected(async (req, res, next) => {
            const user = req.user;

            if (!user.roles?.includes(role)) {
                return res.status(403).json({
                    error: `Access denied. Required role: ${role}`
                });
            }

            return await handler(req, res, next);
        })
    }
}