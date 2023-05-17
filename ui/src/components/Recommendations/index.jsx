import { useGlobalState } from "../../context";
import { DetailedCard } from "../Card";
import "./Recommendations.css";
DetailedCard;
export const Recommendations = () => {
	const { state } = useGlobalState();
	const { selectedCategory, tours } = state;

	const filteredTours = tours?.filter((tour) => tour.id_categoria === selectedCategory);
	const shuffledTours = tours?.sort(() => Math.random() - 0.5);

	return (
		<section>
			<h1>Tours</h1>
			<div className="recommendations__content">
				{
					filteredTours?.length > 0 ? (
						filteredTours.map((tour) => (
							<DetailedCard
								key={tour.id_tour}
								id={tour.id_tour}
								title={tour.nombre}
								description={tour.descripcion}
								imageSrc={tour.imagen_url}
								rating={tour.calificacion_promedio}
								classification={tour.capacidad}
								category={tour.id_categoria}
								score={tour.precio_persona}
							/>
						))
					) : (
						shuffledTours?.map((tour) => (
							<DetailedCard
								key={tour.id_tour}
								id={tour.id_tour}
								title={tour.nombre}
								description={tour.descripcion}
								imageSrc={tour.imagen_url}
								rating={tour.calificacion_promedio}
								classification={tour.capacidad}
								category={tour.id_categoria}
								score={tour.precio_persona}
							/>
						)))}
			</div>
		</section>
	);
};
