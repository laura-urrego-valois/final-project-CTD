import { Link, useParams } from "react-router-dom";
import { useGlobalState } from "../../context";
import { Button } from "../../components/Button";
import './Detail.css'
import { Gallery } from "../../components/Gallery";

export const dataGallery = {
	galleryImage: [
		"https://images.unsplash.com/photo-1602385676570-ca41945dcf69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		"https://images.unsplash.com/photo-1617284562844-a2098e406b8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
		"https://images.unsplash.com/photo-1507125524815-d9d6dccda1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80",
		"https://images.unsplash.com/photo-1587019720353-0ac8b27083fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		"https://images.unsplash.com/photo-1614444894791-c0c4d4286c35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	]
}

const Detail = () => {
	let { id } = useParams();
	const { state } = useGlobalState();
	const { categories, tours } = state

	// Descomentar cuando funcione endpoint get by id

	// const fetchById = async () => {
	// 		await axios.get(`${BASE_URL}/tours/${id}`).then((response) => {
	// 			dispatch({
	// 				type: actions.GET_BY_ID,
	// 				payload: response.data,
	// 			});
	// 		});
	// 	};

	const itemDetail = tours?.find(
		(item) => item.id_tour == id
	);
	const getCategoryName = (categoryId) => {
		const category = categories?.find((cat) => cat.id_category === categoryId);
		return category ? category.name : "";
	};

	return (
		<article className="detail__container">
			<div className="detail">
				<h1 className="detail__title">{itemDetail.name}</h1>
				<Link to="/">
					<Button type="secondary">⬅</Button>
				</Link>
			</div>
			{/* //Layout component Gallery */}
			<Gallery dataImage={dataGallery.galleryImage} />

			<section className="detail__content">
				<div className="detail__info">
					<div className="detail-value">
						<h3 className="detail__price">{`Price: ${itemDetail.price} USD`}</h3>
						<p className="detail__category">{getCategoryName(itemDetail.id_category)}</p>
					</div>
					<p className="detail__description">{itemDetail.description}</p>
				</div>
			</section>
		</article>
	);
};

export default Detail;
