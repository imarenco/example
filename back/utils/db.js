'use strict';

const config = require('../app/config');
const mongoose = require('mongoose');

const serverlessContext = {
  mongoClient: null,
};

exports.syncDB = async function() {
  if (serverlessContext.mongoClient) {
    return serverlessContext.mongoClient;
  } else {
    serverlessContext.mongoClient = await mongoose
      .connect(config.mongo.uri, config.mongo.options);
    return serverlessContext.mongoClient;
  }
};
