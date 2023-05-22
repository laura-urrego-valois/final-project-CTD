import { useGlobalState } from "../../context";
import { Button } from "../Button";
import { DetailedCard } from "../Card";
import "./Recommendations.css";

export const Recommendations = () => {
	const { state } = useGlobalState();
	const { selectedCategory, tours, categories } = state;

	const filteredTours = tours?.filter((tour) => tour.id_category === selectedCategory);
	const shuffledTours = tours?.sort(() => Math.random() - 0.5);

	const getCategoryName = (categoryId) => {
		const category = categories?.find((cat) => cat.id_category === categoryId);
		return category ? category.name : "";
	};
	console.log("hi", filteredTours, "oi", shuffledTours)
	return (
		<section>
			<h2>Tours</h2>
			<div className="recommendations__content">
				{
					filteredTours?.length > 0 ? (
						filteredTours.slice(0, 6).map((tour) => (
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
								key={tour.id}
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
			<div className="recommendations__buttons">
				<p>
					<Button type="primary" >Antes</Button>
				</p>
				<p>
					<Button type="primary" >Siguiente</Button>
				</p>
			</div>
		</section>
	);
};
