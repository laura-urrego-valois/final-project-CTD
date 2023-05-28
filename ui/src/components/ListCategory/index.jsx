import { useState } from 'react';
import { Button } from '../Button';
import './ListCategory.css'
import { useGlobalState } from '../../context';
import { Pagination } from '../Pagination';
import { actions } from '../../context/reducer';

export const ListCategory = () => {
  const { state, dispatch } = useGlobalState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategorie, setSelectedCategorie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 7;
  console.log('state', state.categories
  )
  const categories = state?.categories || []

  const openModal = (categorie) => {
    setSelectedCategorie(categorie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCategorie(null);
    setIsModalOpen(false);
  };

  const handleDeleteCategorie = (categorieId) => {
    dispatch({
      type: actions.REMOVE_CATEGORY,
      payload: categorieId,
    });
    console.log('eliminar id =>', categorieId);
  };

  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  const getCurrentPagecategories = () => {
    const startIndex = (currentPage - 1) * categoriesPerPage;
    const endIndex = startIndex + categoriesPerPage;
    return categories.slice(startIndex, endIndex);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };


  return (
    <section className="list__container">
      {getCurrentPagecategories().map((categorie) => (
        <article className="list__content" key={categorie.id_category}>
          <img className="list__image" src={categorie.image_url} alt="" />
          <p className="list__title">{categorie.name}</p>
          <div className='list__button'>
            <Button onClick={() => openModal(categorie)}>editar</Button>
            <Button type="primary" onClick={() => handleDeleteCategorie(categorie.id_category)}>eliminar</Button>
          </div>
        </article>
      ))}
      {isModalOpen && (
        <Modal categorie={selectedCategorie} onClose={closeModal} />
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

const Modal = ({ categorie, onClose }) => {
  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <h2>Editar Categoria</h2>
        <img className='modal__image' src={categorie.image_url} alt="" />
        <p>Nombre de la categoria: {categorie?.name}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};
