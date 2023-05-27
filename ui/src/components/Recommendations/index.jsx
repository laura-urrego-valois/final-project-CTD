import { useState } from "react";
import { useGlobalState } from "../../context";
import { DetailedCard } from "../Card";
import { Pagination } from "../Pagination";
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

	const [currentPage, setCurrentPage] = useState(1);
	const filteredToursItemsPerPage = 4; // Elemento por pagina
	const shuffledToursItemsPerPage = 6; // Elemento por pagina

	const goToNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const goToPrevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};
	console.log("tours", tours)

	const renderTours = (toursToRender, itemsPerPage) => {
		return toursToRender
			.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
			.map((tour) => (
				<DetailedCard
					key={tour.id_tour}
					id={tour.id_tour}
					title={tour.tourName}
					description={tour.tourDescription}
					imageSrc={tour.image_url}
					classification={tour.tourClassification}
					category={getCategoryName(tour.tourCategory.id_category)}
					score={tour.tourScore}
				/>
			));
	};

	const filteredToursToShow = renderTours(filteredTours || [], filteredToursItemsPerPage);
	const shuffledToursToShow = renderTours(shuffledTours || [], shuffledToursItemsPerPage);

	const filteredToursTotalPages = Math.ceil((filteredTours?.length || 0) / filteredToursItemsPerPage);
	const shuffledToursTotalPages = Math.ceil((shuffledTours?.length || 0) / shuffledToursItemsPerPage);

	const totalPages = filteredToursToShow.length > 0 ? filteredToursTotalPages : shuffledToursTotalPages;

	return (
		<section>
			<h2>Tours</h2>
			<div className="recommendations__content">
				{filteredToursToShow.length > 0 ? filteredToursToShow : shuffledToursToShow}
			</div>
			<div className="recommendations__buttons">
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onNextPage={goToNextPage}
					onPrevPage={goToPrevPage}
				/>
			</div>
		</section>
	);
};
