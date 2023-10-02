const router = require('express').Router();
const { postController } = require('../controllers');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

router.get('/', tokenMiddleware, postController.getAllPosts);

module.exports = router;