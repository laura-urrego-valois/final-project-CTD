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
	UPDATE_CATEGORY: "UPDATE_CATEGORY",
	ADD_CATEGORY: "ADD_CATEGORY"
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

		case actions.ADD_CATEGORY: {
			const newCategory = {
				...action.payload,
				id_category: state.categories.length + 1,
			};

			return {
				...state,
				categories: [...state.categories, newCategory],
			};
		}

		case actions.REMOVE_CATEGORY: {
			const updatedCategories = state.categories.filter(
				(category) => category.id_category !== action.payload
			);

			return {
				...state,
				categories: updatedCategories,
			};
		}

		case actions.UPDATE_CATEGORY: {
			const updatedCategories = state.categories.map((category) => {
				if (category.id_category === action.payload.id_category) {
					return action.payload;
				}
				return category;
			});

			return {
				...state,
				categories: updatedCategories,
			};
		}

		default:
			return { ...state };
	}
};
