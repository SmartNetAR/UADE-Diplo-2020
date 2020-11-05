import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [ message, setMessage ] = useState('');
  const [ loading, setLoading ] = useState(false);


  const urlLocal = 'http://localhost:8089'
  const urlHeroku = 'https://redis-auth.herokuapp.com'
  const url = urlHeroku;
  

  useEffect( async () => {

    async function fetchData() {
      setLoading( true );
      const token = localStorage.getItem('token');
    
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }

      const response = await fetch(`${url}/about`, options);
      const data = await response.json();
      setMessage( data.message );
      setLoading( false );

      console.log("Message de About:", message);
      
    }

    fetchData();


  }, []);


  const login = async () =>
  {
    const user = {
      email: "fernando.miguel.bustamante@gmail.com",
      password: "12345678910#"
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(user),
    }

    const response = await fetch( `${url}/auth/login`, options )

    if ( response.ok ) {
      const data = await response.json();

      localStorage.setItem('token', data.access_token );
      localStorage.setItem('user', JSON.stringify(data.user) );

      alert(`Bienvenido ${data.user.fullname}`);
      console.log(data);
    } else if ( response.status === 400 )
    {
      console.log("Error de usuario y contraseña");
    }

  }

  if ( loading ) {
    return (
      <h2>Loading ...</h2>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>{ message }</div>
        <button onClick={login} >Login</button>
      </header>
    </div>
  );
}

export default App;
