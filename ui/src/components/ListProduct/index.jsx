import { useState } from 'react';
import { useGlobalState } from "../../context";
import './ListProduct.css';

export const ListProduct = () => {
  const { state } = useGlobalState();
  const { tours } = state;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const openModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTour(null);
    setIsModalOpen(false);
  };

  const handleDeleteTour = (tourId) => {

    console.log('eliminar id =>', tourId);
  };

  return (
    <section className="list__container">
      {tours?.map((tour) => (
        <article className="list__content" key={tour.id_tour}>
          <img className="list__image" src={tour.image_url} alt="" />
          <p className="list__title">{tour.name}</p>
          <button onClick={() => openModal(tour)}>editar</button>
          <button onClick={() => handleDeleteTour(tour.id_tour)}>eliminar</button>
        </article>
      ))}
      {isModalOpen && (
        <Modal tour={selectedTour} onClose={closeModal} />
      )}
    </section>
  );
};

const Modal = ({ tour, onClose }) => {
  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <h2>Editar Tour</h2>
        <img className='modal__image' src={tour.image_url} alt="" />
        <p>Nombre del tour: {tour?.name}</p>
        <p>Categoria: {tour.id_category}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};
