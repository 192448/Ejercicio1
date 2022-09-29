//imports---------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';

//data types------------------------------------------------------
//roo DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

const name = "Emilio";
let login = true;
const login_options = new Map();
login_options.set(0,(<><h1><p> Login Failure </p> </h1></>));
login_options.set(1,(<><h1><p> Hola  {name} </p> </h1></>));

const _login = (login) => {
		if (login){
			root.render(login_options.get(1));
		}
		else{
			root.render(login_options.get(0));
		}
	};
_login(login);
