import { HelloController } from "../controllers/hello.js";
import { AuthenticationController } from "../controllers/authentication.js";

/**
 * Attach all routes to the Express app.
 * @param {import('express').Application} app  - The Express app
 */
function setRoutes(app) {
    const helloController = new HelloController();
    app.get('/', helloController.hello.bind(helloController));

    const authenticationController = new AuthenticationController();
    app.get('/login', authenticationController.login.bind(authenticationController));
    app.get('/logout', authenticationController.logout.bind(authenticationController));
}

export default setRoutes;