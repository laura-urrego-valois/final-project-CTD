/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useForm = (initialState, validateForm, urlParam, redirectTo) => {
	const [form, setForm] = useState(initialState);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleBlur = (e) => {
		handleChange(e);
		setErrors(validateForm(form));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const hasErrors = await validateForm(form);
		setErrors(hasErrors);
		console.log(hasErrors);

		if (
			Object.keys(hasErrors).length === 0 &&
			Object.keys(errors).length === 0
		) {
			Swal.fire({
				title: "Cargando...",
				timer: 2000,
				timerProgressBar: true,
				showConfirmButton: false,
			});

			await axios
				.post(`${BASE_URL}/${urlParam}`, form)
				.then((res) => {
					Swal.fire({
						icon: "success",
						timer: 2000,
						showConfirmButton: false,
					});
					setForm(initialState);
					redirectTo && navigate(redirectTo);
				})
				.catch((err) => {
					Swal.fire({
						icon: "error",
						text: err,
						showConfirmButton: true,
					});
				});
		}
		return;
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const hasErrors = await validateForm(form);
		setErrors(hasErrors);
		console.log(hasErrors);
		if (
			Object.keys(hasErrors).length === 0 &&
			Object.keys(errors).length === 0
		) {
			await axios
				.get(`${BASE_URL}/users`)
				.then(async (res) => {
					setForm(initialState);

					const userFound = res.data.find((user) => {
						return user.email === form.email && user.password === form.password;
					});
					if (await userFound) {
						localStorage.setItem("user", JSON.stringify(userFound));

						Swal.fire({
							icon: "success",
							text: "Ingreso exitoso!",
							timer: 2000,
							showConfirmButton: false,
						});

						navigate("/user");
					} else {
						Swal.fire({
							icon: "error",
							text: "Correo o contraseña incorrectos | Registrate",
							showConfirmButton: true,
						});
					}
				})
				.catch((err) => {
					Swal.fire({
						icon: "error",
						text: err,
						showConfirmButton: true,
					});
				});
		}
	};

	return {
		form,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
		handleLogin,
	};
};
