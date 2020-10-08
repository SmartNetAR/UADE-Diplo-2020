import React from 'react';

class ListaProductos extends React.Component
{
    conStock( listaProductos ) {
        return listaProductos.filter( (producto) => producto.cantidad > 0 )
    }
    ofertas( listaProductos ) {
        const listaFiltrada = listaProductos.filter( (producto) => producto.cantidad >= 100 );

        const listaElementos = listaFiltrada.map( producto =>
            <li key={producto.id}>{`${producto.nombre}: ${producto.cantidad}`}</li>)

        return listaElementos;
    }
    render() {
        const { listaProductos } = this.props;
        
        return ( <>
            <ul>
                { this.conStock(listaProductos).map( producto =>
                    <li key={producto.id}>{producto.nombre + ' ' + producto.cantidad}</li>
                )}
            </ul>
            <ul>
                { this.ofertas(listaProductos) }
            </ul>
        </> )
    }
}

export default ListaProductos;