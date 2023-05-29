import { useEffect } from "react";
import { useForm } from "react-hook-form";
import './Modal.css'

export const Modal = ({ onClose, editMode, categorie, handleFormSubmit, categoryForm }) => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (editMode && categoryForm) {
      setValue('name', categoryForm.name);
      setValue('image_url', categoryForm.image_url);
      setValue('description', categoryForm.description);
    } else {
      setValue('name', '');
      setValue('image_url', '');
      setValue('description', '');
    }
  }, [editMode, categoryForm, setValue]);

  return (
    <section className="modal__overlay-category">
      <div className="modal__content-category">
        <h2>{editMode ? 'Editar Categoría' : 'Agregar Nueva Categoría'}</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            type="text"
            placeholder="Nombre de la categoría"
            defaultValue={categorie?.name || ''}
            {...register('name')}
          />
          <input
            type="text"
            placeholder="URL de la imagen"
            defaultValue={categorie?.image_url || ''}
            {...register('image_url')}
          />
          <input
            type="text"
            placeholder="Descripción"
            defaultValue={categorie?.description || ''}
            {...register('description')}
          />
          <button type="submit">{editMode ? 'Guardar' : 'Agregar'}</button>
        </form>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </section>
  )
}
