import express from 'express';
import { logger } from './middlwares/logger.js';
import setRoutes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Routes
setRoutes(app);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});