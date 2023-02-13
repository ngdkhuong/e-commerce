const jwt = require('jsonwebtoken');

/**
 * If the request has a token in the header, then verify the token and if it's valid, add the user to
 * the request and call the next function.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function is a function in the Express router which, when invoked, executes
 * the middleware succeeding the current middleware.
 * @returns The token is being returned.
 */
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json('Token is not valid!');
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json('You are not authenticated');
    }
};

/**
 * If the user is not an admin, then the user must be the same as the user in the params.
 * @param req - The request object.
 * @param res - the response object
 * @param next - a function that will be called when the middleware is done.
 */
const authorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json('You are not allowed to do that!');
        }
    });
};

/**
 * If the user is an admin, then allow them to continue to the next middleware function. Otherwise,
 * send a 403 status code and a message saying they are not allowed to do that.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that is called when the middleware is complete.
 */
const isAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json('You are not allowed to do that!');
        }
    });
};

module.exports = { verifyToken, authorization, isAdmin };
