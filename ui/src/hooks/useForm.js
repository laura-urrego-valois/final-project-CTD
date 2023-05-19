import { useState } from "react";

const initialState = {
	id: 0,
	nombre: "",
	descripcion: "",
	imagen_url: "",
	calificacion_promedio: 0,
	capacidad: 0,
	disponibilidad: true,
	precio_persona: 0,
	id_categoria: 0,
	id_ciudad: 0,
};

export const useForm = () => {
	const [data, setData] = useState(initialState);

	const handleChange = ({ target }) => {
		setData({
			...data,
			[target.name]: target.value,
		});
	};

	const handleChangeSelect = (selectedOption) => {
		setData({
			...data,
			[selectedOption.name]: selectedOption.value,
		});
	};

	return { data, setData, handleChange, handleChangeSelect };
};
