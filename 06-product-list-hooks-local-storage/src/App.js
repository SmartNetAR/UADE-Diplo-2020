import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaProductos from './components/ListaProductos';
import FormAddProduct from './components/FormAddProduct';

class App extends React.Component {

    constructor(prop) {
      super(prop);
      this.productNameInput = React.createRef();

      this.testInput = React.createRef(); // null

      this.state = {
          producto: "",
          cantidad: 0,
          productos: []
      }
    }

    handleChange = ( evento ) => {
      const {name, value} = evento.target ;
                      //key:  value
      this.setState({ [name]: value });

    }

    almacenarEnLocalStorage = (listaDeProductos) => {
        console.log(listaDeProductos)

        localStorage.setItem("productos", JSON.stringify( listaDeProductos ))
    }

    agregarProducto = async ( event ) => {
        event.preventDefault()

        const productoNuevo = {
            id: this.state.productos.length + 1 ,
            nombre: this.state.producto,
            cantidad: parseInt( this.state.cantidad )
        }

        const nuevaListaProductos = [...this.state.productos, productoNuevo ]

        this.setState({
            productos: nuevaListaProductos
        })

        this.almacenarEnLocalStorage(nuevaListaProductos);

        this.setState({
            producto: "",
            cantidad: 0
        })

        this.productNameInput.current.focus();
    }

    leerJson = async () => {
        const resp = await fetch('/products.json');
        const data = await resp.json();
        

        this.setState({
            productos: data
        })
    }

    componentDidMount() {

        const productosStorage = JSON.parse( localStorage.getItem("productos") )

        if ( productosStorage ) {

            this.setState({
                productos: productosStorage
            })
            
        } else {

            this.leerJson();

        }


        // fetch('/products.json')
        //     .then( resp => {
        //         return resp.json()
        //     } )
        //     .then( data => {
        //         console.log(data)
        //     } )



        this.testInput.current.focus();
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
              productNameInput={ this.productNameInput }
            />

            <ListaProductos
                listaProductos={this.state.productos}
            />

            <input name="test" ref={this.testInput} />

          </header>
        </div>
      );

    }
}

export default App;
