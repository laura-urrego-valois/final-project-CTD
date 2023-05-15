import { SimpleCard } from '../Card'
import './Category.css'
import { dataCategory } from '../Data/dataCategory'
export const Category = () => {
  return (
    <section className='category'>
      <h1>Buscar por tipo de tour</h1>
      <div className='category__content'>
        {
          dataCategory.map((data, i) => {
            return (
              <SimpleCard key={i}
                imageSrc={data.img}
                title={data.category}
                description={data.description}
              />
            )
          })
        }
      </div>
    </section>
  )
}
