'use strict';

module.exports = {
  value: { type: String, required: true },
  label: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
};
