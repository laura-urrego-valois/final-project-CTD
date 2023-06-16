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
      setValue("countryName", countryForm.countryName)
    } else {
      setValue("countryName", "")
    }
  }, [editMode, countryForm, setValue])

  return (
    <section className="modal__overlay">
      <div className="modal__content">
        <h3>{editMode ? "Editar País" : "Agregar País"}</h3>
        <form className="modal__form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="countryName">Nombre del país:</label>
          <input
            type="text"
            id="countryName"
            placeholder="Nombre del país"
            defaultValue={country?.countryName || ""}
            {...register("countryName")}
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
