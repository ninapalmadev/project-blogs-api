const router = require('express').Router();
const { postController } = require('../controllers');
const tokenMiddleware = require('../middlewares/tokenMiddleware');
const { validateContains } = require('../middlewares/postMiddleware');

router.get('/', tokenMiddleware, postController.getAllPosts);
router.post('/', tokenMiddleware, validateContains, postController.createPost);
router.get('/:id', tokenMiddleware, postController.getPostById);

module.exports = router;