# Multi-tenant-App

A multi-tenant Express.js application integrated with Auth0 platform for secure authentication and authorization across multiple tenants.

## Features

- **Multi-tenant Architecture**: Support for multiple organizations/tenants ⚠️ *Coming Soon*
- **Express.js Framework**: Fast, unopinionated web framework for Node.js ✅
- **Auth0 Integration**: Secure authentication and authorization ⚠️ *Coming Soon*
- **Modular Structure**: Clean separation of controllers, routes, and middleware ✅

## Project Structure

```
src/
├── app.js              # Main application entry point
├── controllers/        # Request handlers
│   └── hello.js       # Hello world controller
├── middlwares/        # Custom middleware
│   └── logger.js      # Request logging middleware
└── routes/            # Route definitions
    └── index.js       # Main route configuration
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

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

3. Start the development server:
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000` (or the port specified in the `PORT` environment variable).

## API Endpoints

- `GET /` - Returns "Hello World" message

## Environment Variables

- `PORT` - Server port (default: 3000)

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