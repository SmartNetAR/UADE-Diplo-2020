import React from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos';
import Persona from './components/Persona';
import { getAllProductsApi } from './services/productService';

class App extends React.Component {

    constructor(prop) {
      super(prop);
      this.state = {
          showPersona: false,
          producto: "",
          cantidad: 0,
          productos: []
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

    componentDidMount() {
        this.getApiProducts();
    }

    
    getApiProducts = async () => {
        const products = await getAllProductsApi();

        if ( Array.isArray(products?.data) ) {
            this.setState({
                productos: [...products.data]
            })

        }
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
