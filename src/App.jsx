import './App.css';
import React from 'react';

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

export default (props) => (
  <div className="App">
    <Card titulo="#03 - Componente com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#02 - Componente com Parâmetro">
      <ComParametro titulo="Esse é o título"
        subtitulo="Esse é o subtítulo"></ComParametro>
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>


  </div>
);