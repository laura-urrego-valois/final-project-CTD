/* eslint-disable no-unused-vars */
import { Container } from "../../components/Container";

import "./User.css";
import { Button } from "../../components/Button";
import { useGlobalState } from "../../context";

export const User = () => {
	const { user } = useGlobalState();

	return (
		<Container>
			<h1>Profile</h1>
			<section className="user__section">
				<div>
					<img
						src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000"
						alt="user"
					/>
				</div>
				<span>
					<ion-icon
						name="at-circle-outline"
						size="small"></ion-icon>
					<h3>Email:</h3>
					<p>{user?.sub}</p>
				</span>
				<Button type="primary">Reservas</Button>
			</section>
		</Container>
	);
};
