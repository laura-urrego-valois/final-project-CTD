import { DetailedCard } from "../../components/Card"
import { useGlobalState } from "../../context"

export const Favorites = () => {
  const { state } = useGlobalState()

  const getCategoryName = (categoryId) => {
    const category = state?.categories?.find((cat) => cat?.id === categoryId)
    return category ? category.categoryName : ""
  }
  return state?.favorites?.map((tour) => (
    <DetailedCard
      key={tour.id}
      id={tour.id}
      title={tour.tourName}
      description={tour.tourDescription}
      imageSrc={tour.images[0]?.imageUrl}
      classification={tour.tourClassification}
      category={getCategoryName(tour.categoryId)}
      score={tour.tourScore}
    />
  ))
}
