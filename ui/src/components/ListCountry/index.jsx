import { useState } from "react"
import { Button } from "../Button"
import "../ListCategory/ListCategory.css"
import { useGlobalState } from "../../context"
import { Pagination } from "../Pagination"
import { actions } from "../../context/reducer"
import { useForm } from "react-hook-form"
import { usePagination } from "../../hooks/usePagination"
import { ModalCountry } from "../Modal/ModalCountry"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { GrAdd } from "react-icons/gr"

export const ListCountry = () => {
  const { state, dispatch } = useGlobalState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)

  const {
    currentPage,
    goToNextPage,
    goToPrevPage,
    getCurrentPageItems,
    getTotalPages,
  } = usePagination(7)

  const countries = state?.countries || []

  const { reset } = useForm()
  const [editMode, setEditMode] = useState(false)
  const [countryForm, setCountryForm] = useState({
    id_country: "",
    name: "",
    image_url: "",
    description: "",
  })

  const openModal = (categorie) => {
    if (categorie) {
      setEditMode(true)
      setCountryForm(categorie)
    } else {
      setEditMode(false)
      setCountryForm({
        id_country: "",
        name: "",
        image_url: "",
        description: "",
      })
      reset()
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedCountry(null)
    setIsModalOpen(false)
  }

  const handleDeleteCountry = (countryId) => {
    console.log("removeCountry", countryId)
    dispatch({
      type: actions.REMOVE_CATEGORY,
      payload: countryId,
    })

    if (selectedCountry && selectedCountry.id === countryId) {
      closeModal()
    }
  }

  const totalPages = getTotalPages(countries)
  const currentCountries = getCurrentPageItems(countries)

  const handleFormSubmit = (data) => {
    const updatedCountry = { ...countryForm, ...data }

    if (editMode) {
      dispatch({
        type: actions.UPDATE_COUNTRY,
        payload: updatedCountry,
      })
    } else {
      dispatch({
        type: actions.ADD_COUNTRY,
        payload: updatedCountry,
      })
    }

    closeModal()
    reset()
  }

  return (
    <section className="list__container">
      <Button onClick={() => openModal(null)}>
        <GrAdd />
      </Button>
      {currentCountries.map((country) => (
        <article className="list__content" key={country.id}>
          <img className="list__image" src={country.countryImageURL} alt="" />
          <p className="list__title">{country.countryName}</p>
          <div className="list__button">
            <Button onClick={() => openModal(country)}>
              <AiFillEdit />
            </Button>
            <Button
              type="primary"
              onClick={() => handleDeleteCountry(country.id)}
            >
              <AiFillDelete />
            </Button>
          </div>
        </article>
      ))}
      {isModalOpen && (
        <ModalCountry
          country={selectedCountry}
          onClose={closeModal}
          editMode={editMode}
          handleFormSubmit={handleFormSubmit}
          countryForm={countryForm}
        />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={goToNextPage}
        onPrevPage={goToPrevPage}
      />
    </section>
  )
}
