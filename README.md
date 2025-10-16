# Multi-tenant-App

A multi-tenant Express.js application integrated with Auth0 platform for secure authentication and authorization across multiple tenants.

## Features

- **Multi-tenant Architecture**: Support for multiple organizations/tenants ⚠️ *Coming Soon*
- **Express.js Framework**: Fast, unopinionated web framework for Node.js ✅
- **Auth0 Integration**: Secure authentication and authorization ✅
- **Modular Structure**: Clean separation of controllers, routes, and middleware ✅
- **Environment-based Configuration**: Different settings for development and production ✅
- **Route Protection**: Guards for authenticated and role-based access ✅

## Project Structure

```
src/
├── app.js                      # Main application entry point
├── controllers/                # Request handlers
│   └── hello.js               # Hello world controller with Auth0 integration
├── middlwares/                # Custom middleware
│   └── logger.js              # Request logging middleware
├── modules/                   # Application modules
│   ├── index.js              # Module exports
│   └── auth/                 # Auth0 authentication module
│       ├── index.js          # Auth setup and exports
│       ├── auth0-config.js   # Auth0 configuration factory
│       ├── auth0-service.js  # Core authentication service
│       └── auth0-guard.js    # Route protection guards
└── routes/                   # Route definitions
    └── index.js              # Main route configuration
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Auth0 account and application setup

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jorge-tb/Multi-tenant-App.git
   cd Multi-tenant-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file:
   ```env
   AUTH0_SECRET=your_auth0_secret
   AUTH0_BASE_URL=http://localhost:3000
   AUTH0_CLIENT_ID=your_auth0_client_id
   AUTH0_ISSUER_BASE_URL=https://your-domain.auth0.com
   PORT=3000
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000` (or the port specified in the `PORT` environment variable).

## Auth0 Setup

1. Create an Auth0 application in your Auth0 dashboard
2. Configure the application:
   - **Application Type**: Regular Web Application
   - **Allowed Callback URLs**: `http://localhost:3000/callback`
   - **Allowed Logout URLs**: `http://localhost:3000`
3. Copy the application credentials to your `.env` file

## API Endpoints

- `GET /` - Returns "Hello World" or authenticated user info
- `GET /login` - Redirects to Auth0 login (auto-configured)
- `GET /logout` - Logs out the user (auto-configured)
- `GET /callback` - Auth0 callback endpoint (auto-configured)

## Authentication Features

### Auth0Service
The [`Auth0Service`](src/modules/auth/auth0-service.js) provides:
- Middleware integration with Express
- User authentication status checking
- User information extraction
- Route configuration management

### Auth0Guard
The [`Auth0Guard`](src/modules/auth/auth0-guard.js) provides:
- Route protection for authenticated users
- Role-based access control
- Async handler wrapping

### Usage Example

```javascript
import { setupAuth } from './modules/auth/index.js';

const { service, guard } = setupAuth('development');

// Protect a route
app.get('/protected', guard.protected((req, res) => {
    res.json({ user: req.user });
}));

// Role-based protection
app.get('/admin', guard.withRole('admin', (req, res) => {
    res.json({ message: 'Admin only content' });
}));
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)
- `AUTH0_SECRET` - Auth0 application secret
- `AUTH0_BASE_URL` - Your application base URL
- `AUTH0_CLIENT_ID` - Auth0 application client ID
- `AUTH0_ISSUER_BASE_URL` - Auth0 domain URL

## Development vs Production

The application automatically configures different settings based on the `NODE_ENV`:

- **Development**: 24-hour session duration, SSL verification disabled
- **Production**: 8-hour session duration, secure cookies, strict same-site policy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Jorge Tomé Blanco

## Links

- [Repository](https://github.com/jorge-tb/Multi-tenant-App)
- [Issues](https://github.com/jorge-tb/Multi-tenant-App/issues)