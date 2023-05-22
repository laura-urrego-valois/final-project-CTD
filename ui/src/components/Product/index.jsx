import { Link } from "react-router-dom";
import { SimpleCard } from '../Card'
import './Product.css'
import { useGlobalState } from "../../context";

export const Product = () => {
  const { state, setSelectedCategory, } = useGlobalState();

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

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
                imageSrc={data.image_url}
                title={data.name}
                description={data.description}
              />
            </Link>
          ))}
      </div>
    </section>
  )
}
