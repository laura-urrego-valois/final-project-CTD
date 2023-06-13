import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useGlobalState } from "../../context";
import { GrFormClose } from "react-icons/gr";
import "./Modal.css";

export const ModalProduct = ({
  onClose,
  editMode,
  tour,
  handleFormSubmit,
  tourForm,
}) => {
  const { register, handleSubmit, setValue } = useForm();

  const { state } = useGlobalState();
  const categories = state?.categories || [];

  useEffect(() => {
    if (editMode && tourForm) {
      setValue('tourName', tourForm.tourName);
      setValue('image_url', tourForm.image_url);
      setValue('tourDescription', tourForm.tourDescription);
      setValue('categoryId', tourForm?.categoryId);
    } else {
      setValue('tourName', '');
      setValue('image_url', '');
      setValue('tourDescription', '');
      setValue('categoryId', '');
    }
  }, [editMode, tourForm, setValue]);

  return (
    <section className="modal__overlay">
      <div className="modal__content">
        <h3>{editMode ? 'Editar Tour' : 'Agregar Tour'}</h3>
        {
          editMode ? <img className='modal__image' src={tourForm?.image_url} alt="" /> : ""
        }
        <form className="modal__form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="name">Nombre del tour:</label>
          <input
            type="text"
            id="name"
            placeholder="Nombre de la categoría"
            defaultValue={tour?.tourName || ''}
            {...register('tourName')}
          />
          <label htmlFor="image_url">URL de la imagen:</label>
          <input
            type="text"
            id="image_url"
            placeholder="URL de la imagen"
            defaultValue={tour?.image_url || ''}
            {...register('image_url')}
          />
          <label htmlFor="description">Descripción:</label>
          <textarea
            type="text"
            id="description"
            rows="5"
            placeholder="Descripción"
            defaultValue={tour?.tourDescription || ''}
            {...register('tourDescription')}
          />
          <label htmlFor="id_category">Categoría:</label>
          <select id="id_category" {...register('categoryId')}>
            {categories.map(category => (
              <option key={category?.id} value={category?.id}>
                {category?.categoryName}
              </option>
            ))}
          </select>
          <Button type="submit">{editMode ? 'Guardar' : 'Agregar'}</Button>
        </form>
        <span className="modal__close" onClick={onClose}><GrFormClose /></span>
      </div>
    </section>
  )
}
