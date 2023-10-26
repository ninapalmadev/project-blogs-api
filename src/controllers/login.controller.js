const jwt = require('jsonwebtoken');
const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const secret = process.env.JWT_SECRET;
const algorithm = {
  algorithm: 'HS256', 
};

const token = (result) => jwt.sign(result, secret, algorithm);

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService.createUser(email, password);
  const { status, message } = result;

  if (status === 'INVALID_USER') {
    return res.status(mapStatusHTTP(status)).json({ message });
  }

  const payload = {
    email: message.email,
    id: message.id,
  };

  const tokenResult = token(payload);

  return res.status(mapStatusHTTP(status)).json({ token: tokenResult });
};

module.exports = {
  createUser,
};