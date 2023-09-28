const { Category } = require('../models');

const createCategory = async (name) => {
  const create = await Category.create({ name });
  return { status: 'CREATED', message: create.dataValues };
};

module.exports = {
  createCategory,
};