import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
	const [colorTheme, setColorTheme] = useState("Blue");
	console.log(ThemeContext);
	console.log(colorTheme);

	return (
		<ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
