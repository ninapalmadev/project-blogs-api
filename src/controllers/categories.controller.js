const { categoriesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAllCategories = async (_req, res) => {
  const result = await categoriesService.getAllCategories();
  const { status, message } = result;
  return res.status(mapStatusHTTP(status)).json(message);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await categoriesService.createCategory(name);
  const { status, message } = result;
  return res.status(mapStatusHTTP(status)).json(message);
};

module.exports = {
  getAllCategories,
  createCategory,
};
