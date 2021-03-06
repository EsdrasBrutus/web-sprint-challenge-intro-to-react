// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const Character = (props) =>{
    const { characters } = props;


    return(
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {characters.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Gender: {characters.gender}
                {' '}
                Height: {characters.height}
                {' '}
                Birth Year: {characters.birth_year}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
    )
}


const Container = styled.div`

`

export default Character;
