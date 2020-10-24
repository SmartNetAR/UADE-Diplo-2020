import React from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos';
import Persona from './components/Persona';
import { addProductAPI, getAllProductsApi, mockAllProducts } from './services/productService';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAddProduct from './components/FormAddProduct';
import Card from './components/Card';

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

    agregarProducto = async () => {

        const productoNuevo = {
           nombre: this.state.producto,
           cantidad: parseInt( this.state.cantidad )
        }

        alert( JSON.stringify( {producto: this.state.producto, cantidad: this.state.cantidad}) )

        await addProductAPI( productoNuevo );

        this.setState({
            producto: "",
            cantidad: 0
        })

        this.getApiProducts();

    }

    componentDidMount() {
        this.getApiProducts();
    }

    
    getApiProducts = async () => {
        const products = await mockAllProducts();
        // const products = await getAllProductsApi();

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
            <FormAddProduct
              alEscribir={ this.handleChange } 
              nombreProducto={this.state.producto}
              cantidadProducto={this.state.cantidad}
              alClickear={ this.agregarProducto }
            />

            <ListaProductos
                listaProductos={this.state.productos}
            />

            <Card 
              formProductName={this.state.producto}
            />

            <button onClick={this.handleClick} >Toggle</button>
            <Persona persona={this.persona} isShow={this.state.showPersona}/>
          </header>
        </div>
      );

    }
}

export default App;
