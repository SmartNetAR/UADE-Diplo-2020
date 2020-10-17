
export const getProductsList = async ( req, res ) => {
    res.json({ data: [ 
        { id: 1, nombre: "monitor", cantidad: 100},
        { id: 2, nombre: "teclado", cantidad: 150}, 
        { id: 3, nombre: "mouse", cantidad: 4}, 
        { id: 4, nombre: "impresora", cantidad: 0},
        { id: 4, nombre: "dato del back", cantidad: 1000}
    ] });
}