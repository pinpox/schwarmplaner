const router = require('express').Router();
const location = require('../controllers/location.controller');

module.exports = app => {
  router.post('/new', location.create);

  router.get('/:slug', location.findBySlug);

  app.use('/location', router);
};
