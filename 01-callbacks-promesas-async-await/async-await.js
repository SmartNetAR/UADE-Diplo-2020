let empleados = [
    { id: 1, nombre: "leo" },
    { id: 2, nombre: "tomy" },
    { id: 3, nombre: "dany" },
];
let salarios = [
    { id: 1, importe: 2000 },
    { id: 2, importe: 3000 },
];

const getEmpleado = async ( id ) => {

        if (id < 0 )
            throw new Error("El id de empleado tiene que ser positivo")
    
        const empleadoDB = await empleados.find( ( empleado ) => empleado.id === id );
    
        if (!empleadoDB)
            throw new Error(`El empleado ${id} no existe`)
    
        return (empleadoDB);
}


const getSalario = async ( empleado ) => {

        const salarioDB = await salarios.find( salario => salario.id === empleado.id );
    
        if (!salarioDB)
            throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`)
    
        return ( {
            nombre: empleado.nombre,
            importe: salarioDB.importe
        } );

}

const getMensaje = async () => {
    try {
        const empleado = await getEmpleado( 4 );
        const data = await getSalario( empleado );
        console.log( "El salario de", data.nombre, "es de", data.importe  )
        
    } catch (error) {
        console.log(error) 
    }
}

getMensaje();