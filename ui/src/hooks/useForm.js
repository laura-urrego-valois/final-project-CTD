/* eslint-disable no-unused-vars */
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL } from "../context";
import { useNavigate } from "react-router-dom";

export const useForm = (initialState, validateForm, urlParam, redirectTo) => {
	const [form, setForm] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);
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
		setErrors(validateForm(form));
		setTimeout(() => {}, 2000);

		if (Object.keys(errors).length === 0) {
			return;
		} else {
			setLoading(true);
			// Swal.fire({
			// 	title: "Cargando...",
			// 	allowEscapeKey: false,
			// 	allowOutsideClick: false,
			// 	timer: 2000,
			// 	showConfirmButton: false,
			// });
			await axios
				.post(`${BASE_URL}/${urlParam}`, form)
				.then((res) => {
					setLoading(false);
					setResponse(true);
					setForm(initialState);
					redirectTo && navigate(redirectTo);
				})
				.catch((err) => {
					alert("Error: " + err);
				});
		}
	};

	return {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};
