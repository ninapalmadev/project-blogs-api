const { User } = require('../models');

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { status: 'SUCCESSFUL', message: users };
};

const createUser = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    return ({ status: 'CONFLICT', message: 'User already registered' });
  }
  const newUser = await User.create({ displayName, email, password, image });

  return { status: 'CREATED', message: newUser.dataValues };
};

module.exports = {
  getAllUsers,
  createUser,
};