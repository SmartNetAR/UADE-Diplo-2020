import knex from 'knex';

const knexConfig = require( './knextfile' ).development ;

const connection = knex( knexConfig );

export default connection;