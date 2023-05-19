import { useState } from "react";
import { Button } from "../Button";
import "./Card.css";
import { useNavigate } from "react-router-dom";

/**
 * Representa una tarjeta simple con una imagen y un título.
 * @param {string} title - El título de la tarjeta.
 * @param {string} imageSrc - La URL de la imagen de la tarjeta.
 */
export const SimpleCard = ({ title, imageSrc, description }) => {
	return (
		<article className="card">
			<img
				src={imageSrc}
				alt={title}
				className="card__image"
			/>
			<div className="card__container">
				<h2 className="card__title">{title}</h2>
				<p className="card__description">{description}</p>
			</div>
		</article>
	);
};

/**
 * Representa una tarjeta detallada con una imagen, título, descripción, categoría y puntaje.
 * @param {string} imageSrc - La URL de la imagen de la tarjeta.
 * @param {string} title - El título de la tarjeta.
 * @param {number} rating - La calificación de la tarjeta.
 * @param {string} description - La descripción de la tarjeta.
 * @param {string} category - La categoría de la tarjeta.
 * @param {string} classification - La clasificación de la tarjeta.
 * @param {number} score - El puntaje de la tarjeta.
 */
export const DetailedCard = ({
	id,
	imageSrc,
	title,
	rating,
	description,
	category,
	classification,
	score,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const navigate = useNavigate();

	const truncatedDescription = description.slice(0, 100);
	const shouldTruncate = description.length > 100;

	const toggleExpansion = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<article
			className="card card__query"
			onClick={() => navigate(`/detalle/${id}`)}>
			<div className="card--liked">
				<img
					src={imageSrc}
					alt={title}
					className="card__image"
				/>
				{/* <span className="card__like">♥</span> */}
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
							className={`card__expand card__expand--${isExpanded ? "less" : "more"
								}`}
							onClick={toggleExpansion}
						/>
					)}
				</p>
				<Button type="primary">Ver más</Button>
			</div>
		</article>
	);
};
