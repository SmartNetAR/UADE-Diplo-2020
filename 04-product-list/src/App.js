import React from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos';
import Persona from './components/Persona';

class App extends React.Component {

    constructor(prop) {
      super(prop);
      this.state = {
          showPersona: false,
          producto: "",
          cantidad: 0,
          productos: [ 
            { id: 1, nombre: "monitor", cantidad: 100},
            { id: 2, nombre: "teclado", cantidad: 150}, 
            { id: 3, nombre: "mouse", cantidad: 4}, 
            { id: 4, nombre: "impresora", cantidad: 0}
        ]
      }
    }

    persona = {
        nombre: "juan",
        apellido: "perez",
        edad: 33,
        domicilio: "Av. JBJusto"
    };

    handleClick = () => {

      // let manzana = "manzana";
      // let pera = manzana;
      // manzana = "pera";

      // console.log("1", manzana);
      // console.log("2", pera);

      // const frutas = ["pera", "naranja"];

      // const newFrutas =  [...frutas, "sandía", ...frutas];
      // console.log("1- newFrutas", newFrutas);

      // frutas.push("manzana");

      // console.log("2- frutas", frutas);
      // console.log("3- newFrutas", newFrutas);

      



      // if ( this.state.showPersona ) {
      //   // this.state.showPersona = false;
      //   this.setState({ showPersona: false })
      // } else {
      //   this.setState({ showPersona: true })
      // }

      // this.setState({ otroEstado: "nuevo valor" })
    }

    handleChange = ( evento ) => {
      const {name, value} = evento.target ;
                      //key:  value
      this.setState({ [name]: value });

    }

    agregarProducto = () => {

        const productoNuevo = {
           id: this.state.productos.length + 1 ,
           nombre: this.state.producto,
           cantidad: parseInt( this.state.cantidad )
        }

        this.setState({
          productos: [...this.state.productos, productoNuevo ]
        })

    }

    render() {
      return (
        <div className="App">
          <header className="App-header">

            <p>Producto</p>
            <input
                type="text"
                onChange={this.handleChange}
                name="producto"
                value={this.state.producto}
            />

            <p>Cantidad</p>
            <input type="number"
                onChange={this.handleChange} 
                name="cantidad" 
                value={this.state.cantidad} 
            />

            <br></br>

            <button onClick={this.agregarProducto}> Agregar </button>
            
            <ListaProductos
                listaProductos={this.state.productos}
            />
            <button onClick={this.handleClick} >Toggle</button>
            <Persona persona={this.persona} isShow={this.state.showPersona}/>
          </header>
        </div>
      );

    }
}

export default App;
