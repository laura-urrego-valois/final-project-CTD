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
						icon: "Error " + err,
						showConfirmButton: true,
					});
				});
		}
		return;
	};

	return {
		form,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};
