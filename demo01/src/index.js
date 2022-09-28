import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
const name = "Emilio";
const jsx = <><h1><p> Hola  {name} </p> </h1></>;
root.render(jsx);

