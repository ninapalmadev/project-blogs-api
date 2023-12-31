const jwt = require('jsonwebtoken');
const { userService } = require('../services/index');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const secret = process.env.JWT_SECRET;
const algorithm = {
  algorithm: 'HS256',
};

const token = (result) => jwt.sign(result, secret, algorithm);

const getAllUsers = async (req, res) => {
  const result = await userService.getAllUsers();
  const { status, message } = result;
  return res.status(mapStatusHTTP(status)).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const result = await userService.getUserById(id);
  const { status, message } = result;
  if (status === 'NOT_FOUND') return res.status(mapStatusHTTP(status)).json({ message });
  return res.status(mapStatusHTTP(status)).json(message);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const result = await userService.createUser(displayName, email, password, image);
  const { status, message } = result;
  if (status === 'CONFLICT') return res.status(mapStatusHTTP(status)).json({ message });

  const payload = { 
    email: message.email,
    id: message.id,
  };

  const tokenResult = token(payload);
  
  return res.status(mapStatusHTTP(status)).json({ token: tokenResult });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
