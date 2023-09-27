const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    return ({ status: 'CONFLICT', message: 'User already registered' });
  }
  const newUser = await User.create({ displayName, email, password, image });

  return { status: 'CREATED', message: newUser.dataValues };
};

module.exports = {
  createUser,
};