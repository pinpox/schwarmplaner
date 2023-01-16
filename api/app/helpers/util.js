const { logger } = require('../helpers/logger');
const moduleLogger = logger.child({ module: 'util helper' });
const { createUser } = require("../services/user.service")



const getIPAddress = req => req.headers['x-forwarded-for'] || req.connection.remoteAddress;



async function fillDB() {
  moduleLogger.info('Filling database with dummy data');


  createUser("manu", "123", "test@tes.de", "123443", "admin", "crew", 10)


  /*const numPerRoomWinches = 36;
  const numRooms = 4;

  for (let room = 1; room <= numRooms; room += 1) {
    const winchNrBegin = (room - 1) * numPerRoomWinches + 1;
    const winchNrEnd = winchNrBegin + numPerRoomWinches;
    for (let winchNr = winchNrBegin; winchNr < winchNrEnd; winchNr += 1) {
      createRandomWinch(faker.random.words(1), room);
    }
  }
*/
  moduleLogger.info('database filled with dummy data');
}



module.exports = { getIPAddress, fillDB };
