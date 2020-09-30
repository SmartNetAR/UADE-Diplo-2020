let empleados = [
    { id: 1, nombre: "leo" },
    { id: 2, nombre: "tomy" },
    { id: 3, nombre: "dany" },
];
let salarios = [
    { id: 1, importe: 2000 },
    { id: 2, importe: 3000 },
];

const getEmpleado = ( id, callback ) => {
    if (id < 0 )
        return callback("El id de empleado tiene que ser positivo")

    const empleadoDB = empleados.find( ( empleado ) => empleado.id === id );

    if (!empleadoDB)
        return callback(`El empleado ${id} no existe`)

    return callback(null, empleadoDB);

}

const getSalario = ( empleado, callback ) => {
    const salarioDB = salarios.find( salario => salario.id === empleado.id );

    if (!salarioDB)
        return callback(`No se encontró un salario para el empleado ${empleado.nombre}`)

    callback( null, {
        nombre: empleado.nombre,
        importe: salarioDB.importe
    } );
}

getEmpleado( 5, (error, empleado) => {
    if (error)
       return console.log("Error:", error);
    
        getSalario( empleado, (error, respuesta ) =>{
            if (error)
                return console.log("Error:", error)

                console.log( "El salario de", respuesta.nombre, "es de", respuesta.importe  )
            }
        )
    
    }
);

