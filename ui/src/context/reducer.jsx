export const actions = {
	GET_CATEGORIES: "GET_CATEGORIES",
	GET_TOURS: "GET_TOURS",
	GET_BY_ID: "GET_BY_ID",
	GET_BY_DATACATEGORY: "GET_BY_DATACATEGORY",
	SET_SELECTED_CATEGORY: "SET_SELECTED_CATEGORY",
	REMOVE_ITEM: "REMOVE_ITEM",
	MODIFY_ITEM: "MODIFY_ITEM",
};

export const AppReducer = (state, action) => {
	switch (action.type) {
		case actions.GET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};

		case actions.GET_TOURS:
			return {
				...state,
				tours: action.payload,
			};

		case actions.GET_BY_ID:
			return {
				...state,
				detail: action.payload,
			};

		case actions.SET_SELECTED_CATEGORY:
			return {
				...state,
				selectedCategory: action.payload,
			};

		case actions.MODIFY_ITEM:
			return {
				...state,
			};

		default:
			return { ...state };
	}
};
