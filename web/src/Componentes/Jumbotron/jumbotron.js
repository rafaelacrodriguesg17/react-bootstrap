import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Badge } from 'react-bootstrap';


export default function Jumb(){
    return(
        <>
            <Jumbotron>

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