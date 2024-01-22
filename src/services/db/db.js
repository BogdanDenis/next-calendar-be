const mongoose = require('mongoose');

let dbService = null;

const createDbService = () => {
  const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
  } = process.env;

  mongoose.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}`);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Database connected successfully');
  });

  return db;
};

const getDbService = () => {
  if (!dbService) {
    dbService = createDbService();
  }

  return dbService;
};

module.exports = {
  getDbService,
};
