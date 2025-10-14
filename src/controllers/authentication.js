export class AuthenticationController {
    login(req, res) {
        res.send('Log in action');
    }

    // There're typically three-session layers to consider when log users out:
    // 1. Application Session Layer
    // 2. Auth0 Session Layer
    // 3. Identity Provider Session Layer
    logout(req, res) {
        res.send('Log out action');
    }
}