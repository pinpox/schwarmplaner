const uuid = require('uuid'); // ES5
const db = require('../models');

const { User } = db;

const { handleValidationError, handleInternalError, handleNotFound, handleSuccess } = require('../helpers/response');
// Create and Save a new Calendar
exports.create = (req, res) => {
  const validationResponse = handleValidationError(req, res);
  if (validationResponse !== null) {
    return validationResponse;
  }
};
// Find a single Calendar with slug
exports.findBySlug = (req, res) => {
  const validationResponse = handleValidationError(req, res);
  if (validationResponse !== null) {
    return validationResponse;
  }
};
