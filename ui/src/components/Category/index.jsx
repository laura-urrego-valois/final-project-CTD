import { useGlobalState } from "../../context";
import { SimpleCard } from "../Card";

import "./Category.css";

export const Category = () => {
	const { state } = useGlobalState();
	const { categories } = state
	return (
		<section className="category">
			<h1>Categorias</h1>
			<div className="category__content">
				{categories?.map((category) => (
					<SimpleCard
						key={category.id_categoria}
						imageSrc={category.imagen_url}
						title={category.nombre}
						description={category.descripcion}
					/>
				))}
			</div>
		</section>
	);
};
