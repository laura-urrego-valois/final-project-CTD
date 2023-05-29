import { createContext, useContext, useReducer, useEffect } from "react";
import { AppReducer, actions } from "./reducer";
import axios from "axios";

export const BASE_URL = "http://localhost:3000";

const initialState = {
	context: "testing context",
	selectedCategory: null
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const fetchCategories = async () => {
		await axios.get(`${BASE_URL}/categories`).then((response) => {
			dispatch({
				type: actions.GET_CATEGORIES,
				payload: response.data,
			});
		});
	};
	const updateCategory = async (categoryId, updatedData) => {
		try {
			const response = await axios.put(
				`${BASE_URL}/categories/${categoryId}`,
				updatedData
			);
			dispatch({
				type: actions.UPDATE_CATEGORY,
				payload: response.data,
			});
		} catch (error) {
			console.error("Error updating category:", error);
		}
	};
	const addCategory = async (newCategoryData) => {
		try {
			const response = await axios.post(`${BASE_URL}/categories`, newCategoryData);
			dispatch({
				type: actions.ADD_CATEGORY,
				payload: response.data,
			});
		} catch (error) {
			console.error("Error adding category:", error);
		}
	};
	const deleteCategory = async (categoryId) => {
		try {
			await axios.delete(`${BASE_URL}/categories/${categoryId}`);
			dispatch({
				type: actions.REMOVE_CATEGORY,
				payload: categoryId,
			});
		} catch (error) {
			console.error("Error deleting category:", error);
		}
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
		setSelectedCategory: (category) =>
			dispatch({
				type: actions.SET_SELECTED_CATEGORY,
				payload: category
			}),
		updateCategory,
		addCategory,
		deleteCategory
	};
	return (
		<ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
	);
};

export const useGlobalState = () => useContext(ContextGlobal);
