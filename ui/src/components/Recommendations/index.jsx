import { useGlobalState } from "../../context";
import { DetailedCard } from "../Card";
import "./Recommendations.css";
DetailedCard;
export const Recommendations = () => {
	const { state } = useGlobalState();

	return (
		<section>
			<h1>Tours</h1>
			<div className="recommendations__content">
				{state?.tours?.map((tour) => (
					<DetailedCard
						key={tour.id_tour}
						title={tour.nombre}
						description={tour.descripcion}
						imageSrc={tour.imagen_url}
						rating={tour.calificacion_promedio}
						classification={tour.capacidad}
						category={tour.id_categoria}
						score={tour.precio_persona}
					/>
				))}
			</div>
		</section>
	);
};
