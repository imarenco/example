'use strict';

const db = require('./db');

exports.handleContext = async function() {
  const context = {
    dbClient: null,
  };

  context.dbClient = await db.syncDB();

  return context;
};
