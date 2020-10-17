export const getAllProductsApi = async () => {
    try {
      const response = await fetch( "http://localhost:5000/products" );

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