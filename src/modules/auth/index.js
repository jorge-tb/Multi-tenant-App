import { Auth0Guard } from './auth0-guard.js';
import { Auth0Service } from './auth0-service.js';
import { Auth0Config } from './auth0-config.js';

export function setupAuth(environment = 'development') {
    const config = Auth0Config.create(environment);
    const service = new Auth0Service(config);
    const guard = new Auth0Guard(service);

    return {
        config,
        service,
        guard
    };
}

export {
    Auth0Config,
    Auth0Service,
    Auth0Guard
};