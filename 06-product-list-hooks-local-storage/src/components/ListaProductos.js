import React from 'react';

function ListaProductos ( props ) 
{
    const conStock = ( listaProductos ) => {
        return listaProductos.filter( (producto) => producto.cantidad > 0 )
    }

    const ofertas = ( listaProductos ) => {
        const listaFiltrada = listaProductos.filter( (producto) => producto.cantidad >= 100 );

        const listaElementos = listaFiltrada.map( producto =>
            <li key={producto.id}>{`${producto.nombre}: ${producto.cantidad}`}</li>)

        return listaElementos;
    }

        const { listaProductos } = props;
        
        return ( <>
            <ul>
                { conStock(listaProductos).map( producto =>
                    <li key={producto.id}>{producto.nombre + ' ' + producto.cantidad}</li>
                )}
            </ul>
            {/* <ul>
                { ofertas(listaProductos) }
            </ul> */}
        </> )

}

export default ListaProductos;