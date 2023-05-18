import { useGlobalState } from "../../context";
import { DetailedCard } from "../Card";
import "./Recommendations.css";
DetailedCard;

export const Recommendations = () => {
	const { state } = useGlobalState();
	const { tours, categories } = state;
	const shuffledTours = tours?.slice(0, 5).sort(() => Math.random() - 0.5);

	const getCategoryName = (categoryId) => {
		const category = categories?.find((cat) => cat.id === categoryId);
		return category ? category.nombre : "";
	};

	return (
		<section>
			<h1>Recomendados</h1>
			<div className="recommendations__content">
				{
					shuffledTours?.map((tour) => (
						<DetailedCard
							key={tour.id}
							id={tour.id}
							title={tour.title}
							description={tour.description}
							imageSrc={tour.img}
							classification={tour.classification}
							category={getCategoryName(tour.id_categoria)}
							score={tour.score}
						/>
					))}
			</div>
		</section>
	);
};
