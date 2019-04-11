'use strict';

module.exports = {
  port: process.env.PORT || 3000,
  mongo: {
    options: { useNewUrlParser: true },
    uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dev',
  },
};
