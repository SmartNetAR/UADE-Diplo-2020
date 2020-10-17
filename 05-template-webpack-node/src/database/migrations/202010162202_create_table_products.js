exports.up = function ( knex ) {
    return knex.schema.createTable( 'products', ( table ) =>{
        table.increments();
        table.text( 'nombre' );
        table.integer( 'cantidad' );
    } );
};

exports.down = function ( knex ) {
    return knex.schema.dropTable( 'products' ) ;
};