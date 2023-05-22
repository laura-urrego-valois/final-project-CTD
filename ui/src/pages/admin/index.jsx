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
		Swal.fire("Creado con éxito");
		setData({});
		// navigate("/");

	};
	return <Container>
		<h1 className='form_title'>Agregar Paquete</h1>
		<form className="admin__form" onSubmit={handleSubmit}>
			<Input label="name" type="text" onChange={handleChange} value={data?.name} required />
			<Input label="description" type="textarea" onChange={handleChange} value={data?.description} required />
			<Input label="image_url" type="text" onChange={handleChange} value={data?.image_url} required />
			<Input label="score" type="number" onChange={handleChange} value={data?.score} required />
			{/* 	<Input label="capacity" type="number" onChange={handleChange} value={data?.capacity} required /> */}
			<Input label="price" type="number" onChange={handleChange} value={data?.price} required />
			<Input label="id_category" type="number" onChange={handleChange} value={parseInt(data?.id_category)} required />
			{/* <Input label="id_ciudad" type="text" onChange={handleChange} value={data?.id_ciudad} required /> */}

			<Button type="primary">Agregar</Button>
		</form>
	</Container>;
};
