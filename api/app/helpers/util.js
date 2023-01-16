// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { logger } from './logger';
import { createUser } from '../services/user.service';

const moduleLogger = logger.child({ module: 'util helper' });

const getIPAddress = req => req.headers['x-forwarded-for'] || req.connection.remoteAddress;

async function fillDB() {
  moduleLogger.info('Filling database with dummy data');

  // add admin
  createUser('admin', '123', 'admin@schwarm.de', faker.phone.number('+491#########'), 'admin', 'crew', 0);
  // add crew
  createUser('helperCrew', '123', 'helperCrew@schwarm.de', faker.phone.number('+491#########'), 'helper', 'crew', 8);
  // add user
  createUser(
    'helperTicket',
    '123',
    'helperTicket@schwarm.de',
    faker.phone.number('+491#########'),
    'helper',
    'ticket',
    8
  );
  createUser('helperGuest', '123', 'helperGuest@schwarm.de', faker.phone.number('+491#########'), 'helper', 'guest', 2);
  // add coordinator
  createUser(
    'coordinatorTicket',
    '123',
    'coordinatorTicket@schwarm.de',
    faker.phone.number('+491#########'),
    'coordinator',
    'ticket',
    8
  );

  for (let n = 1; n <= 100; n += 1) {
    createUser(
      faker.name.firstName(),
      '123',
      faker.internet.email(),
      faker.phone.number('+491#########'),
      'helper',
      'ticket',
      8
    );
  }

  moduleLogger.info('database filled with dummy data');
}

export default { getIPAddress, fillDB };
