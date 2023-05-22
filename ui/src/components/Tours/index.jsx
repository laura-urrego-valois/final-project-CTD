import { useState } from "react";
import { useGlobalState } from "../../context";
import { DetailedCard } from "../Card";
import { Button } from "../Button";
import './Tour.css'

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
        const category = categories?.find((cat) => cat.id_category === categoryId);
        return category ? category.name : "";
    };

    const filteredTours = () => {
        if (!selectedCategory) {
            return tours?.slice(currentPage, currentPage + ITEMS_PER_PAGE)
        }
        const filtered = tours?.filter(tour => tour.id_category === selectedCategory)
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
                            title={tour.name}
                            description={tour.description}
                            imageSrc={tour.image_url}
                            classification={tour.classification}
                            category={getCategoryName(tour.id_category)}
                            score={tour.score}
                        />
                    ))
                }
            </div>

            <div className="recommendations__buttons">
                <p>
                    <Button type="primary" onClick={prevPage}>Antes</Button>
                </p>
                <p>
                    <Button type="primary" onClick={nextPage}>Siguiente</Button>
                </p>
            </div>
        </section>
    )
}

