'use strict';

const BrandModel = require('../model/Brand');
const BaseController = require('./BaseController');

exports.create = async function(payload) {
  return await BaseController.create(BrandModel, payload);
};

exports.update = async function(id, payload) {
  return await BaseController.update(BrandModel, id, payload);
};

exports.delete = async function(id) {
  return await BaseController.delete(BrandModel, id);
};

exports.find = async function(options) {
  return await BaseController.list(BrandModel, options);
};
