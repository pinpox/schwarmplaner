const router = require('express').Router();

const user = require('../controllers/user.controller');

module.exports = app => {
  // Confirm password
  router.post('/confirm', user.confirmPasswordAndLogin);

  // Login
  router.post('/login', user.login);

  app.use('/auth', router);
};
