import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck, } from 'react-bootstrap';
import img1 from './Imagem/img1.jpg';


export default function Cards(){
    return(
        <>
            <CardDeck>
  <Card>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
      <Card.Title>Site 01</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Site 02</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Site 03</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
</CardDeck>
        </>


    );
}