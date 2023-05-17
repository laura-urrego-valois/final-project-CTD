import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { NotFound } from "../pages/notFound";
import { AdminPanel } from "../pages/admin";
import Detail from "../pages/Detail";

export const AppRoutes = () => {
<<<<<<< HEAD
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}
=======
	return (
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
	);
};
>>>>>>> a59cef66a43cd719c8e359891ce31a24ef791e06
