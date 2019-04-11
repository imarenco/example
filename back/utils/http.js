'use strict';

exports.success = function(body, type = 'str') {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: type === 'str' ? JSON.stringify(body) : body,
  };
};

exports.error = function(status = 500, message = 'Error inesperador') {
  return {
    statusCode: status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(message),
  };
};
