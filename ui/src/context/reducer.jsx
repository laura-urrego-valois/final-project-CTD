export const actions = {
	GET_CATEGORIES: "GET_CATEGORIES",
	REMOVE_CATEGORY: "REMOVE_CATEGORY",
	GET_TOURS: "GET_TOURS",
	GET_BY_ID: "GET_BY_ID",
	GET_BY_DATACATEGORY: "GET_BY_DATACATEGORY",
	SET_SELECTED_CATEGORY: "SET_SELECTED_CATEGORY",
	CREATE_TOUR: "CREATE_TOUR",
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

		case actions.REMOVE_ITEM:
			return {
				...state,
				tours: state.tours.filter(
					(tour) => tour.id_tour !== action.payload
				),
			};
		case actions.REMOVE_CATEGORY:
			return {
				...state,
				categories: state.categories.filter(
					(category) => category.id !== action.payload
				)
			};

		default:
			return { ...state };
	}
};
