'use strict';

const CategoryModel = require('../model/Category');
const BaseController = require('./BaseController');

exports.create = async function(payload) {
  return await BaseController.create(CategoryModel, payload);
};

exports.update = async function(id, payload) {
  return await BaseController.update(CategoryModel, id, payload);
};

exports.delete = async function(id) {
  return await BaseController.delete(CategoryModel, id);
};

exports.find = async function(options) {
  return await BaseController.list(CategoryModel, options);
};
