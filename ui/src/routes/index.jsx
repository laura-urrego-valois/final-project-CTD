import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFound } from "../pages/notFound";
import { AdminPanel } from "../pages/admin";
import Detail from "../pages/Detail";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";


export const AppRoutes = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
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
		</>
	);
};
