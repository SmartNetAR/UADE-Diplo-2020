import React from 'react';

function FormAddProduct({alEscribir, alClickear, nombreProducto, cantidadProducto})
{
    return (
        <>
            <p>Producto</p>
            <input
                type="text"
                onChange={alEscribir}
                name="producto"
                value={nombreProducto}
            />

            <p>Cantidad</p>
            <input type="number"
                onChange={alEscribir} 
                name="cantidad" 
                value={cantidadProducto} 
            />

            <br></br>

            <button className="btn btn-primary btn-width" onClick={alClickear}> Agregar </button>
        </>
    )
}

export default FormAddProduct;