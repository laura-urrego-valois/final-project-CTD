import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFound } from "../pages/notFound";
import { AdminPanel } from "../pages/admin";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="*"
				element={<NotFound />}
			/>
			<Route
				path="/admin"
				element={<AdminPanel />}
			/>
		</Routes>
	);
};
