const path = require('path');
const slugify = require('limax');

exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');
