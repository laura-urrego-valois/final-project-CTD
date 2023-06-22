import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./theme/theme.css";
import { ContextProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<HashRouter>
				<AppRoutes />
			</HashRouter>
		</ContextProvider>
	</React.StrictMode>
);
