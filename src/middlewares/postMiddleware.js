const { categoriesService } = require('../services'); 

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categories = await categoriesService.getAllCategories();
  const ids = categories.map(({ id }) => id);
  const invalid = categoryIds.some((id) => !ids.includes(id));

  if (invalid) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

const validateContains = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds || categoryIds.length < 1) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  validateCategory,
  validateContains,
};