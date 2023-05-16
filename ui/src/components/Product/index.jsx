import { Link } from "react-router-dom";
import { SimpleCard, DetailedCard } from '../Card'
import './Product.css'
import { dataCategory } from '../Data/dataCategory'
import { useState } from "react";

export const Product = () => {

  const [selectedCategory, setSelectedCategory] = useState(Math.floor(Math.random() * dataCategory.length));
  const datafilter = dataCategory.find((data) => data.id === selectedCategory)

  return (
    <>
      <section className='product'>
        <h1>Buscar por categorias</h1>
        <div className='product__content'>
          {
            dataCategory.map((data, i) => (
              <Link className="product_link" key={i}
                to={"/"}
                onClick={() => setSelectedCategory(data.id)}>
                <SimpleCard
                  imageSrc={data.img}
                  title={data.name}
                  description={data.description}
                />
              </Link>
            ))}
        </div>
      </section>
      <section>
        <h1>Recomendaciones</h1>
        <div className='recommendations__content'>
          {datafilter.tour.map((data, i) => (
            <DetailedCard key={i}
              imageSrc={data.img}
              title={data.category}
              description={data.description}
              rating={data.rating}
              category={data.category_description}
              classification={data.classification}
              score={data.score}
            />
          ))}
        </div>
      </section>
    </>
  )
}
