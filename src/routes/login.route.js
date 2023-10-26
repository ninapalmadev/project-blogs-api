const router = require('express').Router();

const { loginController } = require('../controllers');
const { loginMiddleware } = require('../middlewares/loginMiddleware');

router.post('/', loginMiddleware, loginController.createUser);

module.exports = router;
