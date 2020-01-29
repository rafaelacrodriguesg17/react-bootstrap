import React from 'react';
import Menu from './Componentes/navbar/menu';
import Jumb from './Componentes/Jumbotron/jumbotron';
import Card from './Componentes/Cards/cards';
import Caro from './Componentes/Carousel/carousel';
import Jumb2 from './Componentes/Jumbotron/jumbotrom2';

function App() {
  return (
    <>
        <Menu />

        <Jumb />
        <Jumb2 />

        <Card />

        <Caro />
    </>
  );
}

export default App;
