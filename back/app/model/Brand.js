'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const brand = require('../schema/Brand');

const BrandSchema = new Schema(brand);

module.exports = mongoose.model('Brand', BrandSchema);
