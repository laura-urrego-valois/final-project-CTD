import { useGlobalState } from "../../context";
import { DetailedCard } from "../Card";
import "./Recommendations.css";
DetailedCard;
export const Recommendations = () => {
	const { state } = useGlobalState();
	const { selectedCategory, tours, categories } = state;

	const filteredTours = tours?.filter((tour) => tour.id_categoria === selectedCategory);
	const shuffledTours = tours?.sort(() => Math.random() - 0.5);

	const getCategoryName = (categoryId) => {
		const category = categories?.find((cat) => cat.id_categoria === categoryId);
		return category ? category.nombre : "";
	};

	return (
		<section>
			<h1>Tours</h1>
			<div className="recommendations__content">
				{
					filteredTours?.length > 0 ? (
						filteredTours.map((tour) => (
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
						))
					) : (
						shuffledTours?.map((tour) => (
							< DetailedCard
								key={tour.id}
								id={tour.id}
								title={tour.title}
								description={tour.description}
								imageSrc={tour.img}
								classification={tour.classification}
								category={getCategoryName(tour.id_categoria)}
								score={tour.score}
							/>
						)))}
			</div>
		</section>
	);
};
