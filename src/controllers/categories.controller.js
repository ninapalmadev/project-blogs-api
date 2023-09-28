const { categoriesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await categoriesService.createCategory(name);
  const { status, message } = result;
  return res.status(mapStatusHTTP(status)).json(message);
};

module.exports = {
  createCategory,
};
