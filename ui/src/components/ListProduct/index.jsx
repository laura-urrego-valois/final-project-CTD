import { useState } from 'react';
import { useGlobalState } from "../../context";
import { actions } from "../../context/reducer";
import { Pagination } from '../Pagination';
import { Button } from '../Button';
import { usePagination } from '../../hooks/usePagination';
import { ModalProduct } from '../Modal/ModalProduct';
import { useForm } from 'react-hook-form';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import './ListProduct.css';

export const ListProduct = () => {
  const { state, dispatch, deleteTour, updateTour, addTour } = useGlobalState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const { currentPage, goToNextPage, goToPrevPage, getCurrentPageItems, getTotalPages } = usePagination(4);

  const tours = state?.tours || [];
  const categories = state?.categories || [];

  const { reset } = useForm();
  const [editMode, setEditMode] = useState(false);
  const [tourForm, setTourForm] = useState({
    id: '',
    name: '',
    image_url: '',
    description: '',
    id_category: 0,
  });

  const openModal = (tour) => {
    if (tour) {
      setEditMode(true);
      setTourForm(tour);
    } else {
      setEditMode(false);
      setTourForm({
        name: '',
        image_url: '',
        description: '',
        id_category: 0,
      });
      reset();
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTour(null);
    setIsModalOpen(false);
  };

  const handleDeleteTour = async (tourId) => {
    try {
      await deleteTour(tourId)
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  const totalPages = getTotalPages(tours);
  const currentTours = getCurrentPageItems(tours);

  const handleFormSubmit = async (data) => {
    try {
      data.categoryId = parseInt(data.categoryId);
      const updatedTour = { ...tourForm, ...data };
      console.log("update", updatedTour)

      if (editMode) {
        await updateTour(updatedTour.id, updatedTour);
        dispatch({
          type: actions.UPDATE_CATEGORY,
          payload: updatedTour,
        });
      } else {
        await addTour(updatedTour);
      }
      closeModal();
      reset();

      //window.location.reload();
    } catch (error) {
      console.error("Error adding/updating tour:", error);
    }
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.categoryName : '';
  };

  return (
    <section className="list__container">
      <Button onClick={() => openModal(null)}><GrAdd /></Button>
      {currentTours.map((tour) => (
        <article className="list__content" key={tour.id}>
          <img className="list__image" src={tour.imageCategory} alt="" />
          <p className="list__title">{tour.tourName}</p>
          <p>{getCategoryName(tour.categoryId)}</p>
          <div className='list__button'>
            <Button onClick={() => openModal(tour)}><AiFillEdit /></Button>
            <Button type="primary" onClick={() => handleDeleteTour(tour.id)}><AiFillDelete /></Button>
          </div>
        </article>
      ))}
      {isModalOpen && (
        <ModalProduct
          tour={selectedTour}
          onClose={closeModal}
          editMode={editMode}
          handleFormSubmit={handleFormSubmit}
          tourForm={tourForm}
        />
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