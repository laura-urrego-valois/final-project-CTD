import { useState } from 'react';
import { useGlobalState } from "../../context";
import { actions } from "../../context/reducer";
import { Pagination } from '../Pagination';
import { Button } from '../Button';
import './ListProduct.css';
export const ListProduct = () => {
  const { state, dispatch } = useGlobalState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 7;

  const tours = state?.tours || []

  const openModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTour(null);
    setIsModalOpen(false);
  };

  const handleDeleteTour = (tourId) => {
    dispatch({
      type: actions.REMOVE_ITEM,
      payload: tourId,
    });
    console.log('eliminar id =>', tourId);
  };

  const totalPages = Math.ceil(tours.length / toursPerPage);

  const getCurrentPageTours = () => {
    const startIndex = (currentPage - 1) * toursPerPage;
    const endIndex = startIndex + toursPerPage;
    return tours.slice(startIndex, endIndex);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };


  return (
    <section className="list__container">
      {getCurrentPageTours().map((tour) => (
        <article className="list__content" key={tour.id}>
          <img className="list__image" src={tour.image_url} alt="" />
          <p className="list__title">{tour.name}</p>
          <div className='list__button'>
            <Button onClick={() => openModal(tour)}>editar</Button>
            <Button type="primary" onClick={() => handleDeleteTour(tour.id)}>eliminar</Button>
          </div>
        </article>
      ))}
      {isModalOpen && (
        <Modal tour={selectedTour} onClose={closeModal} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={goToNextPage}
        onPrevPage={goToPrevPage}
      />
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
