import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react"
import { AppReducer, actions } from "./reducer"
import axios from "axios"
import jwt_decode from "jwt-decode"

export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000"

const initialState = {
  context: "testing context",
  selectedCategory: null,
}

export const ContextGlobal = createContext()

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const token = null || JSON.parse(localStorage.getItem("token"))

  const fetchCategories = async () => {
    await axios.get(`${BASE_URL}/category`).then((response) => {
      dispatch({
        type: actions.GET_CATEGORIES,
        payload: response.data,
      })
    })
  }
  const updateCategory = async (categoryId, updatedData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.put(
        `${BASE_URL}/category/${categoryId}`,
        updatedData,
        config
      )
      dispatch({
        type: actions.UPDATE_CATEGORY,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error updating category:", error)
    }
  }
  const addCategory = async (newCategoryData) => {
    console.log("dataCategory", newCategoryData)
    try {
      const formData = new FormData()
      formData.append("file", newCategoryData.categoryImageFile[0])
      formData.append("Category", JSON.stringify(newCategoryData))
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.post(
        `${BASE_URL}/category/load_image`,
        formData,
        config
      )
      dispatch({
        type: actions.ADD_CATEGORY,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error adding category:", error)
    }
  }
  const deleteCategory = async (categoryId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      await axios.delete(`${BASE_URL}/category/${categoryId}`, config)
      dispatch({
        type: actions.REMOVE_CATEGORY,
        payload: categoryId,
      })
    } catch (error) {
      console.error("Error deleting category:", error)
    }
  }

  const fetchTours = async () => {
    await axios.get(`${BASE_URL}/tours`).then((response) => {
      dispatch({
        type: actions.GET_TOURS,
        payload: response.data,
      })
    })
  }

  const updateTour = async (tourId, updatedData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.put(
        `${BASE_URL}/tours/${tourId}`,
        updatedData,
        config
      )
      dispatch({
        type: actions.UPDATE_TOUR,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error updating tour:", error)
    }
  }

  const addTour = async (newTourData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.post(
        `${BASE_URL}/tours`,
        newTourData,
        config
      )
      dispatch({
        type: actions.CREATE_TOUR,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error adding tour:", error)
    }
  }

  const deleteTour = async (tourId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      await axios.delete(`${BASE_URL}/tours/${tourId}`, config)
      dispatch({
        type: actions.REMOVE_TOUR,
        payload: tourId,
      })
    } catch (error) {
      console.error("Error deleting tour:", error)
    }
  }

  const fetchUsers = async () => {
    return await axios
      .get(`${BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch({
          type: actions.GET_USERS,
          payload: response.data,
        })
      })
  }
  const fetchUserByEmail = async (email) => {
    return await axios.get(`${BASE_URL}/users/name/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  const makeAdminRole = async (userName) => {
    return await axios.post(
      `${BASE_URL}/users/admin`,
      { userName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  }
  const makeUserRole = async (userName) => {
    return await axios.post(
      `${BASE_URL}/users/user`,
      { userName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  }
  const fetchCountry = async () => {
    await axios.get(`${BASE_URL}/countries`).then((response) => {
      dispatch({
        type: actions.GET_COUNTRIES,
        payload: response.data,
      })
    })
  }

  const createCountry = async (newCountryData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.post(
        `${BASE_URL}/countries`,
        newCountryData,
        config
      )
      dispatch({
        type: actions.ADD_COUNTRY,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error adding country:", error)
    }
  }
  const updateCountry = async (countryId, updatedData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.put(
        `${BASE_URL}/countries/${countryId}`,
        updatedData,
        config
      )
      dispatch({
        type: actions.UPDATE_COUNTRY,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error updating country:", error)
    }
  }
  const deleteCountry = async (countryId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      await axios.delete(`${BASE_URL}/tours/${countryId}`, config)
      dispatch({
        type: actions.REMOVE_COUNTRY,
        payload: countryId,
      })
    } catch (error) {
      console.error("Error deleting country:", error)
    }
  }

  useEffect(() => {
    fetchCategories()
    fetchTours()
    fetchCountry()
  }, [])

  useEffect(() => {
    const decodeResponse = async () => {
      setIsAuthenticated(true)
      const decoded = await jwt_decode(token)
      const userInfo = await fetchUserByEmail(decoded.sub)
      setUser(userInfo.data)
    }

    decodeResponse()
  }, [token])

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
    // USERS
    fetchUsers,
    fetchUserByEmail,
    makeAdminRole,
    makeUserRole,
    // COUNTRY
    fetchCountry,
    createCountry,
    updateCountry,
    deleteCountry,
  }
  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  )
}

export const useGlobalState = () => useContext(ContextGlobal)
