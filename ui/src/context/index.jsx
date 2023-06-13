import { createContext, useContext, useReducer, useEffect } from "react";
import { AppReducer, actions } from "./reducer";
import axios from "axios";

export const BASE_URL = "http://localhost:8000";

const initialState = {
	context: "testing context",
	selectedCategory: null
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	console.log("state=>", state)

	const fetchCategories = async () => {
		await axios.get(`${BASE_URL}/category`).then((response) => {
			dispatch({
				type: actions.GET_CATEGORIES,
				payload: response.data,
			});
		});
	};
	const updateCategory = async (categoryId, updatedData) => {
		try {
			const response = await axios.put(
				`${BASE_URL}/category/${categoryId}`,
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
		console.log("remove =>", categoryId)
		try {
			const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODY2MTEzODYsImV4cCI6MTY4NjYxNDA4Nn0.op7T_S3jgjXfakifEWkF6f7B8lguBp23-gln7ENPwSY';

			const config = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			};

			await axios.delete(`${BASE_URL}/category/${categoryId}`, config);
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

	const updateTour = async (tourId, updatedData) => {
		try {
			const response = await axios.put(
				`${BASE_URL}/tours/${tourId}`,
				updatedData
			);
			dispatch({
				type: actions.UPDATE_TOUR,
				payload: response.data,
			});
		} catch (error) {
			console.error("Error updating tour:", error);
		}
	};
	const addTour = async (newTourData) => {
		try {
			const response = await axios.post(`${BASE_URL}/tours`, newTourData);
			dispatch({
				type: actions.CREATE_TOUR,
				payload: response.data,
			});
		} catch (error) {
			console.error("Error adding tour:", error);
		}
	};
	const deleteTour = async (tourId) => {
		try {
			await axios.delete(`${BASE_URL}/tours/${tourId}`);
			dispatch({
				type: actions.REMOVE_TOUR,
				payload: tourId,
			});
		} catch (error) {
			console.error("Error deleting tour:", error);
		}
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
		deleteCategory,
		updateTour,
		addTour,
		deleteTour
	};
	return (
		<ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
	);
};

export const useGlobalState = () => useContext(ContextGlobal);
