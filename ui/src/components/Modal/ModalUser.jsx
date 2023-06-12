import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../Button"
import { GrFormClose } from "react-icons/gr"
import "./Modal.css"

export const ModalUser = ({
  onClose,
  editMode,
  user,
  handleFormSubmit,
  userForm,
}) => {
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {
    if (editMode && userForm) {
      setValue("name", userForm.name)
      setValue("image_url", userForm.image_url)
      setValue("description", userForm.description)
    } else {
      setValue("name", "")
      setValue("image_url", "")
      setValue("description", "")
    }
  }, [editMode, userForm, setValue])

  return (
    <section className="modal__overlay">
      <div className="modal__content">
        <h3>{editMode ? "Editar Usuario" : "Agregar Usuario"}</h3>
        {editMode ? (
          <img className="modal__image" src={userForm?.image_url} alt="" />
        ) : (
          ""
        )}
        <form className="modal__form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="name">Nombre del usuario:</label>
          <input
            type="text"
            id="name"
            placeholder="Nombre del usuario"
            defaultValue={user?.name || ""}
            {...register("name")}
          />
          <label htmlFor="image_url">URL de la imagen:</label>
          <input
            type="text"
            id="image_url"
            placeholder="URL de la imagen"
            defaultValue={user?.image_url || ""}
            {...register("image_url")}
          />
          <label htmlFor="description">Descripción:</label>
          <textarea
            type="text"
            id="description"
            rows="5"
            placeholder="Descripción"
            defaultValue={user?.description || ""}
            {...register("description")}
          />
          <Button type="submit">{editMode ? "Guardar" : "Agregar"}</Button>
        </form>
        <span className="modal__close" onClick={onClose}>
          <GrFormClose />
        </span>
      </div>
    </section>
  )
}
