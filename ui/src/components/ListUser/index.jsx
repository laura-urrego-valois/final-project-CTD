import { useState } from "react"
import { Button } from "../Button"
import "../ListCategory/ListCategory.css"
import { useGlobalState } from "../../context"
import { Pagination } from "../Pagination"
import { actions } from "../../context/reducer"
import { useForm } from "react-hook-form"
import { usePagination } from "../../hooks/usePagination"
import { ModalUser } from "../Modal/ModalUser"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { GrAdd } from "react-icons/gr"

export const ListUser = () => {
  const { state, dispatch } = useGlobalState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const {
    currentPage,
    goToNextPage,
    goToPrevPage,
    getCurrentPageItems,
    getTotalPages,
  } = usePagination(7)

  const users = state?.users || []

  const { reset } = useForm()
  const [editMode, setEditMode] = useState(false)
  const [userForm, setUserForm] = useState({
    id_user: "",
    name: "",
    image_url: "",
    description: "",
  })

  const openModal = (user) => {
    if (user) {
      setEditMode(true)
      setUserForm(user)
    } else {
      setEditMode(false)
      setUserForm({
        id_user: "",
        name: "",
        image_url: "",
        description: "",
      })
      reset()
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedUser(null)
    setIsModalOpen(false)
  }

  const handleDeleteUser = (userId) => {
    console.log("removeUser", userId)
    dispatch({
      type: actions.REMOVE_USER,
      payload: userId,
    })

    if (selectedUser && selectedUser.id === userId) {
      closeModal()
    }
  }

  const totalPages = getTotalPages(users)
  const currentUsers = getCurrentPageItems(users)

  const handleFormSubmit = (data) => {
    const updatedUser = { ...userForm, ...data }

    if (editMode) {
      dispatch({
        type: actions.UPDATE_USER,
        payload: updatedUser,
      })
    } else {
      dispatch({
        type: actions.ADD_USER,
        payload: updatedUser,
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
      {currentUsers.map((user) => (
        <article className="list__content" key={user.id}>
          <img className="list__image" src={user.userImageURL} alt="" />
          <p className="list__title">{user.userName}</p>
          <div className="list__button">
            <Button onClick={() => openModal(user)}>
              <AiFillEdit />
            </Button>
            <Button type="primary" onClick={() => handleDeleteUser(user.id)}>
              <AiFillDelete />
            </Button>
          </div>
        </article>
      ))}
      {isModalOpen && (
        <ModalUser
          user={selectedUser}
          onClose={closeModal}
          editMode={editMode}
          handleFormSubmit={handleFormSubmit}
          userForm={userForm}
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
