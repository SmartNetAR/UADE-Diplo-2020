import knex from '../../database/knex';

export const getProductsList = async ( req, res ) => {

    const products = await knex( 'products' );

    res.json({ data: products });
}

export const getProductById = async ( req, res ) => {

    const { id } = req.params;

    const product = await knex( 'products' )
        .where( 'id', id ).first();

    if ( !product ) {
        return res.status(404).json({ message: "not found" })
    }

    res.json({ data: product })

}

export const addProduct = async ( req, res ) => {

    const payload = req.body;

    const customer = await knex( 'products' )
        .returning('id')
        .insert( {
        nombre: payload.nombre,
        cantidad: payload.cantidad
    } ) ;

    res.status(201).json({ data: customer[0] })

}

