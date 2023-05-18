import { Link } from "react-router-dom";
import { SimpleCard } from "../Card";
import "./Product.css";
import { useGlobalState } from "../../context";

export const Product = () => {
	const { state, setSelectedCategory } = useGlobalState();
	const { categories } = state

	const handleCategoryClick = (categoryId) => {
		setSelectedCategory(categoryId);
	};

	return (
		<section className="product">
			<h1>Buscar por categorias</h1>
			<div className="product__content">
				{categories?.map((data) => (
					<Link
						className="product_link"
						key={data.id}
						to={"/"}
						onClick={() => handleCategoryClick(data.id)}>
						<SimpleCard
							imageSrc={data.imagen_url}
							title={data.nombre}
							description={data.descripcion}
						/>
					</Link>
				))}
			</div>
		</section>

	);
};
