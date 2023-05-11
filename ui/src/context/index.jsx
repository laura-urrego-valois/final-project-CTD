import { createContext, useContext, useReducer } from "react";
import { AppReducer } from "./reducer";

const initialState = {
	context: "testing context",
};

export const ContextGlobal = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const value = {
		state,
		dispatch,
	};
	return (
		<ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
	);
};

export const useGlobalState = () => useContext(ContextGlobal);
