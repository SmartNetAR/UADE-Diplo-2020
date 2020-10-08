import React from 'react';

function Persona( props ){
    const { persona } = props;
    return (<>
        <h2>Hola { persona.nombre + " " + persona.apellido } </h2>
        <h3>Edad: { persona.edad } </h3>
        <h3>Persona: { persona.domicilio } </h3>
            
    </>)
}

export default Persona;