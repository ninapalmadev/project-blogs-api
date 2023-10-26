const router = require('express').Router();

const { userController } = require('../controllers');
const { 
  displayNameValidate, 
  passwordValidate, 
  emailValidate, 
} = require('../middlewares/userMiddleware');

const tokenMiddleware = require('../middlewares/tokenMiddleware');

router.get('/', tokenMiddleware, userController.getAllUsers);
router.get('/:id', tokenMiddleware, userController.getUserById);
router.post('/', displayNameValidate, passwordValidate, emailValidate, userController.createUser);

module.exports = router;