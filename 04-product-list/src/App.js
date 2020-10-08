import React from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos';
// import Persona from './components/Persona';

function App() {
    /* const persona = {
        nombre: "juan",
        apellido: "perez",
        edad: 33,
        domicilio: "Av. JBJusto"
    }; */
    
    const productos = [ 
        { id: 1, nombre: "monitor", cantidad: 100},
        { id: 2, nombre: "teclado", cantidad: 150}, 
        { id: 3, nombre: "mouse", cantidad: 4}, 
        { id: 4, nombre: "impresora", cantidad: 0}
    ]

  return (
    <div className="App">
      <header className="App-header">
        <ListaProductos
            listaProductos={productos}
        />
        {/* <Persona persona={persona} /> */}
      </header>
    </div>
  );
}

export default App;
