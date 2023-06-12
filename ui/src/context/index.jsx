import {
	createContext,
	useContext,
	useReducer,
	useState,
	useEffect,
} from "react";
import { AppReducer, actions } from "./reducer";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const initialState = {
	context: "testing context",
	selectedCategory: null,
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const token = JSON.parse(localStorage.getItem("token")) || null;

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
			const response = await axios.post(
				`${BASE_URL}/categories`,
				newCategoryData
			);
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

	useEffect(() => {
		if (token) {
			const decoded = jwt_decode(token);
			setUser(decoded);
			setIsAuthenticated(true);
		}
	}, [token]);

	const value = {
		state,
		dispatch,
		// CATEGORY
		setSelectedCategory: (category) =>
			dispatch({
				type: actions.SET_SELECTED_CATEGORY,
				payload: category,
			}),
		updateCategory,
		addCategory,
		deleteCategory,
		// TOURS
		updateTour,
		addTour,
		deleteTour,
		// AUTHENTICATION
		user,
		setUser,
		isAuthenticated,
		setIsAuthenticated,
		token,
	};
	return (
		<ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
	);
};

export const useGlobalState = () => useContext(ContextGlobal);
