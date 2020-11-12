import React, { useState } from 'react'
import {Redirect} from 'react-router-dom';
import Nav from '../components/Nav';

function Login({onLogin}) {
    // const urlLocal = 'http://localhost:8089'
    const [formData, setFormData] = useState({
      email: "fernando.miguel.bustamante@gmail.com", password: "12345678910#"
    });
    const urlHeroku = 'https://redis-auth.herokuapp.com'
    const url = urlHeroku;

    const [isLogged, setIsLogged] = useState(false);

  const login = async () =>
  {
    const options = {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(formData),
    }

    const response = await fetch( `${url}/auth/login`, options )

    if ( response.ok ) {
      const data = await response.json();

      localStorage.setItem('token', data.access_token );
      localStorage.setItem('user', JSON.stringify(data.user) );

      onLogin(data.user);
      setIsLogged(true);
    } else if ( response.status === 400 )
    {
      alert("Error de usuario y contraseña");
    }

  }

    return (
        <>
            { isLogged && <Redirect to="/about" />}
            <Nav />
            <div className="App">
                <header className="App-header">
                    <input placeholder="email" type="email" onChange={(e)=> setFormData({...formData, email: e.target.value})} value={formData.email}/>
                    <br/>
                    <input placeholder="password" type="password" onChange={(e)=> setFormData({...formData, password: e.target.value})} value={formData.password} />
                    <button onClick={login} >Login</button>
                </header>
            </div>
        </>
    )
    
}

export default Login;