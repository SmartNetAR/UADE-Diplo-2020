import React from 'react';

function FormAddProduct({alEscribir, alClickear, nombreProducto, cantidadProducto, productNameInput})
{
    return (
        <>
            <form onSubmit={alClickear} >
                <p>Producto</p>
                <input
                    type="text"
                    onChange={alEscribir}
                    name="nombre"
                    value={nombreProducto}
                    ref={productNameInput}
                />

                <p>Cantidad</p>
                <input type="number"
                    onChange={alEscribir} 
                    name="cantidad" 
                    value={cantidadProducto} 
                />

                <br></br>

                <button type="submit" className="btn btn-primary btn-width"> Agregar </button>

            </form>
        </>
    )
}

export default FormAddProduct;