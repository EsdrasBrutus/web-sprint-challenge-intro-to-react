import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/`)
    .then(( { data } ) =>{ 
      console.log(data)
      setCharacters(data)
    } )
    .catch(err => console.log(err))
  }, [])

  
  return (
    <Container className="App">
      <IMG src = 'https://webstockreview.net/images/starwars-clipart-logo-4.png' />
      <h1 className="Header">Characters</h1>
      {characters.map((data, i) =>{
        return <Character key={i} characters = {data} />
      })}
    </Container>
  );
}

const IMG =styled.img`
width: 15%;
`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px yellow solid; 
`

export default App;
