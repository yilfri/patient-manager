import React, { useState } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

function App() {
	// State que muestra las citas.
	const [citas, setCitas] = useState([]);

	// Función que agrega las nuevas citas
	const crearCita = (cita) => {
		setCitas([...citas, cita]);
	};

	// Eliminar citas.
	const eliminarCita = (id) => {
		const citasActualizadas = citas.filter((cita) => cita.id !== id);
		setCitas(citasActualizadas);
	};

	// Establecer título.
	const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

	return (
		<>
			<h1>Adminisrador de Pacientes</h1>
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Formulario crearCita={crearCita} />
					</div>

					<div className="one-half column">
						<h2>{titulo}</h2>
						{citas.map((cita) => (
							<Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
