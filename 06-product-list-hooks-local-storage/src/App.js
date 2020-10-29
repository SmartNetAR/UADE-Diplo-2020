import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaProductos from './components/ListaProductos';
import FormAddProduct from './components/FormAddProduct';

function App () {
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState({
        nombre: "",
        cantidad: 0
    });


    //   productNameInput = React.createRef();

    //   testInput = React.createRef(); // null



    const handleChange = ( evento ) => {
      const {name, value} = evento.target ;

        setProducto({
            ...producto,
            [name]: value
        })

    }

    const almacenarEnLocalStorage = (listaDeProductos) => {
        console.log(listaDeProductos)

        localStorage.setItem("productos", JSON.stringify( listaDeProductos ))
    }

    const agregarProducto = async ( event ) => {
        event.preventDefault()

        const productoNuevo = {
            id: productos.length + 1 ,
            nombre: producto.nombre,
            cantidad: parseInt( producto.cantidad )
        }

        const nuevaListaProductos = [...productos, productoNuevo ]

        setProductos(nuevaListaProductos);

        almacenarEnLocalStorage(nuevaListaProductos);

        setProducto({nombre:"", cantidad:0});

        // productNameInput.current.focus();
    }

    const leerJson = async () => {
        const resp = await fetch('/products.json');
        const data = await resp.json();
        
        setProductos(data)

    }

    useEffect(() => {
        console.log("se montó el componente")
    }, [])

    useEffect(() => {


        const productosStorage = JSON.parse( localStorage.getItem("productos") )

        if ( productosStorage ) {

            setProductos( productosStorage )
            
        } else {

            leerJson();

        }

        // testInput.current.focus();
        

    }, [])


/* 
    componentDidMount() {

        const productosStorage = JSON.parse( localStorage.getItem("productos") )

        if ( productosStorage ) {

            setState({
                productos: productosStorage
            })
            
        } else {

            leerJson();

        }

        testInput.current.focus();


    }
 */

      return (
        <div className="App">
          <header className="App-header">
            <FormAddProduct
              alEscribir={ handleChange } 
              nombreProducto={producto.nombre}
              cantidadProducto={producto.cantidad}
              alClickear={ agregarProducto }
            //   productNameInput={ productNameInput }
            />

            <ListaProductos
                listaProductos={productos}
            />

            {/* <input name="test" ref={testInput} /> */}

          </header>
        </div>
      );
}

export default App;
