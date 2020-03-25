const knex = require('knex');
const consfiguration = require('../../knexfile');

const connection = knex(consfiguration.development);

module.exports = connection;