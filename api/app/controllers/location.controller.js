const { handleValidationError } = require('../helpers/response');
// Create and Save a new Calendar
exports.create = (req, res) => {
  const validationResponse = handleValidationError(req, res);
  if (validationResponse !== null) {
    return validationResponse;
  }
  return null;
};
// Find a single Calendar with slug
exports.findBySlug = (req, res) => {
  const validationResponse = handleValidationError(req, res);
  if (validationResponse !== null) {
    return validationResponse;
  }
  return null;
};
