// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';




const Character = (props) =>{
    const { characters } = props;


    return(
    <Card>
        <Header className="header">
            <h1>{characters.name}</h1>
        </Header>
            <div className="container">
            <Text>Gender: {characters.gender}</Text>
            <Text>Height: {characters.height}</Text>
            <Text>Birth Year: {characters.birth_year}</Text>
        </div>
    </Card>
    )
}


const Card = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    margin-bottom: 1em;
    border: 1px yellow solid; 
    box-shadow: 2px 2px #ffffad;
`

const Header = styled.div`
    height: 30%;
    color: yellow;
    text-shadow: 3px 1px 5px;
    text-align: center;
`

const Text = styled.p`
    color: yellow;
`

export default Character;
