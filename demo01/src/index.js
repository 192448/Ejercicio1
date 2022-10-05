//imports---------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import Alumno from './components/Alumno';
import login from './components/Login';

//data types------------------------------------------------------
//root DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<login/>);
root.render(<Alumno/>);
