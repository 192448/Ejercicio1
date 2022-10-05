import React from "react";

const Alumnos = ["Emilio","Jose Pablo","Carlos","Rafael"];

const Alumno = () => {
	return(
		<>
			<h3>Lista de Alumtno</h3>
			<ul>
			{Alumnos.map((nombre,i)=>{return <li key={i}>{nombre}</li>;})}
			</ul>
		</>	
	);
};
export default Alumno;
