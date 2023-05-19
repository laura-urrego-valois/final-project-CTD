// import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from "sweetalert2";

import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Input } from "../../components/Input";

import { useForm } from "../../hooks/useForm";
import { BASE_URL, useGlobalState } from '../../context';
import { actions } from '../../context/reducer';

import "./admin.css"


export const AdminPanel = () => {
	const { data, setData, handleChange } = useForm();
	const { dispatch } = useGlobalState();
	// const navigate = useNavigate();


	const createItem = async (tour) => {
		await axios
			.post(`${BASE_URL}/tours`, tour)
			.then((response) => {
				dispatch({
					type: actions.CREATE_TOUR,
					payload: response.data,
				});
			}).catch((err) => { console.log(err) })
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createItem(data)
		Swal.fire("Successfully Created");
		setData({});
		// navigate("/");

	};
	return <Container>
		<h1>Agregar Paquete</h1>
		<form className="admin__form" onSubmit={handleSubmit}>
			<Input label="nombre" type="text" onChange={handleChange} value={data?.nombre} required />
			<Input label="descripcion" type="textarea" onChange={handleChange} value={data?.descripcion} required />
			<Input label="imagen_url" type="text" onChange={handleChange} value={data?.imagen_url} required />
			<Input label="calificacion_promedio" type="number" onChange={handleChange} value={data?.calificacion_promedio} required />
			<Input label="capacidad" type="number" onChange={handleChange} value={data?.capacidad} required />
			<Input label="precio_persona" type="number" onChange={handleChange} value={data?.precio_persona} required />
			<Input label="id_categoria" type="text" onChange={handleChange} value={data?.id_categoria} required />
			<Input label="id_ciudad" type="text" onChange={handleChange} value={data?.id_ciudad} required />

			<Button type="primary">Agregar</Button>
		</form>
	</Container>;
};
