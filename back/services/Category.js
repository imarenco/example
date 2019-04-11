'use strict';

const httpResponse = require('../utils/http');
const contextManager = require('../utils/context');
const CategoryController = require('../app/controllers/CategoryController');
const validator = require('../utils/validator');
const errors = require('../utils/errors');
const CategorydSchema = require('../app/schema/Category');

module.exports.create = async(event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body || {});

  try {
    await validator.isValidJSONSchema(CategorydSchema, body);
  } catch (e) {
    return httpResponse.error(400, errors.BAD_REQUEST);
  }

  try {
    await contextManager.handleContext();
    const category = await CategoryController.create(body);
    return httpResponse.success(category);
  } catch (e) {
    return httpResponse.error(500, errors.UNEXPECTED);
  }
};

module.exports.update = async(event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body || {});

  try {
    await contextManager.handleContext();
    const category = await CategoryController
      .update(event.pathParameters.id, body);

    if (!category) {
      return httpResponse.error(400, errors.BAD_REQUEST);
    }
    return httpResponse.success(category);
  } catch (e) {
    return httpResponse.error(500, errors.UNEXPECTED);
  }
};


module.exports.delete = async(event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await contextManager.handleContext();
    const category = await CategoryController.delete(event.pathParameters.id);
    return httpResponse.success(category);
  } catch (e) {
    return httpResponse.error(500, errors.UNEXPECTED);
  }
};

module.exports.find = async(event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = event.queryStringParameters || {};
  const filter = {};

  if (query.name) {
    filter.name = new RegExp(query.name, 'i');
  }

  try {
    await contextManager.handleContext();
    const categories = await CategoryController.find({
      page: query.page,
      limit: query.limit,
      filter: filter,
    });

    return httpResponse.success(categories);
  } catch (e) {
    return httpResponse.error(500, errors.UNEXPECTED);
  }
};
