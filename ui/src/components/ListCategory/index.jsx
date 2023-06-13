import { useState } from 'react';
import { Button } from '../Button';
import { useGlobalState } from '../../context';
import { Pagination } from '../Pagination';
import { actions } from '../../context/reducer';
import { useForm } from 'react-hook-form';
import { usePagination } from '../../hooks/usePagination';
import { ModalCategory } from '../Modal/ModalCategory';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import './ListCategory.css'
import axios from 'axios';

export const ListCategory = () => {
  const { state, dispatch } = useGlobalState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategorie, setSelectedCategorie] = useState(null);
  const { currentPage, goToNextPage, goToPrevPage, getCurrentPageItems, getTotalPages } = usePagination(6);

  const categories = state?.categories || []

  const { reset } = useForm();
  const [editMode, setEditMode] = useState(false);
  const [categoryForm, setCategoryForm] = useState({
    id_category: '',
    name: '',
    image_url: '',
    description: ''
  });

  const openModal = (categorie) => {
    if (categorie) {
      setEditMode(true);
      setCategoryForm(categorie);
    } else {
      setEditMode(false);
      setCategoryForm({
        id_category: '',
        name: '',
        image_url: '',
        description: ''

      });
      reset();
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCategorie(null);
    setIsModalOpen(false);
  };

  /*   const handleDeleteCategorie = (categorieId) => {
      console.log('removeCategory', categorieId)
      dispatch({
        type: actions.REMOVE_CATEGORY,
        payload: categorieId,
      });

      if (selectedCategorie && selectedCategorie.id === categorieId) {
        closeModal();
      }
    }; */
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODY2NzQ2NDEsImV4cCI6MTY4NjY3NzM0MX0.yHEnhf9GgUlENiI63ELTooZ_4-_2WK5hBILdpCh0rSU';

  const handleDeleteCategorie = async (categoryId) => {
    try {

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      await axios.delete(`http://localhost:8000/category/${categoryId}`, config);
      dispatch({
        type: actions.REMOVE_CATEGORY,
        payload: categoryId,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const totalPages = getTotalPages(categories);
  const currentCategories = getCurrentPageItems(categories);

  /*   const handleFormSubmit = (data) => {
      console.log("dataCategory", data)
      const updatedCategory = { ...categoryForm, ...data };

      if (editMode) {
        dispatch({
          type: actions.UPDATE_CATEGORY,
          payload: updatedCategory,
        });
      } else {
        dispatch({
          type: actions.ADD_CATEGORY,
          payload: updatedCategory,
        });
      }

      closeModal();
      reset();
    }; */

  const handleFormSubmit = async (data) => {
    try {
      const updatedCategory = { ...categoryForm, ...data };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      if (editMode) {
        await axios.put(`http://localhost:8000/category/${updatedCategory.id}`, updatedCategory, config);
        dispatch({
          type: actions.UPDATE_CATEGORY,
          payload: updatedCategory,
        });
      } else {
        const response = await axios.post('http://localhost:8000/category', updatedCategory, config);
        const newCategory = response.data;
        dispatch({
          type: actions.ADD_CATEGORY,
          payload: newCategory,
        });
      }

      closeModal();
      reset();
      window.location.reload();
    } catch (error) {
      console.error("Error adding/updating category:", error);
    }
  };
//hola
  return (
    <section className="list__container">
      <Button onClick={() => openModal(null)}><GrAdd /></Button>
      {currentCategories.map((categorie) => (
        <article className="list__content" key={categorie?.id}>
          <img className="list__image" src={categorie?.categoryImageURL} alt="" />
          <p className="list__title">{categorie?.categoryName}</p>
          <div className='list__button'>
            <Button onClick={() => openModal(categorie)}><AiFillEdit /></Button>
            <Button type="primary" onClick={() => handleDeleteCategorie(categorie?.id)}><AiFillDelete /></Button>
          </div>
        </article>
      ))}
      {isModalOpen && (
        <ModalCategory
          categorie={selectedCategorie}
          onClose={closeModal}
          editMode={editMode}
          handleFormSubmit={handleFormSubmit}
          categoryForm={categoryForm}
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

