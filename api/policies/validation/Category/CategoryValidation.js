"use strict";
var form = require('express-form'),
  field = form.field,
  validate = form.validate,
  filter = form.filter;

module.exports = form(
  field('categoryName'),
  validate('categoryName')
    .required("", "CATEGORY_NAME_REQUIRED")
);
