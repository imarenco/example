'use strict';

const httpResponse = require('../utils/http');
const contextManager = require('../utils/context');
const BrandController = require('../app/controllers/BrandController');
const validator = require('../utils/validator');
const errors = require('../utils/errors');
const BrandSchema = require('../app/schema/Brand');

module.exports.create = async(event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body || {});

  try {
    await validator.isValidJSONSchema(BrandSchema, body);
  } catch (e) {
    return httpResponse.error(400, errors.BAD_REQUEST);
  }

  try {
    await contextManager.handleContext();
    const brand = await BrandController.create(body);
    return httpResponse.success(brand);
  } catch (e) {
    return httpResponse.error(500, errors.UNEXPECTED);
  }
};

module.exports.update = async(event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body || {});

  try {
    await contextManager.handleContext();
    const brand = await BrandController.update(event.pathParameters.id, body);
    if (!brand) {
      return httpResponse.error(400, errors.BAD_REQUEST);
    }
    return httpResponse.success(brand);
  } catch (e) {
    return httpResponse.error(500, errors.UNEXPECTED);
  }
};


module.exports.delete = async(event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    await contextManager.handleContext();
    const brand = await BrandController.delete(event.pathParameters.id);
    return httpResponse.success(brand);
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
    const brands = await BrandController.find({
      page: query.page,
      limit: query.limit,
      filter: filter,
    });
    return httpResponse.success(brands);
  } catch (e) {
    return httpResponse.error(500, errors.UNEXPECTED);
  }
};

