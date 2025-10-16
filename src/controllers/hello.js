import { Auth0Service } from "../modules/auth/index.js";

export class HelloController {
    /**
     * HelloController constructor
     * @param {Auth0Service} auth0Service 
     */
    constructor(auth0Service) {
        this.auth0Service = auth0Service;
    }

    hello(req, res) {
        if (this.auth0Service.isAuthenticated(req)) {
            const user = this.auth0Service.getUser(req);
            res.send(`Authenticated! ${user.email} with sessionId ${user.sid}`);
            return;
        }

        res.send('Hello World');
    }
}