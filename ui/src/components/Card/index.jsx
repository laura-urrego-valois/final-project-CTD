import { useState } from "react";
import { Button } from "../Button";
import "./Card.css";

export const SimpleCard = ({ title, imageSrc }) => {
  return (
    <>
      <article className="card">
        <img src={imageSrc} alt={title} className="card__image" />
        <div className="card__container">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">807.105 hoteles</p>
        </div>
      </article>
    </>
  )
}
export const DetailedCard = ({ imageSrc, title, rating, description, category, classification, score }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDescription = description.slice(0, 100);
  const shouldTruncate = description.length > 100;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <article className="card card__query">
        <div className="card--liked">
          <img src={imageSrc} alt={title} className="card__image" />
          <span className="card__like">♥</span>
        </div>
        <div className="card__content">
          <div className="card__details">
            <div className="card__header">
              <span className="card__category">{category}</span>
              <span className="card__rating">{rating}</span>
              <h2 className="card__title">{title}</h2>
            </div>
            <div className="card__info">
              <p className="card__score">{score}</p>
              <p className="card__classification">{classification}</p>
            </div>
          </div>
          <p className="card__description">
            {isExpanded ? description : truncatedDescription}
            {shouldTruncate && (
              <span
                className={`card__expand card__expand--${isExpanded ? 'less' : 'more'}`}
                onClick={toggleExpansion}
              />
            )}
          </p>
          <Button type="primary">Ver más</Button>
        </div>
      </article>
    </>
  )
}
