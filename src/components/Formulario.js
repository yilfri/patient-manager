import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // npm i uuid - Libreria externa para asignar ID
import PropTypes from 'prop-types';

const datosCita = {
	mascota: '',
	propietario: '',
	fecha: '',
	hora: '',
	sintomas: ''
};

const Formulario = ({ crearCita }) => {
	// Crear State del formulario.
	const [cita, setCita] = useState(datosCita);

	// Crear State de validación para los campos.
	const [error, setError] = useState(false);

	// Crear manejador de eventos onChange.
	const handleChange = (e) => {
		setCita({
			...cita,
			[e.target.name]: e.target.value
		});
	};

	// Crear manejador de eventos onSubmit.

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validar que todos los campos estén completados.
		if (
			mascota.trim() === '' ||
			propietario.trim() === '' ||
			fecha.trim() === '' ||
			hora.trim() === '' ||
			sintomas.trim() === ''
		) {
			setError(true);
			return;
		}

		// Eliminar mensaje previo.
		setError(false);

		// Asignar ID a cada Cita.
		cita.id = uuidv4();

		// Crear la cita
		crearCita(cita);
	};

	// Destructurar los valores del objeto Cita.
	const { mascota, propietario, fecha, hora, sintomas } = cita;

	return (
		<>
			<h2>Desde formulario</h2>

			<form onSubmit={handleSubmit}>
				<label>Nombre Mascota</label>
				<input
					type="text"
					name="mascota"
					placeholder="Nombre Mascota"
					className="u-full-width"
					onChange={handleChange}
					value={mascota}
				/>

				<label>Nombre Dueño</label>
				<input
					type="text"
					name="propietario"
					placeholder="Nombre del dueño"
					className="u-full-width"
					onChange={handleChange}
					value={propietario}
				/>

				<label>Fecha</label>
				<input
					type="date"
					name="fecha"
					className="u-full-width"
					onChange={handleChange}
					value={fecha}
				/>

				<label>Hora</label>
				<input
					type="time"
					name="hora"
					className="u-full-width"
					onChange={handleChange}
					value={hora}
				/>

				<label>Síntomas</label>
				<textarea
					placeholder="Síntomas de la mascota"
					className="u-full-width"
					name="sintomas"
					onChange={handleChange}
					value={sintomas}
				></textarea>

				<button type="submit" className="u-full-width button-primary" onChange={handleChange}>
					Agregar Cita
				</button>
			</form>
			{error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
		</>
	);
};

Formulario.propTypes = {
	crearCita: PropTypes.func.isRequired
};

export default Formulario;
