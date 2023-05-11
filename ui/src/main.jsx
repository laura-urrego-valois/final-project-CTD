import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./index.css";
import { ContextProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</ContextProvider>
	</React.StrictMode>
);
