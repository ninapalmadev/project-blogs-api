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

module.exports = {
  getAllCategories,
  createCategory,
};