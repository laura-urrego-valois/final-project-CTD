import { useState } from "react";

const initialState = {
	id: Date.now(),
	name: "",
	description: "",
	image_url: "",
	score: 0,
	capacity: 0,
	availability: true,
	price: 0,
	id_category: 0,
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
