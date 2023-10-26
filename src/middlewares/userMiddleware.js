const displayNameValidate = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8 || !displayName) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const emailValidate = (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  if (!email || !regex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const passwordValidate = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = {
  displayNameValidate,
  emailValidate,
  passwordValidate,
};