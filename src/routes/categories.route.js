const router = require('express').Router();
const { categoriesController } = require('../controllers');
const { categoriesMiddleware } = require('../middlewares/categoriesMiddleware');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

router.post('/', tokenMiddleware, categoriesMiddleware, categoriesController.createCategory);
router.get('/', tokenMiddleware, categoriesController.getAllCategories);

module.exports = router;
