import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../Button"
import { GrFormClose } from "react-icons/gr"
import "./Modal.css"

export const ModalCountry = ({
  onClose,
  editMode,
  country,
  handleFormSubmit,
  countryForm,
}) => {
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {
    if (editMode && countryForm) {
      setValue("name", countryForm.name)
      setValue("image_url", countryForm.image_url)
      setValue("description", countryForm.description)
    } else {
      setValue("name", "")
      setValue("image_url", "")
      setValue("description", "")
    }
  }, [editMode, countryForm, setValue])

  return (
    <section className="modal__overlay">
      <div className="modal__content">
        <h3>{editMode ? "Editar País" : "Agregar País"}</h3>
        {editMode ? (
          <img className="modal__image" src={countryForm?.image_url} alt="" />
        ) : (
          ""
        )}
        <form className="modal__form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="name">Nombre del país:</label>
          <input
            type="text"
            id="name"
            placeholder="Nombre del país"
            defaultValue={country?.name || ""}
            {...register("name")}
          />
          <label htmlFor="image_url">URL de la imagen:</label>
          <input
            type="text"
            id="image_url"
            placeholder="URL de la imagen"
            defaultValue={country?.image_url || ""}
            {...register("image_url")}
          />
          <label htmlFor="description">Descripción:</label>
          <textarea
            type="text"
            id="description"
            rows="5"
            placeholder="Descripción"
            defaultValue={country?.description || ""}
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
