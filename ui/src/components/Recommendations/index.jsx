import { DetailedCard } from "../Card"
import { dataRecommendations } from "../Data/dataCategory"
import './Recommendations.css'
DetailedCard
export const Recommendations = () => {
  return (
    <section>
      <h1>Recomendaciones</h1>
      <div className='recommendations__content'>
        {
          dataRecommendations.map((data, i) => {
            return (
              <DetailedCard key={i}
                imageSrc={data.img}
                title={data.category}
                description={data.description}
                rating={data.rating}
                category={data.category_description}
                classification={data.classification}
                score={data.score}
              />
            )
          })
        }
      </div>
    </section>
  )
}
