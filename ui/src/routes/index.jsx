import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";


import { Home } from "../pages/home";
import { NotFound } from "../pages/notFound";
import { AdminPanel } from "../pages/admin";
import Detail from "../pages/Detail";
import { Register } from "../pages/register";
import { Login } from "../pages/login";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export const AppRoutes = () => {
	return (
		<Fragment>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />} />
				<Route
					path="/register"
					element={<Register />} />
				<Route
					path="/detalle/:id"
					element={<Detail />}
				/>
				<Route
					path="/admin"
					element={<AdminPanel />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
			<Footer />
		</Fragment>
	);
};
