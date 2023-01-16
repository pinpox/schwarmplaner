const db = require('../models');

const { User } = db;
const { logger } = require('../helpers/logger');

const moduleLogger = logger.child({ module: 'user service' });

async function createUser(name, password, email, phone, role, type, minimalHours) {
  User.create({ name, password, email, phone, role, type, minimalHours })
    .then()
    .catch(e => {
      moduleLogger.error(e);
    });
}
module.exports = { createUser };
