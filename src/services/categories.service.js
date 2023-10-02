const { Category } = require('../models');

const getAllCategories = async () => {
  const categories = await Category.findAll(
    { attributes: { exclude: ['password'] } },
  );
  return { status: 'SUCCESSFUL', message: categories };
};

const createCategory = async (name) => {
  const create = await Category.create({ name });
  return { status: 'CREATED', message: create.dataValues };
};

const checkCategory = async ({ name }) => {
  if (!name || name.lenght === 0) {
    return {
      error: { message: '"name" is required' },
      code: 400,
    }; 
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  checkCategory,
};