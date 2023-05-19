import { useGlobalState } from "../../context";
import { DetailedCard } from "../Card";
import "./Recommendations.css";
DetailedCard;

export const Recommendations = () => {
	const { state } = useGlobalState();
	const { selectedCategory, tours, categories } = state;

	const filteredTours = tours?.filter((tour) => tour.id_category === selectedCategory);
	const shuffledTours = tours?.sort(() => Math.random() - 0.5);

	const getCategoryName = (categoryId) => {
		const category = categories?.find((cat) => cat.id_category === categoryId);
		return category ? category.name : "";
	};

	return (
		<section>
			<h1>Recomendados</h1>
			<div className="recommendations__content">
				{
					filteredTours?.length > 0 ? (
						filteredTours.map((tour) => (
							<DetailedCard
								key={tour.id_tour}
								id={tour.id_tour}
								title={tour.name}
								description={tour.description}
								imageSrc={tour.image_url}
								classification={tour.classification}
								category={getCategoryName(tour.id_category)}
								score={tour.score}
							/>
						))
					) : (
						shuffledTours?.map((tour) => (
							< DetailedCard
								key={tour.id_tour}
								id={tour.id_tour}
								title={tour.name}
								description={tour.description}
								imageSrc={tour.image_url}
								classification={tour.classification}
								category={getCategoryName(tour.id_category)}
								score={tour.score}
							/>
						)))}
			</div>
		</section>
	);
};
