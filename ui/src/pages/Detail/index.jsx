import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";

import { useGlobalState } from "../../context";

const Detail = () => {
	let { id } = useParams();
	const { state } = useGlobalState();

	// Descomentar cuando funcione endpoint get by id

	// const fetchById = async () => {
	// 		await axios.get(`${BASE_URL}/tours/${id}`).then((response) => {
	// 			dispatch({
	// 				type: actions.GET_BY_ID,
	// 				payload: response.data,
	// 			});
	// 		});
	// 	};

	const itemDetail = state?.tours?.find(
		(item) => parseInt(item.id_tour) === parseInt(id)
	);

	return (
		<Container>
			<h1>{itemDetail?.nombre}</h1>
		</Container>
	);
};

export default Detail;
