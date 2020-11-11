import React, { useState } from 'react'
import {Redirect} from 'react-router-dom';
import Nav from '../components/Nav';

function Login({onLogin}) {
    // const urlLocal = 'http://localhost:8089'
    const urlHeroku = 'https://redis-auth.herokuapp.com'
    const url = urlHeroku;

    const [isLogged, setIsLogged] = useState(false);

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
      setIsLogged(true);
      onLogin(data.user);
    } else if ( response.status === 400 )
    {
      console.log("Error de usuario y contraseña");
    }

  }

    return (
        <>
            { isLogged && <Redirect to="/about" />}
            <Nav />
            <div className="App">
                <header className="App-header">
                    <button onClick={login} >Login</button>
                </header>
            </div>
        </>
    )
    
}

export default Login;