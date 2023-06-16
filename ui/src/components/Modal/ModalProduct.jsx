import { useEffect, useState } from "react";
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
  const { register, handleSubmit, setValue, watch } = useForm();

  const { state } = useGlobalState();
  const categories = state?.categories || [];
  const countries = state?.contries || [];
  const toursImageFile = watch('toursImageFile');

  console.log("tourForm", tourForm)
  useEffect(() => {
    if (editMode && tourForm) {
      setValue('tourName', tourForm.tourName);
      setValue('image_url', tourForm.image_url);
      setValue('tourDescription', tourForm.tourDescription);
      setValue('categoryId', tourForm?.categoryId);
      setValue('tourPrice', tourForm?.tourPrice);
      setValue('features', tourForm?.features);
      setValue('country', tourForm?.country)
    } else {
      setValue('tourName', '');
      setValue('image_url', '');
      setValue('tourDescription', '');
      setValue('categoryId', '');
      setValue('features', []);
      setValue('country', {})
    }
  }, [editMode, tourForm, setValue]);

  const feature = [{ id: 0, name: "selva" },
  { id: 1, name: "paseos" },
  { id: 2, name: "actividades deportivas" },
  { id: 3, name: "comida tradicional" },
  { id: 4, name: "parques naturales" },
  { id: 5, name: "vida silvestre" },
  { id: 6, name: "campamentos" },
  { id: 7, name: "caminatas guiadas" },
  ]

  useEffect(() => {
    if (toursImageFile instanceof File || toursImageFile instanceof Blob) {
      const imageUrl = URL.createObjectURL(toursImageFile);
      setValue('categoryImageURL', imageUrl);
    }
  }, [toursImageFile, setValue]);

  const [images, setimages] = useState([]);
  const changeInput = (e) => {
    let indexImg;

    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file
      });

      indexInicial++;
    });

    return arrayImages;
  }
  function deleteImg(indice) {
    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setimages(newImgs);
  }

  return (
    <section className="modal__overlay">
      <div className="modal__content">
        <h3>{editMode ? 'Editar Tour' : 'Agregar Tour'}</h3>
        {
          editMode ? <img className='modal__image' src={tourForm?.image_url} alt="" /> : ""
        }
        <form className="modal__form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="tourName">Nombre del tour:</label>
          <input
            type="text"
            id="tourName"
            placeholder="Nombre de la categoría"
            defaultValue={tour?.tourName || ''}
            {...register('tourName')}
          />
          <label htmlFor="toursImageFile">Cargar imagen:</label>
          <input
            type="file"
            id="toursImageFile"
            multiple
            accept="image/jpeg, image/png"
            {...register('toursImageFile')}
            onChange={changeInput}
          />
          <div className="image__container">
            {images.map((imagen) => (
              <div className="image__content" key={imagen.index}>
                <div className="content-img">
                  <button
                    className="image-btn"
                    onClick={deleteImg.bind(this, imagen.index)}
                  >
                    <GrFormClose />
                  </button>
                  <img
                    alt="algo"
                    src={imagen.url}
                    data-toggle="modal"
                    data-target="#ModalPreViewImg"
                    className="image-responsive"
                  ></img>
                </div>
              </div>
            ))}
          </div>
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
          <fieldset className="list__feature">
            <legend>Tipo de Caracteristicas:</legend>
            {feature.map(item => (
              <div key={item.id} className="feature__item">
                <input type="checkbox" id={item.name} name={item.name} />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            ))}
          </fieldset>
          <label htmlFor="id_category">País:</label>
          <select id="id_category" {...register('country')}>
            {countries.map(country => (
              <option key={country?.id} value={country?.id}>
                {country?.countryName}
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
