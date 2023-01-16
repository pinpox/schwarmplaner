const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const { logger } = require('../helpers/logger');

const moduleLogger = logger.child({ module: 'db' });

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.PORT,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

if (moduleLogger.debug()) {
  moduleLogger.debug('DBCONFIG', dbConfig);
} else {
  const data = {
    name: dbConfig.DB,
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    logging: dbConfig.LOGGING
  };
  moduleLogger.info('DBCONFIG', data);
}

/// //////////////////////////////////////////////////////////////
///  Below here DB Motels are setup and relations are set  //////
/// //////////////////////////////////////////////////////////////

const ShiftModel = require('./shift.model');
const LocationModel = require('./location.model');
const UserModel = require('./user.model');

// Define models
const Shift = ShiftModel(sequelize, Sequelize);
const Location = LocationModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

// Define relations
Location.hasMany(Shift, { as: 'shift', foreignKey: 'location_id' });

User.belongsToMany(Shift, {
  as: 'shifts',
  through: 'shift_user',
  foreignKey: 'user_id',
  otherKey: 'shift_id',
  onDelete: 'CASCADE'
});

module.exports = {
  sequelize,
  Sequelize,
  Shift,
  Location,
  User
};
