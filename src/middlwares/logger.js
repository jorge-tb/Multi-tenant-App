/**
 * Logger middleware with format '{req.method} {req.url}'.
 * @param {import('express').Request} req - The Express request object
 * @param {import('express').Response} res - The Express response object
 * @param {import('express').NextFunction} next - The next middleware function
 */
export function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}