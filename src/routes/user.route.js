const router = require('express').Router();

const { userController } = require('../controllers');
const { 
  displayNameValidate, 
  passwordValidate, 
  emailValidate, 
} = require('../middlewares/userMiddleware');

router.post('/', displayNameValidate, passwordValidate, emailValidate, userController.createUser);

module.exports = router;