const url = "http://localhost:5000/products";

export const mockAllProducts = async () => {
  return ({
    data: [
      { nombre: "test", cantidad: 230 },
      { nombre: "dos", cantidad: 230 },
      { nombre: "tres", cantidad: 230 },
    ]
  })
}
export const getAllProductsApi = async () => {

    try {
      const response = await fetch( url );

      if ( response.ok ) {
          const data = await response.json();
          
          return data;
        } else {
            throw new Error( "Error al obtener los datos" )
        }
        
    } catch (error) {
      console.error("ERROR", error)
    }
}

export const addProductAPI = async ( data ) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( data )
    }

    try {
        const response = await fetch( url, options );
        
        if (response.ok) {
          return await response.json();
        }
      
    } catch (error) {
        console.error( "ERROR", error)
    }

}