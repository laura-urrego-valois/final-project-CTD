export const actions = {
	GET_ITEMS: "GET_ITEMS",
	ADD_ITEM: "ADD_ITEM",
	REMOVE_ITEM: "REMOVE_ITEM",
	MODIFY_ITEM: "MODIFY_ITEM",
};

export const AppReducer = (state, action) => {
	switch (action.type) {
		case actions.GET_ITEMS:
			return {
				...state,
			};

		case actions.ADD_ITEM:
			return {
				...state,
			};

		case actions.REMOVE_ITEM:
			return {
				...state,
			};

		case actions.MODIFY_ITEM:
			return {
				...state,
			};

		default:
			return { ...state };
	}
};
