export const actions = {
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_TOURS: "GET_TOURS",
  GET_BY_ID: "GET_BY_ID",
  GET_BY_DATACATEGORY: "GET_BY_DATACATEGORY",
  SET_SELECTED_CATEGORY: "SET_SELECTED_CATEGORY",
  // TOUR ACTIONS
  CREATE_TOUR: "CREATE_TOUR",
  UPDATE_TOUR: "UPDATE_TOUR",
  REMOVE_TOUR: "REMOVE_TOUR",
  // CATEGORY ACTIONS
  ADD_CATEGORY: "ADD_CATEGORY",
  UPDATE_CATEGORY: "UPDATE_CATEGORY",
  REMOVE_CATEGORY: "REMOVE_CATEGORY",
  // COUNTRY ACTIONS
  ADD_COUNTRY: "ADD_COUNTRY",
  UPDATE_COUNTRY: "UPDATE_COUNTRY",
  REMOVE_COUNTRY: "REMOVE_COUNTRY",
  // USER ACTIONS
  GET_USERS: "GET_USERS",
  ADD_USER: "ADD_USER",
  UPDATE_USER: "UPDATE_USER",
  REMOVE_USER: "REMOVE_USER",
}

export const AppReducer = (state, action) => {
  switch (action.type) {
    case actions.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }

    case actions.GET_TOURS:
      return {
        ...state,
        tours: action.payload,
      }

    case actions.GET_BY_ID:
      return {
        ...state,
        detail: action.payload,
      }

    case actions.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      }

    case actions.REMOVE_TOUR:
      return {
        ...state,
        tours: state.tours.filter((tour) => tour.id !== action.payload),
      }

    case actions.ADD_CATEGORY: {
      const newCategory = {
        ...action.payload,
        id_category: state.categories.length + 1,
      }

      return {
        ...state,
        categories: [...state.categories, newCategory],
      }
    }

    case actions.REMOVE_CATEGORY: {
      const updatedCategories = state.categories.filter(
        (category) => category.id !== action.payload
      )

      return {
        ...state,
        categories: updatedCategories,
      }
    }

    case actions.UPDATE_CATEGORY: {
      const updatedCategories = state.categories.map((category) => {
        if (category.id_category === action.payload.id_category) {
          return action.payload
        }
        return category
      })

      return {
        ...state,
        categories: updatedCategories,
      }
    }
    case actions.UPDATE_TOUR: {
      const updatedTours = state.tours.map((tour) => {
        if (tour.id_tour === action.payload.id_tour) {
          return action.payload
        }
        return tour
      })

      return {
        ...state,
        tours: updatedTours,
      }
    }

    case actions.ADD_COUNTRY: {
      const newCountry = {
        ...action.payload,
        id_country: state.countries.length + 1,
      }

      return {
        ...state,
        countries: [...state.countries, newCountry],
      }
    }

    case actions.REMOVE_COUNTRY: {
      const updatedCountries = state.categories.filter(
        (country) => country.id_country !== action.payload
      )

      return {
        ...state,
        countries: updatedCountries,
      }
    }

    case actions.UPDATE_COUNTRY: {
      const updatedCountries = state.countries.map((country) => {
        if (country.id_country === action.payload.id_country) {
          return action.payload
        }
        return country
      })

      return {
        ...state,
        countries: updatedCountries,
      }
    }

    case actions.ADD_USER: {
      const newUser = {
        ...action.payload,
        id_user: state.users.length + 1,
      }

      return {
        ...state,
        users: [...state.countries, newUser],
      }
    }
    case actions.GET_USERS:
      return {
        ...state,
        users: action.payload,
      }

    case actions.REMOVE_USER: {
      const updatedUsers = state.users.filter(
        (user) => user.id_user !== action.payload
      )

      return {
        ...state,
        users: updatedUsers,
      }
    }

    case actions.UPDATE_USER: {
      const updatedUser = state.countries.map((user) => {
        if (user.id_user === action.payload.id_user) {
          return action.payload
        }
        return user
      })

      return {
        ...state,
        users: updatedUser,
      }
    }

    default:
      return { ...state }
  }
}
