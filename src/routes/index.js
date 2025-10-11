import { HelloController } from "../controllers/hello.js";

/**
 * Attach all routes to the Express app.
 * @param {import('express').Application} app  - The Express app
 */
function setRoutes(app) {
    const helloController = new HelloController();
    app.get('/', helloController.hello.bind(helloController));
}

export default setRoutes;