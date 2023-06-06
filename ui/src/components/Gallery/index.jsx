import { useState } from 'react';
import Modal from 'react-modal';
import { Carrusel } from '../Carrusel'
import './Gallery.css'

export const Gallery = ({ dataImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="gallery__container">
        <figure className="gallery__content">
          {
            dataImage?.map((image, i) => (
              <img className='content-image' key={i} src={image} alt="2" />

            ))
          }
        </figure>
        <a className='gallery__title' onClick={() => setIsModalOpen(true)}>Ver mas</a>
      </section>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Carrusel Modal"
        className="modal"
        overlayClassName="modal__overlay"
      >
        <Carrusel dataImage={dataImage} />
      </Modal>
    </>
  )
}

