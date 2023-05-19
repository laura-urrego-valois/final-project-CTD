import { useState } from "react";
import { useGlobalState } from "../../context";
import { DetailedCard } from "../Card";
import { Button } from "../Button";

export const Tours = () => {
    const { state } = useGlobalState();
    const { tours, categories, selectedCategory } = state;
    const [currentPage, setCurrentPage] = useState(0)
    const ITEMS_PER_PAGE = 10


    const nextPage = () => {
        setCurrentPage(currentPage + ITEMS_PER_PAGE)
    }

    const prevPage = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - ITEMS_PER_PAGE)
    }


    const getCategoryName = (categoryId) => {
        const category = categories?.find((cat) => cat.id === categoryId);
        return category ? category.nombre : "";
    };

    const filteredTours = () => {
        if (!selectedCategory) {
            return tours?.slice(currentPage, currentPage + ITEMS_PER_PAGE)
        }
        const filtered = tours?.filter(tour => tour.id_categoria === selectedCategory)
        return filtered?.slice(currentPage, currentPage + ITEMS_PER_PAGE)
    }

    return (
        <section>
            <h1>Tours</h1>

            <div className="recommendations__content">
                {
                    filteredTours()?.map((tour) => (
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
                }
            </div>

            <div className="recommendations__buttons">
                <Button type="primary" onClick={prevPage}>Antes</Button>
                <Button type="primary" onClick={nextPage}>Siguiente</Button>
            </div>
        </section>
    )
}

