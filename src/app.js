import express from 'express';
import { logger } from './middlwares/logger.js';
import setRoutes from './routes/index.js';
import { setupAuth, Auth0Config } from './modules/auth/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Configure SSL
Auth0Config.configureDevelopmentSSL();

// Initialize Auth0 module
console.log(`Environment: ${process.env.NODE_ENV}`);
const { service: auth0Service, guard: auth0Guard } = setupAuth(process.env.NODE_ENV);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(auth0Service.getMiddleware()); // Attach Auth0 middleware

// Make auth services available to routes
app.locals.auth = {
    service: auth0Service,
    guard: auth0Guard
}

// Routes
setRoutes(app);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});