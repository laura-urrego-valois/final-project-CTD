import { useGlobalState } from "../../context";
import { DetailedCard } from "../Card";
import { Pagination } from "../Pagination";
import { usePagination } from "../../hooks/usePagination";
import "./Recommendations.css";

export const Recommendations = () => {
	const { state } = useGlobalState();
	const { selectedCategory, tours, categories } = state;
	const { currentPage, goToNextPage, goToPrevPage } = usePagination(7);

	const filteredTours = tours?.filter((tour) => tour?.categoryId === selectedCategory);
	const shuffledTours = tours?.sort(() => Math.random() - 0.5);

	const getCategoryName = (categoryId) => {
		const category = categories?.find((cat) => cat?.id === categoryId);
		return category ? category.categoryName : "";
	};

	const filteredToursItemsPerPage = 4; // Elemento por pagina
	const shuffledToursItemsPerPage = 10; // Elemento por pagina
	console.log("tour", state)

	const renderTours = (toursToRender, itemsPerPage) => {
		return toursToRender
			.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
			.map((tour) => (
				<DetailedCard
					key={tour.id}
					id={tour.id}
					title={tour.tourName}
					description={tour.tourDescription}
					imageSrc={tour.tourImageURL}
					classification={tour.tourClassification}
					category={getCategoryName(tour.categoryId)}
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
