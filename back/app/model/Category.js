'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const category = require('../schema/Category');

const CategorySchema = new Schema(category);

module.exports = mongoose.model('Category', CategorySchema);
