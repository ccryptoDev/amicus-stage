"use strict";
var form = require('express-form'),
  field = form.field,
  validate = form.validate,
  filter = form.filter;

module.exports = form(
  field('limitRequest')
    .required("", "CREDIT_LIMIT _REQUIRED")
);
