/**
 * Auth0Config factory class
 */
export class Auth0Config {
    static create(environment = 'development') {
        const baseConfig = {
            authRequired: false,
            auth0Logout: true,
            secret: process.env.AUT0_SECRET,
            baseURL: process.env.AUTH0_BASE_URL,
            clientID: process.env.AUTH0_CLIENT_ID,
            issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
        };

        const envConfigs = {
            development: {
                ...baseConfig,
                session: {
                    rolling: true,
                    rollingDuration: 24 * 60 * 60 // 24 hours
                }
            },
            production: {
                ...baseConfig,
                session: {
                    rolling: true,
                    rollingDuration: 8 * 60 * 60, // 8 hours
                    cookie: {
                        secure: true,
                        sameSite: 'strict'
                    }
                }
            }
        };

        return envConfigs[environment] || envConfigs.development;
    }
}