let empleados = [
    { id: 1, nombre: "leo" },
    { id: 2, nombre: "tomy" },
    { id: 3, nombre: "dany" },
];
let salarios = [
    { id: 1, importe: 2000 },
    { id: 2, importe: 3000 },
];

const getEmpleado = ( id ) => {
    return new Promise( ( resolve, reject ) => {

        if (id < 0 )
            reject("El id de empleado tiene que ser positivo")
    
        const empleadoDB = empleados.find( ( empleado ) => empleado.id === id );
    
        if (!empleadoDB)
            reject(`El empleado ${id} no existe`)
    
        resolve (empleadoDB);

    } )

}


const getSalario = ( empleado ) => {
    return new Promise( ( resolve, reject ) => {

        const salarioDB = salarios.find( salario => salario.id === empleado.id );
    
        if (!salarioDB)
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
    
        resolve( {
            nombre: empleado.nombre,
            importe: salarioDB.importe
        } );

    })
}

getEmpleado( 3 )
    .then( (empleado) => 
        getSalario( empleado )
            .then( (data) => {
                console.log( "El salario de", data.nombre, "es de", data.importe  )
            } )
    )
    .catch( (error) =>
        console.log("Error:", error) 
    )
    