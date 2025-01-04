import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ThemeContextProvider from "./Context/ThemeContext";

createRoot(document.getElementById("root")).render(
	<ThemeContextProvider>
		<StrictMode>
			<App />
		</StrictMode>
	</ThemeContextProvider>,
);
