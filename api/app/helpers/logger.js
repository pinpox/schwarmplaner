const bunyan = require('bunyan');
const bformat = require('bunyan-format');

const formatOut = bformat({ outputMode: 'short' });
const packageJson = require('../../package.json');

const logger = bunyan.createLogger({
  name: 'schwarmplaner api',
  version: packageJson.version,
  stream: formatOut,
  level: process.env.NODE_ENV === 'development' ? bunyan.DEBUG : bunyan.INFO
});
logger.info({ NODE_ENV: process.env.NODE_ENV }, 'API logger loaded');

module.exports = { bunyan, logger };
