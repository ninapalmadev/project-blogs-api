const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const tokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = token.split(' ')[1];
    const result = jwt.verify(decoded, secret);
    req.user = result;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenMiddleware;