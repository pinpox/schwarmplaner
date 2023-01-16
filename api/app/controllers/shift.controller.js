const { handleValidationError } = require('../helpers/response');

// Create and Save a new Appointment
exports.create = (req, res) => {
  const validationResponse = handleValidationError(req, res);
  if (validationResponse !== null) {
    return validationResponse;
  }
  return null;
  // Save Appointment in the database
};

// Retrieve all Appointments from the database.
exports.getRange = (req, res) => {
  const validationResponse = handleValidationError(req, res);
  if (validationResponse !== null) {
    return validationResponse;
  }
  return null;
};

// Update a Appointment by the id in the request
exports.update = (req, res) => {
  const validationResponse = handleValidationError(req, res);
  if (validationResponse !== null) {
    return validationResponse;
  }
  return null;
};

// Delete a Appointment with the specified id in the request
exports.delete = (req, res) => {
  const validationResponse = handleValidationError(req, res);
  if (validationResponse !== null) {
    return validationResponse;
  }
  return null;
};
