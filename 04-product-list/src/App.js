import React from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos';
import Persona from './components/Persona';

class App extends React.Component {

    constructor(prop) {
      super(prop);
      this.state = {
          showPersona: true,
          otroEstado: "Estado nuevo"
      }
    }

    persona = {
        nombre: "juan",
        apellido: "perez",
        edad: 33,
        domicilio: "Av. JBJusto"
    };
    
    productos = [ 
        { id: 1, nombre: "monitor", cantidad: 100},
        { id: 2, nombre: "teclado", cantidad: 150}, 
        { id: 3, nombre: "mouse", cantidad: 4}, 
        { id: 4, nombre: "impresora", cantidad: 0}
    ];


    handleClick = () => {
      if ( this.state.showPersona ) {
        // this.state.showPersona = false;
        this.setState({ showPersona: false })
      } else {
        this.setState({ showPersona: true })
      }

      this.setState({ otroEstado: "nuevo valor" })
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <button onClick={this.handleClick} >Toggle</button>
            <ListaProductos
                listaProductos={this.productos}
            />
            <p>{this.state.otroEstado}</p>
            <Persona persona={this.persona} isShow={this.state.showPersona}/>
          </header>
        </div>
      );

    }
}

export default App;
