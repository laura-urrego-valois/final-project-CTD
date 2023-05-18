import { Link, useParams } from "react-router-dom";
import { useGlobalState } from "../../context";
import { Button } from "../../components/Button";
import './Detail.css'

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
		(item) => item.id == id
	);
	const getCategoryName = (categoryId) => {
		const category = categories?.find((cat) => cat.id_categoria === categoryId);
		return category ? category.nombre : "";
	};

	return (
		<article className="detail__container">
			<div className="detail">
				<h1 className="detail__title">{itemDetail.title}</h1>
				<Link to="/">
					<Button type="secondary">⬅</Button>
				</Link>
			</div>
			<section className="detail__content">
				<img className="detail__img" src={itemDetail.img} alt="" />
				<div className="detail__info">
					<div className="detail-value">
						<h3 className="detail__price">{`Price: ${itemDetail.price} USD`}</h3>
						<p className="detail__category">{getCategoryName(itemDetail.id_categoria)}</p>
					</div>
					<p className="detail__description">{itemDetail.description}</p>
				</div>
			</section>
		</article>
	);
};

export default Detail;
