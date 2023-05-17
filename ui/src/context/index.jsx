import { createContext, useContext, useReducer, useEffect } from "react";
import { AppReducer, actions } from "./reducer";
import axios from "axios";

export const BASE_URL = "http://localhost:3000";

const initialState = {
	context: "testing context",
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const fetchCategories = async () => {
		await axios.get(`${BASE_URL}/categorias`).then((response) => {
			dispatch({
				type: actions.GET_CATEGORIES,
				payload: response.data,
			});
		});
	};

	const fetchTours = async () => {
		await axios.get(`${BASE_URL}/tours`).then((response) => {
			dispatch({
				type: actions.GET_TOURS,
				payload: response.data,
			});
		});
	};

	useEffect(() => {
		fetchCategories();
		fetchTours();
	}, []);

	const value = {
		state,
		dispatch,
	};
	return (
		<ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
	);
};

export const useGlobalState = () => useContext(ContextGlobal);
