import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Buscadores from './components/Buscadores';
import Encabezado from './components/Encabezado';
import Calculadora from './components/Calculadora';


ReactDOM.render(
  <React.StrictMode>
  <Encabezado/>
    <App />
    <Buscadores />
    <Calculadora/>
    </React.StrictMode>,
  document.getElementById('root')
);

