import React from 'react';

const name = "Emilio";
const login_options = new Map();
login_options.set(0,(<><h1><p> Login Failure </p> </h1></>));
login_options.set(1,(<><h1><p> Hola  {name} </p> </h1></>));

const login = ({login}) => {
		return (<><h1><p> Hola  {name} </p> </h1></>);	
	};
export default login;
