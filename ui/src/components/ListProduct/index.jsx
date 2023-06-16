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
  const { currentPage, goToNextPage, goToPrevPage, getCurrentPageItems, getTotalPages } = usePagination(6);

  const tours = state?.tours || [];
  const categories = state?.categories || [];

  const { reset } = useForm();
  const [editMode, setEditMode] = useState(false);
  const [tourForm, setTourForm] = useState({
    id: '',
    categoryId: 0,
    countryId: '',
    features: [],
    images: [],
    tourCapacity: 0,
    tourClassification: "",
    tourDescription: "",
    tourName: '',
    tourPrice: 0,
    tourScore: 0
  });

  const openModal = (tour) => {
    if (tour) {
      setEditMode(true);
      setTourForm(tour);
    } else {
      setEditMode(false);
      setTourForm({
        id: '',
        categoryId: 0,
        countryId: '',
        features: [],
        images: [],
        tourCapacity: 0,
        tourClassification: "",
        tourDescription: "",
        tourName: '',
        tourPrice: 0,
        tourScore: 0
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

  //const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODY4ODI2OTgsImV4cCI6MTY4Njg4NTM5OH0.VSHUSbn9ZpfFDmCNxF9ijiIplgFfWnRMBUhlmhDN8E8"
  const handleFormSubmit = async (data) => {
    data.categoryId = parseInt(data.categoryId);
    data.countryId = parseInt(data.countryId);
    const dataF = {
      tourClassification: "Bueno",
      tourCapacity: 10,
      tourAvailability: 0,
      tourPrice: 50.3,
      tourScore: 8,
    }
    try {
      const updatedTour = { ...tourForm, ...data, ...dataF };
      console.log("dataNEW", updatedTour)
      if (editMode) {
        await updateTour(updatedTour.id, updatedTour);
        dispatch({
          type: actions.UPDATE_CATEGORY,
          payload: updatedTour,
        });
      } else {
        console.log("DATA_ADD", updatedTour)
        await addTour(updatedTour);
        /*  const formData = new FormData();
         formData.append('files', updatedTour.toursImageFile[0]);
         formData.append('Tour', JSON.stringify(updatedTour));
         console.log("formData", formData)
         try {
           const config = {
             'Content-Type': 'multipart/form-data',
             headers: {
               Authorization: `Bearer ${token}`
             }
           };
           const response = await axios.post(`http://localhost:8000/tours/load_image`, updatedTour, config)
           dispatch({
             type: actions.CREATE_TOUR,
             payload: response.data,
           })
         } catch (error) {
           console.error("Error adding tour:", error);
         } */
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