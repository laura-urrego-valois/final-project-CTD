import { Link } from "react-router-dom";
import { SimpleCard } from '../Card'
import { useGlobalState } from "../../context";
import './Product.css'

export const Product = () => {
  const { state, setSelectedCategory, } = useGlobalState();

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  console.log("product", state)
  return (
    <section className='product'>
      <h2>Buscar por categorias</h2>
      <div className='product__content'>
        {
          state?.categories?.map((data) => (
            <Link className="product_link" key={data.id_category}
              to={"/"}
              onClick={() => handleCategoryClick(data.id_category)}>
              <SimpleCard
                imageSrc={data.categoryImageURL}
                title={data.categoryName}
                description={data.categoryDescription}
              />
            </Link>
          ))}
      </div>
    </section>
  )
}
