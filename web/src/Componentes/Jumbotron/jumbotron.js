import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Badge } from 'react-bootstrap';
import img1 from '../Cards/Imagem/img1.jpg';

// const estilo = { background: "url(" + {img1} + ")"  }
const estilo = {backgroundImage: {img1}}

export default function Jumb(){

        
    return(
        <>

            <Jumbotron style={estilo} >

                <h1>
                    Bem vindo! <Badge variant="secondary"></Badge>
                </h1>
                <h4>
                    Esse é o meu site <Badge variant="secondary"></Badge>
                 </h4>
                
            </Jumbotron>
        </>
    );
}