import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav';
import { UserContext } from '../context/UserContext';

function About() {
    // const urlLocal = 'http://localhost:8089'
    const urlHeroku = 'https://redis-auth.herokuapp.com'
    const url = urlHeroku;
    const userData = useContext(UserContext);

    const [ message, setMessage ] = useState('');
    const [ loading, setLoading ] = useState(false);
    useEffect( () => {

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
          if ( response.ok )
          {
            const data = await response.json();
            setMessage( data.message );
          } else {
            setMessage( "Debe iniciar sesión" );
          }
    
          setLoading( false );
          
        }
    
        fetchData();
    
    
      }, [url]);

    if ( loading ) {
        return (
        <h2>Loading ...</h2>
        )
    }

    return (
        <>
            <Nav />
            <h2>About</h2>
            <p>{userData?.user?.fullname}</p>
            <div>{ message }</div>
        </>
    )
    
}


export default About;